import { Button, StyleSheet, View } from "react-native";

export const PaginationBar = ({ pokemons, requestPokemonsList }) => (
    <View style={styles.horizontal}>
        <Button
            title='Prev'
            disabled={pokemons.previous === null}
            onPress={() => requestPokemonsList(pokemons.previous)}
        />
        <Button
            title='Next'
            disabled={pokemons.next === null}
            onPress={() => requestPokemonsList(pokemons.next)}
        />
    </View>
);

const styles = StyleSheet.create({
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
});

export default PaginationBar;
