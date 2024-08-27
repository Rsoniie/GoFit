import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import loginScreen from './screens/loginScreen'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={loginScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={loginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};