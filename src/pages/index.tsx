import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import SearchBox from '../components/SearchBox';

import { RiDeleteBinLine, RiPencilLine } from 'react-icons/ri';

import { useEffect, useState } from 'react';

import { PokemonType } from '../types/pokemon.type';
import { useDrawerForm } from '../contexts/DrawerFormContext';
import DrawerForm from '../components/DrawerForm';

export default function Home() {
  const { onOpen } = useDrawerForm();

  const baseUrl = 'https://pokeapi.co/api/v2/';
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [loadMore, setLoadMore] = useState(`${baseUrl}pokemon?limit=8`);

  const getPokemons = async () => {
    const response = await fetch(loadMore);
    const data = await response.json();

    setLoadMore(data.next);

    function searchPokemon(result: PokemonType[]) {
      result.forEach(async (pokemon: PokemonType) => {
        const response = await fetch(`${baseUrl}pokemon/${pokemon.name}`);
        const data = await response.json();

        setPokemons(currentList => [...currentList, data]);
      })
    }
    searchPokemon(data.results);
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <DrawerForm />

      <Box as='main'>
        <Flex justifyContent='center'>
          <SearchBox />
          <Image
            src='/assets/fundo-busca.png'
            alt='fundo-busca'
            objectFit='cover'
            w='100%'
            h='64'
          />
        </Flex>
        <Container maxW='6xl'>
          <Flex mt='10' align='center' justifyContent='space-between'>
            <Text color='purple.800' fontSize={['xl', '3xl', '4xl']}>
              Resultado de busca
            </Text>
            <Button
              colorScheme='orange'
              alignItems='center'
              size='lg'
              fontSize='lg'
              shadow='md'
              onClick={onOpen}
              aria-label='Open drawer form'
            >
              Novo Card
            </Button>
          </Flex>
          <SimpleGrid columns={[1, 2, 4]} justifyItems='center' spacing='9'>
            {pokemons.map(pokemon => (
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
                key={pokemon.id}
              >
                <Image
                  src={pokemon.sprites.front_default}
                  borderRadius='full'
                  bgColor='gray.200'
                  border='2px'
                  borderColor='gray.300'
                  boxSize='95px'
                  alt={pokemon.name}
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
                  {pokemon.name}
                </Text>
                <Flex bg='gray.200' borderBottomRadius='md' marginTop='auto'>
                  <Button bgColor='transparent' color='gray.600'>
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
                  <Button bgColor='transparent' color='gray.600' onClick={onOpen}>
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
            ))}
          </SimpleGrid>
          <Flex justify='center' my='10'>
            <Button colorScheme='orange' onClick={getPokemons}>
              Carregar Mais
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
