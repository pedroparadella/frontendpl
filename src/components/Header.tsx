import { Box, Button, Flex, Icon, Image } from '@chakra-ui/react';
import { WiDayCloudyWindy } from 'react-icons/wi'

import { useModalClimaTempo } from '../contexts/Modals/ModalClimaTempoContext';

export default function Header() {
  const { onOpen } = useModalClimaTempo();

  return (
    <Box as='header' bgGradient='linear(to-l, #AE276F, #5F1478)'>
      <Flex
        justify='space-between'
        w='100%'
        maxW='1400'
        h='16'
        mx='auto'
        px='6'
        align='center'
      >
        <Image src='/assets/logo.svg' alt='logo' width='192' height='37' />
        <Button
          colorScheme='orange'
          size='sm'
          rounded='full'
          shadow='2xl'
          onClick={onOpen}
        >
          <Icon as={WiDayCloudyWindy} fontSize='2xl' />
        </Button>
      </Flex>
    </Box>
  );
}
