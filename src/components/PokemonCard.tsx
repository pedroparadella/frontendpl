import { InfoIcon } from '@chakra-ui/icons';
import { Badge, Button, Divider, Flex, Icon, Image, Text, Tooltip } from '@chakra-ui/react';
import { useState } from 'react';

import { Ri24HoursFill, RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';
import { useDrawerForm } from '../contexts/DrawerFormContext';
import { useModalDelete } from '../contexts/Modals/ModalDeleteContext';

interface PokemonProps {
  name: string;
  sprite: string;
  shinySprite: string;
  type: string;
}

export function PokemonCard({ name, sprite, shinySprite, type }: PokemonProps) {
  const onOpenDrawerForm = useDrawerForm().onOpen;
  const onOpenModalDelete = useModalDelete().onOpen;

  const [shiny, setShiny] = useState(false);

  function handleClick() {
    setShiny(!shiny);
  };

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
      <Flex justify='end' mt='2' mr='2'>
        <Button
          colorScheme={shiny == false ? 'purple' : 'orange'}
          size='xs'
          isActive
          variant='ghost'
          pos='absolute'
          onClick={handleClick}
        >
          Shiny
          <Tooltip
            placement='top-end'
            bg='gray.300'
            color='black'
            fontWeight='bold'
            label={`Clique aqui para mostrar a versão shiny do ${name}.`}
          >
            <InfoIcon ml='1' fontSize='sm' mb='0.5' />
          </Tooltip>
        </Button>
      </Flex>
      <Image
        src={shiny == false ? sprite : shinySprite}
        borderRadius='full'
        bgColor='gray.200'
        border='1px'
        borderColor={type}
        boxSize='95px'
        alt={name}
        alignSelf='center'
        p='2'
        my='8'
      />
      <Flex justify='space-evenly' mb='4'>
        <Badge color={type}>{type}</Badge>
      </Flex>
      <Divider
        orientation='horizontal'
        alignSelf='center'
        w='170px'
        mb='10px'
        borderColor='gray.300'
      />
      <Text textAlign='center'>{name}</Text>
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
