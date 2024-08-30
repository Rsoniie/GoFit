// import React, { useState } from 'react';
// import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { globalStyles, colors } from '../styles';

// const SignupScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = ({navigation} : any) => {
//     if (username && password) {
//       // Alert.alert('Success', `Username: ${username}\nPassword: ${password}`);
//       navigation.navigate('questions')


//     } else {
//       Alert.alert('Error', 'Please enter both username and password.');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.signupContainer}>
//         <Text style={styles.headerText}>Sign Up</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Username/Email"
//           value={username}
//           onChangeText={setUsername}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//         />
//         <TouchableOpacity style={styles.submitButton} onPress={handleSignup}>
//           <Text style={styles.submitButtonText}>Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: colors.background_primary,
//   },
//   signupContainer: {
//     width: '80%',
//     padding: 16,
//     backgroundColor: colors.background_secondary,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   headerText: {
//     fontSize: globalStyles.title.fontSize,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//     color: colors.button
//   },
//   input: {
//     height: 50,
//     borderColor: colors.button,
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     fontSize: globalStyles.text.fontSize,
//   },
//   submitButton: {
//     backgroundColor: colors.button,
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default SignupScreen;

import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { globalStyles, colors } from '../styles';
import firebaseUtil from '../utils/firebaseUtil';

const SignupScreen = ({ navigation } : any) => {  // Accept navigation as a prop
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSignup = () => {
    firebaseUtil.signup(username, password)
    .then(()=> {navigation.replace('questions')})
    .catch((err) => 
   {
     console.log(err);
     Alert.alert("Something went wrong");
   })
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.signupContainer}>
        <Text style={styles.headerText}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Username/Email"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSignup}>
          <Text style={styles.submitButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background_primary,
  },
  signupContainer: {
    width: '80%',
    padding: 16,
    backgroundColor: colors.background_secondary,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    fontSize: globalStyles.title.fontSize,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: colors.button,
  },
  input: {
    height: 50,
    borderColor: colors.button,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: globalStyles.text.fontSize,
  },
  submitButton: {
    backgroundColor: colors.button,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignupScreen;

