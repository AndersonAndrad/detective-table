import { Box, Flex, Text } from '@chakra-ui/react';

import { useState } from 'react';

export function Card(card: ICardProps) {
  const [selected, setSelected] = useState<boolean>(false)

  const changeSelection = () => {
    setSelected(!selected)
    card.changeSelection({ id: card.id, selected: !selected })
  }

  if (selected) return (
    <Flex
      bg={'gray.700'}
      color={'whiteAlpha.900'}
      width={'100%'}
      textAlign={'left'}
      borderRadius={5}
      onClick={() => { changeSelection() }}
    >
      <Box
        bg={'purple.600'}
        width={'3%'}
        borderRadius={3}
      >
      </Box>

      <Box padding={4} >
        <Text>{card.name}</Text>
      </Box>


    </Flex>
  )

  return (
    <Flex
      bg={'gray.700'}
      color={'whiteAlpha.900'}
      width={'100%'}
      textAlign={'left'}
      borderRadius={5}
      onClick={() => { changeSelection() }}
    >
      <Box
        bg={'transparent'}
        width={'3%'}
        borderRadius={3}
      >
      </Box>

      <Box padding={4} >
        <Text>{card.name}</Text>
      </Box>
    </Flex>
  )
}

export interface ICardProps {
  id: string;
  name: string;
  selected: boolean;
  changeSelection: (data: IChangeSelection) => void
}

interface IChangeSelection {
  id: ICardProps['id'],
  selected: ICardProps['selected']
}