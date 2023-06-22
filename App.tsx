import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';

import {HomeScreen} from './src/components/Screens/HomeScreen/HomeScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
