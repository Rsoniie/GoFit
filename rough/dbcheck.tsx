import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const App = () => {


   
  const chk = async() => 
  {
  const user = await firestore().collection('User').doc('3AY15hEhpc9zfrMVZfkQ').get();
  console.log(user.data());
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
       <TouchableOpacity onPress={chk}>
        <Text> Check </Text>
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
