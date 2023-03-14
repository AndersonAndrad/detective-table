import { Flex, Text } from '@chakra-ui/react'
import { IItem, listWeapons } from '../data/items.data'

import { useState } from 'react'
import { Card } from './card.component'

export function Guns() {
  const [weapons, setWeapons] = useState(listWeapons)

  const changeSelection = (data: Omit<IItem, 'name'>) => {
    const listWeapon = weapons.map(weapon => {
      if (weapon.id === data.id) weapon.selected = data.selected;

      return weapon
    })

    setWeapons(listWeapon)
  }

  const countSelected = () => {
    return weapons.filter(weapons => weapons.selected).length
  }

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
            selected={weapon.selected}
            changeSelection={changeSelection}
          ></Card>
        ))}
      </Flex>
    </Flex>


  )
}

