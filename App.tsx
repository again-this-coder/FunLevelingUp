/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

import {HomeScreen} from './src/components/Screens/HomeScreen/HomeScreen';

function App(): JSX.Element {
  return (
    <View style={styles.colorWrapper}>
      <SafeAreaView style={styles.root}>
        <HomeScreen />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  colorWrapper: {},
  root: {
    flex: 1,
  },
});

export default App;
