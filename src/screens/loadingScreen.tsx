
import React from 'react';
import { useEffect } from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import { globalStyles } from '../styles';

const App = ({navigation} : any) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigation]);
  
  
  return (
  <View style = {globalStyles.container}>
  <View style={globalStyles.container}>
      <Text style = {globalStyles.text_loader}>
        GoFit
      </Text>
  </View>
  </View>
)};
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