import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ItemComponent from './items';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Je deteste ce language ptsd</Text>
      <ItemComponent></ItemComponent>
      
      <StatusBar style="auto" />
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
