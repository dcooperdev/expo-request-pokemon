import { PokemonsList, PokemonDetail } from '../../models/Pokemons.model';

export const getPokemonsList = async (url) => {
    try {
      const response = await fetch(url, { method:'GET' });
      const responseJson = await response.json();
      const pokemonsList = new PokemonsList(responseJson);
      return pokemonsList;
    } catch (err) {
      console.error(err);
    }
}

export const getPokemonDetail = async (pokemonUrl) => {
    try {
      const response = await fetch(pokemonUrl, { method:'GET' });
      const { id, name, sprites, types, weight } = await response.json();
      const pokemonDetail = new PokemonDetail(id, name, sprites, types, weight);
      const details = pokemonDetail.getDetails();
      return details;
    } catch (err) {
      console.error(err);
    }
}

export default {
    getPokemonsList,
    getPokemonDetail
};