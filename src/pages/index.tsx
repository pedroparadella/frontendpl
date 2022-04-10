import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import SearchBox from '../components/SearchBox';
import { PokemonCard } from '../components/PokemonCard';

import { useDrawerForm } from '../contexts/DrawerFormContext';
import { usePokemons } from '../hooks/usePokemons';

export default function Home() {
  const { onOpen } = useDrawerForm();
  const { pokemons, pokemon, getPokemons, onSearchHandler } = usePokemons();

  return (
    <>
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
                  sprite={pokemon.sprites.front_default}
                  shinySprite={pokemon.sprites.front_shiny}
                  type={pokemon.types[0].type.name}
                />
              </div>
              :
              pokemons.map(pokemon => (
                <div key={pokemon.id}>
                  <PokemonCard
                    name={pokemon.name}
                    sprite={pokemon.sprites.front_default}
                    shinySprite={pokemon.sprites.front_shiny}
                    type={pokemon.types[0].type.name}
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
