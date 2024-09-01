// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { globalStyles, colors } from '../styles';

// const { width, height } = Dimensions.get('window');

// const StylishScreen = ({route, navigation} : any) => {

//     console.log("hello");
//    console.log(route);
//     const { Calorie, Fat, Carbs, Sugar, Protein, Fibre } = route.params;
    
//   return (
//     <View style={styles.container}>
//       <LinearGradient
//         colors={[colors.background_primary, colors.background_secondary]}
//         style={styles.background}
//       >
//         <Text style={styles.title}></Text>
//         <Text style={styles.subtitle}>These are you intakes from this meal</Text>

//         <Text>
        
//         </Text>
//       </LinearGradient>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   background: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 28,
//     color: '#fff',
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#fff',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: '#ff6347',
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 25,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   contentContainer: {
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     borderRadius: 20,
//     padding: 20,
//     marginTop: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 5,
//   },
//   contentTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//     color: '#ff6347',
//   },
//   contentText: {
//     fontSize: 16,
//     color: '#333',
//     textAlign: 'center',
//   },
// });

// export default StylishScreen;

import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyles, colors } from '../styles';

const { width } = Dimensions.get('window');

const StylishScreen = ({ route, navigation }: any) => {
  const { Calorie, Fat, Carbs, Sugar, Protein, Fibre } = route.params;

  

const data = [
    { label: 'Calories', value: parseFloat(Calorie.toFixed(2)) },
    { label: 'Fat', value: parseFloat(Fat.toFixed(2)) },
    { label: 'Carbs', value: parseFloat(Carbs.toFixed(2)) },
    { label: 'Sugar', value: parseFloat(Sugar.toFixed(2)) },
    { label: 'Protein', value: parseFloat(Protein.toFixed(2)) },
    { label: 'Fibre', value: parseFloat(Fibre.toFixed(2)) }
  ];
  

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.background_primary, colors.background_secondary]}
        style={styles.background}
      >
        <Text style={styles.title}>Nutritional Summary</Text>
        <Text style={styles.subtitle}>Here are the nutritional values from this meal:</Text>

        <View style={styles.contentContainer}>
          {data.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.Delbutton} onPress={() => {navigation.navigate('addmeal')}}>
          <Text style={styles.logoutButtonText}>Add any</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Delbutton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.logoutButtonText}>Ok</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Delbutton: {
    backgroundColor: colors.button,
    paddingVertical: 6,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
    width: '50%',
  },
  title: {
    fontSize: globalStyles.title.fontSize,
    color: colors.button,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color:  colors.button,
    marginBottom: 20,
    textAlign: 'center',
  },
  contentContainer: {
    backgroundColor: colors.background_primary,
    borderRadius: 20,
    padding: 30,
    height: 500,
    marginTop: 20,
    width: width * 0.8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginVertical: 20
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.button,
  },
  value: {
    fontSize: 18,
    color: colors.primary_text,
  },
});

export default StylishScreen;

