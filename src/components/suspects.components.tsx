import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { IItem, listSuspects } from "../data/items.data";
import { addToLocalStorage, getToLocalStorage } from '../utils/localStorage.util';

import { Card } from './card.component';

export function Suspects() {
  const keyLocalStorage: string = 'suspects'
  const [suspects, setSuspect] = useState(listSuspects);

  const changeSelection = (data: Omit<IItem, 'name'>) => {
    const listSuspects = suspects.map(suspect => {
      if (suspect.id === data.id) suspect.selected = data.selected;

      return suspect
    })

    /* Save to localStorage to backup */
    addToLocalStorage(keyLocalStorage, listSuspects)

    setSuspect(listSuspects)
  }

  const countSelected = () => {
    return suspects.filter(suspect => suspect.selected).length
  }

  const checkSelected = (suspectId: string) => {
    return suspects.find(suspect => suspect.id === suspectId && suspect.selected)?.selected || false
  }

  useEffect(() => {
    const weapons = getToLocalStorage(keyLocalStorage);

    if (weapons && weapons.length) {
      setSuspect(weapons);
      return
    }

    setSuspect(listSuspects)
  }, [])

  return (
    <Flex flexDirection={'column'} gap={10}>
      <Flex>
        <Text fontSize={18}>Encontrados: {countSelected()} / {suspects.length}</Text>
      </Flex>

      <Flex flexDirection={'column'} gap={3}>
        {suspects.map(suspect => (
          <Card
            key={suspect.id}
            id={suspect.id}
            name={suspect.name}
            selected={checkSelected(suspect.id)}
            changeSelection={changeSelection}
          ></Card>
        ))}
      </Flex>
    </Flex>



  )
}