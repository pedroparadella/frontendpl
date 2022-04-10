import React from 'react';
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  ModalCloseButton,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';
import { useDrawerForm } from '../contexts/DrawerFormContext';

export default function DrawerForm() {
  const { isOpen, onClose } = useDrawerForm();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Drawer isOpen={isOpen} placement='right' size='lg' onClose={onClose}>
      <DrawerOverlay bg='whiteAlpha.700'>
        <DrawerContent>
          {!isWideVersion == false ? '' : <Flex justify='end'>
            <ModalCloseButton
              bg='orange.500'
              color='white'
              rounded='full'
              _hover={{
                bgColor: 'orange.600'
              }}
            />
          </Flex>}
          <DrawerHeader ml='6'>
            <Flex>
              <Image src='/assets/icone-criar.svg' boxSize='12' mr='4' />
              <Text color='purple.800' fontSize='4xl'>
                <b>Criar card</b>
              </Text>
            </Flex>
          </DrawerHeader>
          <Divider mt='8' w='590px' alignSelf='center' borderColor='gray.400' />
          <DrawerBody mt='44px' ml='6' as='form'>
            <FormLabel htmlFor='title' aria-required='true'>
              <b>DIGITE UM NOME PARA O CARD</b>
            </FormLabel>
            <InputGroup>
              <Input
                id='title'
                type='text'
                size='lg'
                h='60px'
                placeholder='Digite o título'
              />
            </InputGroup>
            <FormLabel htmlFor='title' mt='50px'>
              <b>INCLUA UMA IMAGEM PARA APARECER NO CARD</b>
            </FormLabel>
            <InputGroup>
              <Input
                id='title'
                size='lg'
                h='60px'
                placeholder={isWideVersion == false ? '' : 'Nenhum arquivo selecionado'}
              />
              <InputRightElement w='224px' h='48px' mt='1.5'>
                <Button size='lg' variant='outline' colorScheme='orange'>
                  Escolher arquivo
                </Button>
              </InputRightElement>
            </InputGroup>
            <Divider mt='14' w='590px' alignSelf='center' borderColor='gray.400' />
            <Flex justify='end' mt='7' mr='2'>
              <Button size='lg' colorScheme='orange' shadow='md' w='167px'>
                Criar card
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
