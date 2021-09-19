export interface IPokemon {
  id: number;
  name: string;
  image: string;
}

// Experimental with GraphQL
export const getFirstPage = async (): Promise<IPokemon[]> => {
  const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        image: artwork
      }
    }
  }`;

  const gqlVariables = {
    limit: 16,
    offset: 0,
  };

  const { data } = await fetch('https://graphql-pokeapi.graphcdn.app/', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: gqlQuery,
      variables: gqlVariables,
    }),
    method: 'POST',
  }).then(res => res.json());

  return data.pokemons.results;
};

// Experimental with GraphQL
export const getAllPokemons = async (): Promise<IPokemon[]> => {
  const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        image: artwork
      }
    }
  }`;

  const gqlVariables = {
    limit: 5000,
    offset: 0,
  };

  return fetch('https://graphql-pokeapi.graphcdn.app/', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: gqlQuery,
      variables: gqlVariables,
    }),
    method: 'POST',
  })
    .then(response => response.json())
    .then(parsedResponse =>
      parsedResponse.data.pokemons.results.map((i: IPokemon) => ({ ...i, name: i.name.split('-').join(' ') })),
    );
};
