import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import StartScreenGame from './screens/StartScreenGame'

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Love Moe Rainbow" />
      <StartScreenGame />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
