import { Flex } from '@chakra-ui/react';
import { Guns } from "./components/guns.component";

export function App() {
  return (
    <Flex flexDirection={'column'} padding={2}>
      <Guns></Guns>
    </Flex>
  )
}