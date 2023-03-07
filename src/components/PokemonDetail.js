import { Image } from "expo-image";
import { Button, StyleSheet, Text } from "react-native";

export const PokemonDetail = ({ pokemon, setPokemon }) => (
    <>
        <Text style={styles.title}>ID: {pokemon?.id} - Name: {pokemon?.name}</Text>
        <Text style={styles.data}>Types: {pokemon?.types}</Text>
        <Text style={styles.data}>Weight: {pokemon?.weight}</Text>
        <Image style={styles.image} contentFit="contain" source={pokemon?.sprites?.frontSprite} />
        <Button title='Back' onPress={() => setPokemon(undefined)}/>
    </>
);

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
    },
    title: {
        fontWeight: 700,
        fontSize: 24
    },
    data: {
        fontWeight: 400,
        fontSize: 18
    },
});

export default PokemonDetail;
