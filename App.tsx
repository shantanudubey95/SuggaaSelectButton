import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SuggaaSelectButton from './src/SuggaaSelectButton';
// import SuggaaSelectButton from './src/SuggaaSelectButtontytyt';

type Gender = "Male" | "Female" | "I perfer not to say";


export default function App() {

  const [selectedCheckBox, setSelectedCheckBox] = React.useState('');
  console.log(selectedCheckBox);
  return (
    <View style={styles.container}>
      <SuggaaSelectButton  title="Him"
          onPress={(value) => setSelectedCheckBox(value)}
          isActive={selectedCheckBox === 'Him'}/>
          <SuggaaSelectButton
          title="Her"
          onPress={(value) => setSelectedCheckBox(value)}
          isActive={selectedCheckBox === 'Her'}
        />
          <SuggaaSelectButton
          title="I perfer not to say"
          onPress={(value) => setSelectedCheckBox(value)}
          isActive={selectedCheckBox === 'I perfer not to say'}
        />
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
