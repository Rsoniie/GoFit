import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { globalStyles, colors } from './src/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  loadingScreen  from './src/screens/loadingScreen';
import HomeScreen from './src/screens/homeScreen';

// const add = './src/assets/rimg.jpg';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="loading" component={loadingScreen} options={{title: ''}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'GoFit', headerRight: () => ( <Image source = {require('C:/Users/91629/Desktop/GoFit/rimg.jpg')} style = {styles.headerImage}/>)}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   text: {
//     fontSize: 24,
//     color: '#333',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    color: '#333',
  },
  headerImage: {
    width: 30,  // Adjust width as needed
    height: 30, // Adjust height as needed
    marginRight: 10, // Optional: Add some margin to the right
  },
});

export default App;
