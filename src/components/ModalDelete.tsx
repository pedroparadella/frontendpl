import {
  Button,
  Circle,
  Divider,
  Flex,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,

} from '@chakra-ui/react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useModalDelete } from '../contexts/ModalDeleteContext';

export default function ModalDelete() {
  const { isOpen, onClose } = useModalDelete();

  function onClick() {
    onClose(),
    alert('Essa funcionalidade não foi implementada.')
  }
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='whiteAlpha.700' />
        <ModalContent>
          <Flex justify='end'>
            <ModalCloseButton
              bg='orange.500'
              color='white'
              rounded='full'
              _hover={{
                bgColor: 'orange.600'
              }}
            />
          </Flex>
          <ModalBody>
            <Flex direction='column' textAlign='center'>
              <Circle
                mt='12'
                mb='8'
                size='40'
                borderWidth='40'
                border='4px'
                borderColor='blackAlpha.600'
                bgColor='red.100'
                alignSelf='center'
              >
                <Icon as={RiDeleteBinLine} color='red.600' fontSize='8xl' pos='absolute' />
              </Circle>
              <Text color='red' fontWeight='bold' fontSize='3xl' mb='13px'>
                Excluir
              </Text>
              <Text fontWeight='bold'>CERTEZA QUE DESEJA EXCLUIR?</Text>
            </Flex>
          </ModalBody>
          <Divider mt='8' w='364px' alignSelf='center' borderColor='gray.400' />
          <Flex justify='center' my='30px'>
            <Button
              colorScheme='red'
              w='165px'
              h='48px'
              mr='17px'
              fontWeight='bold'
              onClick={onClick}
            >
              Excluir
            </Button>
            <Button
              variant='outline'
              w='165px'
              h='48px'
              colorScheme='red'
              fontWeight='bold'
              onClick={onClose}
            >
              Cancelar
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}
