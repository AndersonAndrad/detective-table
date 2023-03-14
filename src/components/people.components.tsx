import { Flex, Text } from '@chakra-ui/react';
import { IItem, listPeople } from "../data/items.data";

import { useState } from "react";
import { Card } from './card.component';

export function People() {
  const [people, setPeople] = useState(listPeople);

  const changeSelection = (data: Omit<IItem, 'name'>) => {
    const newPeople = people.map(person => {
      if (person.id === data.id) person.selected = data.selected;

      return person
    })

    setPeople(newPeople)
  }

  const countSelected = () => {
    return people.filter(person => person.selected).length
  }

  const checkSelected = (personId: string) => {
    return people.find(person => person.id === personId && person.selected)?.selected || false
  }

  return (
    <Flex flexDirection={'column'} gap={10}>
      <Flex>
        <Text fontSize={18}>Encontrados: {countSelected()} / {people.length}</Text>
      </Flex>

      <Flex flexDirection={'column'} gap={3}>
        {people.map(person => (
          <Card
            key={person.id}
            id={person.id}
            name={person.name}
            selected={checkSelected(person.id)}
            changeSelection={changeSelection}
          ></Card>
        ))}
      </Flex>
    </Flex>



  )
}