import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';

export default function Header() {
  return (
    <Box as='header' bgGradient='linear(to-l, #AE276F, #5F1478)'>
      <Flex
        w='100%'
        maxW='1400'
        h='16'
        mx='auto'
        px='6'
        align='center'
      >
        <Image src='/assets/logo.svg' alt='logo' width='192' height='37' />
      </Flex>
    </Box>
  );
}
