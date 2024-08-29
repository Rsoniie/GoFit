// // import React from 'react';
// // import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
// // import { globalStyles, colors } from '../styles';

// // const { width, height } = Dimensions.get('screen');

// // const CenteredBoxWithShadow = () => {
// //   return (
// //     <View style={styles.container}>
// //       <ScrollView contentContainerStyle={styles.scrollViewContent}>
// //         <View style={styles.text_container}>
// //           <Text style={[globalStyles.title, styles.title]}>
// //             Hello Hriday
// //           </Text>
// //           <Text style={globalStyles.text}>
// //             Find, track and eat healthy food
// //           </Text>
// //         </View>

// //         <View style={styles.box}>
// //           <Text style={styles.text}>Centered Box</Text>
// //         </View>

// //         <View style={styles.upper_line}></View>
// //         <View>
// //           <Text style={[globalStyles.title, styles.title]}>Your Health Dashboard</Text>
// //         </View>
// //         <View style={styles.lower_line}></View>
// //         <View style = {styles.box_option}>
// //           <Text>Centered Box</Text>
// //         </View>
// //         <View style = {styles.box_option}>
// //           <Text>Centered Box</Text>
// //         </View>
// //         <View style = {styles.box_option}>
// //           <Text>Centered Box</Text>
// //         </View>
// //         <View style = {styles.box_option}>
// //           <Text>Centered Box</Text>
// //         </View>
// //         <View style = {styles.box_option}>
// //           <Text>Centered Box</Text>
// //         </View>
// //         <View style = {styles.box_option}>
// //           <Text>Centered Box</Text>
// //         </View>
// //         <View style = {styles.box_option_last}>
// //           <Text>Centered Box</Text>
// //         </View>
// //       </ScrollView>
      
// //       <View style={styles.footer}>
        
// //         <TouchableOpacity style={styles.option}>
// //         <Image source = {require('C:/Users/91629/Desktop/GoFit/rimg.jpg')} style = {styles.headerImage}/>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.option}>
// //           <Text>Cam</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.option}>
// //         <Image source = {require('C:/Users/91629/Desktop/GoFit/rimg.jpg')} style = {styles.headerImage}/>
// //         </TouchableOpacity>
// //       </View>
// //     </View>

    
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: colors.background_primary,
// //   },
// //   scrollViewContent: {
// //     padding: 16,
// //     paddingBottom: 100,
// //   },
// //   box: {
// //     width: '100%',
// //     padding: 20,
// //     backgroundColor: '#ffffff',
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 3.84,
// //     elevation: 5,
// //     marginTop: '15%',
// //     height: '15%',
// //   },
// //   text: {
// //     fontSize: 18,
// //     color: '#333',
// //   },
// //   text_container: {
// //     marginTop: '3%',
// //   },
// //   title: {
// //     paddingBottom: '0.0%',
// //   },
// //   upper_line: {
// //     height: 1,
// //     backgroundColor: '#000',
// //     marginTop: 25,
// //     width: width - 40,
// //   },
// //   lower_line: {
// //     height: 1, 
// //     backgroundColor: '#000',
// //     marginTop: 10,
// //     width: width-40,
// //     marginBottom: 10,
// //   },
// //   box_option: {
// //     width: '100%',
// //     padding: 8,
// //     backgroundColor: '#ffffff',
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 3.84,
// //     elevation: 3,
// //     marginTop: '5%',
// //     height: 90,
// //   },
// //   footer: {
// //     width: width,
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     paddingVertical: 10,
// //     backgroundColor: '#FFFFFF',
// //     borderTopWidth: 1,
// //     borderTopColor: '#ddd',
// //     position: 'absolute',
// //     bottom: 0,
// //   },
// //   option: {
// //     flex: 1,
// //     alignItems: 'center',
// //   },
// //   optionText: {
// //     fontSize: 16,
// //     color: '#007bff',
// //   },
// //    box_option_last:
// //   {
// //      marginBottom:2,
// //   },
// //   headerImage: {
// //     width: 25, 
// //     height: 25, 
// //     marginRight: 10, 
// //   },
// // });

// // export default CenteredBoxWithShadow;


// import React from 'react';
// import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
// import { globalStyles, colors } from '../styles';

// const { width, height } = Dimensions.get('screen');

// const HomeScreen = ({ navigation } : any) => {
//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={styles.text_container}>
//           <Text style={[globalStyles.title, styles.title]}>
//             Hello Hriday
//           </Text>
//           <Text style={globalStyles.text}>
//             Find, track and eat healthy food
//           </Text>
//         </View>

//         <View style={styles.box}>
//           <Text style={styles.text}>Centered Box</Text>
//         </View>

//         <View style={styles.upper_line}></View>
//         <View>
//           <Text style={[globalStyles.title, styles.title]}>Your Health Dashboard</Text>
//         </View>
//         <View style={styles.lower_line}></View>

//         {[...Array(6)].map((_, index) => (
//           <View key={index} style={index === 5 ? [styles.box_option, styles.box_option_last] : styles.box_option}>
//             <Text>Centered Box</Text>
//           </View>
//         ))}

//       </ScrollView>
     
// {/*       
//       <View style={styles.footer}>
//         <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('profile')}>
//           <Image source={require('C:/Users/91629/Desktop/GoFit/rimg.jpg')} style={styles.headerImage} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('camera')}>
//           <Text>Cam</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('profile')}>
//           <Image source={require('C:/Users/91629/Desktop/GoFit/rimg.jpg')} style={styles.headerImage} />
//         </TouchableOpacity> */}
//       {/* </View> */}
//       <TouchableOpacity style={styles.camera}>
//        <Text style={styles.camera_text}>Camera</Text>
//       </TouchableOpacity>
//     </View>
 
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background_primary,
//   },
//   scrollViewContent: {
//     padding: 16,
//     paddingBottom: 100,
//   },
//   box: {
//     width: '100%',
//     padding: 20,
//     backgroundColor: '#ffffff',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     marginTop: '15%',
//     height: 150,
//   },
//   text: {
//     fontSize: 18,
//     color: '#333',
//   },
//   text_container: {
//     marginTop: '3%',
//   },
//   title: {
//     paddingBottom: '0.0%',
//   },
//   upper_line: {
//     height: 1,
//     backgroundColor: '#000',
//     marginTop: 25,
//     width: width - 40,
//   },
//   lower_line: {
//     height: 1, 
//     backgroundColor: '#000',
//     marginTop: 10,
//     width: width - 40,
//     marginBottom: 10,
//   },
//   box_option: {
//     width: '100%',
//     padding: 8,
//     backgroundColor: '#ffffff',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 3,
//     marginTop: '5%',
//     height: 90,
//   },
//   box_option_last: {
//     marginBottom: -50, 
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: "6%",
//     backgroundColor: '#FFFFFF',
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//   },
//   option: {
//     alignItems: 'center',
//   },
//   headerImage: {
//     width: 40, 
//     height: 40, 
//     marginRight: 10, 
//   },
//   camera: {
//        color: 'black',
//        backgroundColor: 'green',
//        padding: '4%',
//        width: '30%',
//        marginBottom: '1%',
//        borderRadius: 100
       
//   },
//   camera_text: {
//     color: 'white',
//     textAlign: 'center'
//   }
// });

// export default HomeScreen;

import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
import { globalStyles, colors } from '../styles';

const { width, height } = Dimensions.get('screen');

const HomeScreen = ({ navigation } : any) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.text_container}>
          <Text style={[globalStyles.title, styles.title]}>
            Hello Hriday
          </Text>
          <Text style={globalStyles.text}>
            Find, track and eat healthy food
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.text}>Centered Box</Text>
        </View>

        <View style={styles.upper_line}></View>
        <View>
          <Text style={[globalStyles.title, styles.title]}>Your Health Dashboard</Text>
        </View>
        <View style={styles.lower_line}></View>

        {[...Array(6)].map((_, index) => (
          <View key={index} style={index === 5 ? [styles.box_option, styles.box_option_last] : styles.box_option}>
            <Text>Centered Box</Text>
          </View>
        ))}

      </ScrollView>

      <TouchableOpacity style={styles.camera} onPress={() => navigation.navigate('camera')}>
        <Text style={styles.camera_text}>Camera</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_primary,
  },
  scrollViewContent: {
    padding: 16,
    paddingBottom: 100,
  },
  box: {
    width: '100%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: '15%',
    height: 150,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  text_container: {
    marginTop: '3%',
  },
  title: {
    paddingBottom: '0.0%',
  },
  upper_line: {
    height: 1,
    backgroundColor: '#000',
    marginTop: 25,
    width: width - 40,
  },
  lower_line: {
    height: 1, 
    backgroundColor: '#000',
    marginTop: 10,
    width: width - 40,
    marginBottom: 10,
  },
  box_option: {
    width: '100%',
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginTop: '5%',
    height: 90,
  },
  box_option_last: {
    marginBottom: -10, 
  },
  camera: {
    position: 'absolute',
    bottom: 20, 
    left: (width - 80) / 2, 
    width: 90,
    height: 90,
    backgroundColor: colors.button,
    borderRadius: 50, 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, 
  },
  camera_text: {
    color: 'white',
    textAlign: 'center',
  }
});

export default HomeScreen;

