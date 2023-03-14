import { Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { IItem, listWeapons } from '../data/items.data'
import { addToLocalStorage, getToLocalStorage } from '../utils/localStorage.util'

import { Card } from './card.component'

export function Guns() {
  const keyLocalStorage: string = 'weapons'
  const [weapons, setWeapons] = useState(listWeapons)

  const changeSelection = (data: Omit<IItem, 'name'>) => {
    const listWeapons = weapons.map(weapon => {
      if (weapon.id === data.id) weapon.selected = data.selected;

      return weapon
    })

    /* Save to localStorage to backup */
    addToLocalStorage(keyLocalStorage, listWeapons)

    setWeapons(listWeapons)
  }

  const countSelected = () => {
    return weapons.filter(weapons => weapons.selected).length
  }

  const checkSelected = (id: string) => {
    return weapons.find(weapon => weapon.id === id && weapon.selected)?.selected || false
  }

  useEffect(() => {
    const weapons = getToLocalStorage(keyLocalStorage);

    if (weapons && weapons.length) {
      setWeapons(weapons);
      return
    }

    setWeapons(listWeapons)

  }, [])

  return (
    <Flex flexDirection={'column'} gap={10}>
      <Flex>
        <Text fontSize={18}>Encontrados: {countSelected()} / {weapons.length}</Text>
      </Flex>

      <Flex flexDirection={'column'} gap={3}>
        {weapons.map(weapon => (
          <Card
            key={weapon.id}
            id={weapon.id}
            name={weapon.name}
            selected={checkSelected(weapon.id)}
            changeSelection={changeSelection}
          ></Card>
        ))}
      </Flex>
    </Flex>


  )
}

