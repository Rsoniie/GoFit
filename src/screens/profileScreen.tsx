import React, { useEffect, useState } from 'react';
import firebaseUtil from '../utils/firebaseUtil';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/auth'; // Import firebase auth for user authentication
import { globalStyles, colors } from '../styles';

const ProfileScreen = ({navigation} : any) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [goalTime, setGoalTime] = useState('');
  const [activityRate, setActivityRate] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const user = firebase.auth().currentUser;
      if (user) {
        try {
          const userDoc = await firestore()
            .collection('Users')
            .doc(user.uid)
            .get();

          if (userDoc.exists) {
            const data = userDoc.data();
            setFirstName(data?.firstname || '');
            setLastName(data?.lastName || '');
            setAge(data?.age || '');
            setHeight(data?.height || '');
            setWeight(data?.weight || '');
            setGoalWeight(data?.goalWeight || '');
            setGoalTime(data?.goalTime || '');
            setActivityRate(data?.activityRate || '');
          }
        } catch (error) {
          console.error('Error fetching user data: ', error);
        }
      }
    };

    fetchUserData();
  }, []);
   

  const handleLogout = () => 
  {
    console.log("Logout Button Clicked");
    firebaseUtil.signout().then(() => navigation.replace('signin')).then(() => 
    {
        console.log("Logout Successfully"); 
    }).catch((err) => {console.log(err)});
    
  }

  const handleDelete = () => 
  {
      console.log("Delete button is pressed");
      firebaseUtil.delete()?.then(() => navigation.replace('signup')).then(() => 
      {
        console.log("User deleted Sucessfully");
      }).catch((err) => {
        console.log(err);
      })
  }


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('C:/Users/91629/Desktop/GoFit/rimg.jpg')}
        style={styles.profileImage}
      />
      <Text style={globalStyles.title}>{`${firstName} ${lastName}`}</Text>
      <Text style={styles.email}>{firebase.auth().currentUser?.email}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    

      <View style={styles.option}>
        <Text style={globalStyles.text}>Age : {age}</Text>
      </View>

      <View style={styles.option}>
        <Text style={globalStyles.text}>Height : {height}</Text>
      </View>

      
      <View style={styles.option}>
        <Text style={globalStyles.text}>weight : {weight}</Text>
      </View>

      <View style={styles.option}>
        <Text style={globalStyles.text}>Goal Weight : {goalWeight}</Text>
      </View>

    
      <View style={styles.option}>
        <Text style={globalStyles.text}>Activity Rate : {activityRate}</Text>
      </View>

     

      <View style={styles.logDel}>
        <TouchableOpacity style={styles.logoutButton} onPress={ () => handleLogout()}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Delbutton} onPress={() => handleDelete()}>
          <Text style={styles.logoutButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.background_primary,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  email: {
    fontSize: 18,
    color: colors.primary_text,
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.button,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 15,
    width: '50%',
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  option: {
    backgroundColor: colors.background_secondary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.background_primary,
    width: '100%',
  },
  logoutButton: {
    backgroundColor: colors.button,
    paddingVertical: 6,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
    width: '40%',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logDel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Delbutton: {
    backgroundColor: colors.button,
    paddingVertical: 6,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
    width: '40%',
  },
  dataText: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.primary_text,
  },
});

export default ProfileScreen;
