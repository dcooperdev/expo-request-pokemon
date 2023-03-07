import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { getPokemonDetail, getPokemonsList } from '../utils/requests/Pokemons.request.js';
import Loading from './Loading.js';
import PaginationBar from './PaginationBar.js';
import PokemonDetail from './PokemonDetail.js';

export default function PokemonsList({ netSimulateDelay}) {
  const [pokemons, setPokemons] = useState();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await requestPokemonsList('https://pokeapi.co/api/v2/pokemon/');
    })();
  }, []);

  const requestPokemonsList = async (url) => {
    setLoading(true);
    const pokemonsList = await getPokemonsList(url);
    setPokemons({
      list: pokemonsList.getList(),
      next: pokemonsList.getNextPage(),
      previous: pokemonsList.getPreviousPage(),
    });

    // simulate slow network
    setTimeout(() => {
      setLoading(false);
    }, netSimulateDelay);
  }

  const getPokemonData = async (url) => {
    setLoading(true);
    const pokemonDetail = await getPokemonDetail(url);
    setPokemon(pokemonDetail);

    // simulate slow network
    setTimeout(() => {
      setLoading(false);
    }, netSimulateDelay);
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item.name}</Text>
        <Button title='View' onPress={() => getPokemonData(item.url)}/>
      </View>
    );
  }

  return (
    <>
      {loading && <Loading />}
      {!loading &&
        <View style={styles.container}>
          {!pokemon &&
            <>
              <Text style={{fontWeight: 700, fontSize: 32,}}>Pokemons:</Text>
              <FlatList
                extraData={pokemons.list}
                data={pokemons.list}
                renderItem={renderItem}
              />
              <PaginationBar
                pokemons={pokemons}
                requestPokemonsList={requestPokemonsList}
              />
            </>
          }
          {pokemon &&
            <PokemonDetail
              pokemon={pokemon}
              setPokemon={setPokemon}
            />
          }
        </View>
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 32,
  },
  
  item: {
    padding: 5
  },
  text: {
    fontWeight: 400,
    fontSize: 24,
    color: '#fff',
    backgroundColor: 'green'
  },
  url: {
    backgroundColor: 'grey',
    color: '#fff'
  },
});
