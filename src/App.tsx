import { Flex } from '@chakra-ui/react';
import { Locations } from './components/locations.component';

export function App() {
  return (
    <Flex flexDirection={'column'} padding={2}>
      {/* <Guns></Guns> */}
      <Locations />
    </Flex>
  )
}