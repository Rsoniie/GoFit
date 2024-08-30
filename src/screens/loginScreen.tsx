import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet,Alert,} from 'react-native';
import { globalStyles, colors } from '../styles';
import { firebase } from '@react-native-firebase/firestore';
import firebaseUtil from '../utils/firebaseUtil';


const LoginScreen = ({navigation} : any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
       firebaseUtil.signin(email, password)
       .then(() => {navigation.replace('Home')})
       .catch((err) => 
      {
        console.log(err);
        Alert.alert("Please enter valid Email and password or Create new one");
      })
  };

  // const handleSignup = () => 
  // {
  //      console.log("Button Pressed");
  //   navigation.navigate('login');
  // }

  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("signup")}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: "5%",
    backgroundColor: colors.background_primary,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: colors.button,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.button,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#1E90FF',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default LoginScreen;
