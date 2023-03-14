import { Button, Flex } from '@chakra-ui/react';

import { useState } from 'react';
import { Guns } from './components/guns.component';
import { Locations } from './components/locations.component';
import { Suspects } from './components/suspects.components';

export function App() {
  const [tableToShow, setTableToShow] = useState<tableEnum>(tableEnum.PEOPLE)

  return (
    <Flex flexDirection={'column'} padding={2} gap={5}>
      <Flex justifyContent={'space-between'}>
        <Button onClick={() => { setTableToShow(tableEnum.PEOPLE) }}>Suspeitos</Button>

        <Button onClick={() => { setTableToShow(tableEnum.GUNS) }}>Armas</Button>

        <Button onClick={() => { setTableToShow(tableEnum.LOCATIONS) }}>Locais</Button>
      </Flex>

      {tableToShow === tableEnum.PEOPLE && <Suspects />}

      {tableToShow === tableEnum.GUNS && <Guns />}

      {tableToShow === tableEnum.LOCATIONS && <Locations />}
    </Flex>
  )
}

enum tableEnum {
  GUNS = 'guns',
  LOCATIONS = 'locations',
  PEOPLE = 'people'
}