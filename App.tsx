import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SuggaaSelectButton from './src/SuggaaSelectButton';

export default function App() {
  return (
    <View style={styles.container}>
      <SuggaaSelectButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
