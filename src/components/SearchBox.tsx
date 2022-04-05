import { Flex, Icon, Input } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export default function SearchBox() {
  return (
    <Flex
      as="label"
      py='5'
      px='7'
      w='6xl'
      alignSelf='center'
      bg='white'
      borderRadius='md'
      pos='absolute'
    >
      <Input
        color='gray.900'
        variant='unstyled'
        fontSize='xl'
        px='4'
        mr='4'
        placeholder='Digite aqui sua busca...'
        _placeholder={{color: 'gray.600'}}
      />
      <Icon as={RiSearchLine} color='gray.600' fontSize={'3xl'} />
    </Flex>
  );
}
