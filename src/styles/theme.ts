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
    }
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
