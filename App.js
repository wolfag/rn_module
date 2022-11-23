/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

import RNShare from './src/RNShare';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          RNShare.open({message: 'Hello my beloved'});
        }}>
        <Text>Share</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
