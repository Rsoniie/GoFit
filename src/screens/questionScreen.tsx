import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { globalStyles, colors } from '../styles'; // Assuming you have these styles defined elsewhere
import firestore, {firebase} from '@react-native-firebase/firestore';


const { width } = Dimensions.get('screen');

const QuestionnaireScreen = ({ navigation } : any) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [goalTime, setGoalTime] = useState('');
  const [activityRate, setActivityRate] = useState('');

  const handleSubmit = () => {

    console.log({ firstName, lastName, age, height, weight, goalWeight, goalTime, activityRate });
    const user = firebase.auth().currentUser;
    firestore()
    .collection('Users')
    .doc(user?.uid)
    .set({
        firstname : firstName,
        lastName: lastName,
        age: age,
        height: height,
        weight: weight,
        goalWeight: goalWeight,
        goalTime: goalTime,
        activityRate: activityRate
    })
    .then(() => {
      navigation.replace('Home');
      console.log('User added!');
    })
    
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={globalStyles.title}>Questionnaire</Text>
      <Text style = {globalStyles.text}>Please, fill this short survey. It shall help us understand your health and dietary needs.</Text>
      
      <View style={styles.upper_line}></View>
      <View style={styles.rowContainer}>
        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.label}>First Name:</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="First Name"
          />
        </View>

        <View style={[styles.inputContainer, styles.halfWidth]}>
          <Text style={styles.label}>Last Name:</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Last Name"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age:</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="Age"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height (cm):</Text>
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={setHeight}
          placeholder="Height"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight (kg):</Text>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
          placeholder="Weight"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Goal Weight (kg):</Text>
        <TextInput
          style={styles.input}
          value={goalWeight}
          onChangeText={setGoalWeight}
          placeholder="Goal Weight"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Goal Duration (months):</Text>
        <TextInput
          style={styles.input}
          value={goalTime}
          onChangeText={setGoalTime}
          placeholder="Goal Time"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Rate of Metabolic Activity (1-10):</Text>
        <TextInput
          style={styles.input}
          value={activityRate}
          onChangeText={setActivityRate}
          placeholder="Activity Rate"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.background_primary,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginBottom: 20,
  },
  halfWidth: {
    width: '48%',
  },
  label: {
    fontSize: globalStyles.text.fontSize,
    marginBottom: 8,
    color: colors.primary_text,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.button,
    borderRadius: 8,
    padding: 10,
    fontSize: globalStyles.text.fontSize,
    backgroundColor: colors.background_secondary,
  },
  submitButton: {
    backgroundColor: colors.primary_text,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  submitButtonText: {
    color: colors.background_secondary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  upper_line: {
    height: 1,
    backgroundColor: colors.button,
    marginTop: 10,
    marginBottom: 20,
    width: width - 40,
  },
});

export default QuestionnaireScreen;
