import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { PokemonCard } from '../components/PokemonCard';

import SearchBox from '../components/SearchBox';
import { searchPokemon } from '../services/api';

import { useEffect, useState } from 'react';

import { PokemonType } from '../types/pokemon.type';

import { useDrawerForm } from '../contexts/DrawerFormContext';
import DrawerForm from '../components/DrawerForm';


export default function Home() {
  const { onOpen } = useDrawerForm();

  const baseUrl = 'https://pokeapi.co/api/v2/';
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [pokemon, setPokemon] = useState<any>([]);
  const [loadMore, setLoadMore] = useState(`${baseUrl}pokemon?limit=8`);

  async function getPokemons() {
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

  async function onSearchHandler(name: string) {
    const result = await searchPokemon(name);
    setPokemon(result);
  }

  return (
    <>
      <DrawerForm />

      <Box as='main'>
        <Flex justifyContent='center'>
          <SearchBox onSearch={onSearchHandler} />
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
            {pokemon.name ?
              <div key={pokemon.id}>
                <PokemonCard
                  name={pokemon.name}
                  sprites={pokemon.sprites.front_default}
                />
              </div>
              :
              pokemons.map(pokemon => (
                <div key={pokemon.id}>
                  <PokemonCard
                    name={pokemon.name}
                    sprites={pokemon.sprites.front_default}
                  />
                </div>
              ))
            }
          </SimpleGrid>
          {pokemon.name ? null :
            <Flex justify='center' my='10'>
              <Button colorScheme='orange' onClick={getPokemons}>
                Carregar Mais
              </Button>
            </Flex>}
        </Container>
      </Box>
    </>
  );
}
