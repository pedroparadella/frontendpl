import axios from "axios";

export const GET_POKEMON = "https://pokeapi.co/api/v2/pokemon/"

export const getPokemon = async (url) => {
  try {
      const { data } = await axios.get(url);
      return data;
  } catch (error) {}
};