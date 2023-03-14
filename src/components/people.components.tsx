import { Flex } from '@chakra-ui/react';
import { useState } from "react";
import { listPeople } from "../data/items.data";
import { Card } from './card.component';

export function People() {
  const [people, setPeople] = useState(listPeople);

  const changeSelection = (data: any) => {
    console.log(data)
  }

  return (
    <Flex flexDirection={'column'} gap={3}>
      {people.map(person => (
        <Card
          key={person.id}
          id={person.id}
          name={person.name}
          selected={person.selected}
          changeSelection={changeSelection}
        ></Card>
      ))}
    </Flex>
  )
}