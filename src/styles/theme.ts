import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#263238",
      "600": "#757575",
      "300": "#E5E5E5",
      "200": "#F6F4F6"
    },
    orange: {
      "500": "#E76316"
    },
    purple: {
      "800": "#5F1478",
      "500": "#AE276F",
      "200": "#E3C5DB"
    },
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  },
  fonts: {
    heading: 'Muli',
    body: 'Muli'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.300',
        color: 'gray.900'
      }
    }
  }
})
