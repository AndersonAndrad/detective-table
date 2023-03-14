import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { listLocations } from '../data/items.data';
import { Card } from './card.component';

export function Locations() {
  const [locations, setLocations] = useState(listLocations)

  const changeSelection = (data: any) => {
    console.log(data)
  }

  return (
    <Flex flexDirection={'column'} gap={3}>
      {locations.map(location => (
        <Card
          key={location.id}
          id={location.id}
          name={location.name}
          selected={location.selected}
          changeSelection={changeSelection}
        />
      ))}

    </Flex>
  )
}