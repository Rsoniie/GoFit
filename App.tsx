import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { globalStyles, colors } from './src/styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  loadingScreen  from './src/screens/loadingScreen';
import HomeScreen from './src/screens/homeScreen';
import LoginScreen from './src/screens/loginScreen';
import ProfileScreen from './src/screens/profileScreen';
import SignupScreen from './src/screens/signupScreen';
import CameraScreen from './src/screens/cameraScreen';
import QuestionnaireScreen from './src/screens/questionScreen';
import dbchk from './rough/dbcheck';
import Meter from './src/components/meter';
import urlcheck from './rough/urlcheck';



// import LoginProvider from './src/utils/loginprovider';
import { LoginContext } from './src/utils/loginprovider';

// const add = './src/assets/rimg.jpg';

const Stack = createNativeStackNavigator();

const App = ({navigation} : any) => {

const {user, isLoading} = useContext(LoginContext);
console.log(user, isLoading);
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {(isLoading ? <Stack.Screen name = "loading" component={loadingScreen}/> : 
        user ? <Stack.Screen name='Home' component={HomeScreen}/> 
        : <Stack.Screen name = 'signin' component={LoginScreen} options={{headerShown : false}}/> )}

        <Stack.Screen name="loading" component={loadingScreen} options={{headerShown: false}} />
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: 'GoFit',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('profile')}>
               <Image source = {require('C:/Users/91629/Desktop/GoFit/rimg.jpg')} style = {styles.headerImage} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="profile" component={ProfileScreen} options={{title: "Profile"}} />
        <Stack.Screen name="signup" component={SignupScreen} options={{headerShown: false}} />
        <Stack.Screen name="camera" component={CameraScreen} options={{headerShown: false}} />
        <Stack.Screen name="questions" component={QuestionnaireScreen} options={{headerShown: false}} />
        <Stack.Screen name="dbchk" component={dbchk} options={{title: "Checking"}} />
        <Stack.Screen name="meter" component={Meter} options={{title: "meter"}} />
        <Stack.Screen name='urlcheck' component={urlcheck}/>
         
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
