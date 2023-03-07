import { SafeAreaView, StyleSheet } from "react-native";
import PokemonsList from "./src/components/PokemonsList";

export const App = () => (
  <SafeAreaView style={styles.container}>
    <PokemonsList netSimulateDelay={100} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
