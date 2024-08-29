import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {globalStyles, colors} from '../styles';
const ProfileScreen = () => {
  const user = {
    name: 'Hriday Desai',
    email: 'hriday@example.com',
    profilePicture: 'https://via.placeholder.com/150',
  };

  const handleOptionPress = (option: any) => {
    Alert.alert(`Selected option: ${option}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: user.profilePicture}} style={styles.profileImage} />
      <Text style={globalStyles.title}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionPress('Settings')}>
        <Text style={globalStyles.text}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionPress('Privacy')}>
        <Text style={globalStyles.text}>Privacy</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionPress('Dark Mode')}>
        <Text style={globalStyles.text}>Dark Mode</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionPress('Notification Preferences')}>
        <Text style={globalStyles.text}>Notification Preferences</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionPress('Security')}>
        <Text style={globalStyles.text}>Security</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionPress('Help & Support')}>
        <Text style={globalStyles.text}>Help & Support</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        onPress={() => handleOptionPress('About')}>
        <Text style={globalStyles.text}>About</Text>
      </TouchableOpacity>
      <View style = {styles.logDel}>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Delbutton}>
        <Text style={styles.logoutButtonText}>Delete</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    padding: 16,
    backgroundColor: colors.background_primary,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
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
    width: "50%"
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
  optionText: {
    fontSize: globalStyles.text.fontSize,
    color: colors.primary_text,
  },
  logoutButton: {
    backgroundColor: colors.button,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
    width: "40%"
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
    // backgroundColor: 'red',
    backgroundColor: colors.button,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
    width: "40%",
    // borderColor: 'red',
  }
});

export default ProfileScreen;
