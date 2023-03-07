import { ActivityIndicator, Text, View } from "react-native";

export const Loading = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={ 100 } />
        <Text>Loading...</Text>
    </View>
);

export default Loading;