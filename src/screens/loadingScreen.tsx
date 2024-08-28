
import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import { globalStyles } from '../styles';

const App = () => (
  <View style = {globalStyles.container}>
  <View style={globalStyles.container}>
      <Text style = {globalStyles.text_loader}>
        GoFit
      </Text>
    {/* <ActivityIndicator style = {globalStyles.loader} size="large" /> */}
  </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default App;