import { Text, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Divider } from '@chakra-ui/react';

import { useModalClimaTempo } from '../../contexts/Modals/ModalClimaTempoContext';

export function ModalClimaTempo() {
  // const [weather, setWeather] = useState([]);

  // useEffect(() => {
  //   climaTempoApi.get('/BR?token=999f82aa8b8ac42101bb725fa08dfac3')
  //     .then((response) => setWeather(response.data))
  // }, [])

  const { isOpen, onClose } = useModalClimaTempo();
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='whiteAlpha.700' />
        <ModalContent p='4'>
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
          <ModalHeader>
            <Text>Clima hoje no Brasil</Text>
          </ModalHeader>
          <Divider my='2' w='400px' alignSelf='center' borderColor='gray.400' />
          <ModalBody>
            <Flex direction='column' textAlign='center'>
              <Text textAlign='justify'>
                O sol predomina sobre o Sul neste sábado,
                com tempo firme no RS e no interior de SC.
                Nas demais áreas da região há previsão de pancadas de chuva.
                Já no Sudeste o tempo fica instável entre o centro/leste paulista,
                sul de MG e no sul e região Serrana do RJ -
                chove a partir da tarde e há risco de temporais e granizo.
                Pelo CO, sol e pancadas isoladas de chuva entre a tarde e à noite.
                A ZCIT segue atuando no norte do país e provocando chuvas fortes
                e volumosas na costa norte do Nordeste,
                PA e AM.
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
