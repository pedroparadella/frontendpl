import { Button, Divider, Flex, Icon, Image, Text } from '@chakra-ui/react';

import { RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';
import { useDrawerForm } from '../contexts/DrawerFormContext';
import { useModalDelete } from '../contexts/ModalDeleteContext';

import { PokemonType } from '../types/pokemon.type';

export function PokemonCard({ name, sprites }: any) {
  const onOpenDrawerForm = useDrawerForm().onOpen;
  const onOpenModalDelete = useModalDelete().onOpen;

  return (
    <Flex
      direction='column'
      mt='9'
      maxW='60'
      h='72'
      bgColor='white'
      borderRadius='md'
      border='1px'
      borderColor='gray.200'
      shadow='md'
    >
      <Image
        src={sprites}
        borderRadius='full'
        bgColor='gray.200'
        border='2px'
        borderColor='gray.300'
        boxSize='95px'
        alt={name}
        alignSelf='center'
        p='2'
        my='12'
      />
      <Divider
        orientation='horizontal'
        alignSelf='center'
        w='170px'
        mb='10px'
        borderColor='gray.300'
      />
      <Text textAlign='center'>
        {name}
      </Text>
      <Flex bg='gray.200' borderBottomRadius='md' marginTop='auto'>
        <Button bgColor='transparent' color='gray.600' onClick={onOpenModalDelete}>
          <Icon
            as={RiDeleteBinLine}
            color='red.500'
            fontSize='xl'
            mr='3'
            mb='1'
          />
          Excluir
        </Button>
        <Divider
          orientation='vertical'
          alignSelf='center'
          h='22px'
          borderColor='gray.300'
        />
        <Button bgColor='transparent' color='gray.600' onClick={onOpenDrawerForm}>
          <Icon
            as={RiPencilLine}
            color='orange.500'
            fontSize='xl'
            mr='3'
            mb='1'
          />
          Editar
        </Button>
      </Flex>
    </Flex>
  );
}

