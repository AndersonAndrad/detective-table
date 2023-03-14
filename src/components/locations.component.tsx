import { Flex, Text } from '@chakra-ui/react';
import { IItem, listLocations } from '../data/items.data';

import { useState } from 'react';
import { Card } from './card.component';

export function Locations() {
  const [locations, setLocations] = useState(listLocations)

  const changeSelection = (data: Omit<IItem, 'name'>) => {
    const listLocations = locations.map(location => {
      if (location.id === data.id) location.selected = data.selected;

      return location
    })

    setLocations(listLocations)
  }

  const countSelected = () => {
    return locations.filter(location => location.selected).length
  }

  const checkSelected = (id: string) => {
    return locations.find(location => location.id === id && location.selected)?.selected || false
  }

  return (
    <Flex flexDirection={'column'} gap={10}>
      <Flex>
        <Text fontSize={18}>Encontrados: {countSelected()} / {locations.length}</Text>
      </Flex>

      <Flex flexDirection={'column'} gap={3}>
        {locations.map(location => (
          <Card
            key={location.id}
            id={location.id}
            name={location.name}
            selected={checkSelected(location.id)}
            changeSelection={changeSelection}
          />
        ))}

      </Flex>
    </Flex>
  )
}