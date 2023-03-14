import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { listWeapons } from '../data/items.data'
import { Card } from './card.component'

export function Guns() {
  const [weapons, setWeapons] = useState(listWeapons)

  const changeSelection = (data: any) => {
    console.log(data)
  }

  return (
    <Flex flexDirection={'column'} gap={3}>
      {weapons.map(weapon => (
        <Card
          key={weapon.id}
          id={weapon.id}
          name={weapon.name}
          selected={weapon.selected}
          changeSelection={changeSelection}
        ></Card>
      ))}
    </Flex>
  )
}

