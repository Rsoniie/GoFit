

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
// import { launchCamera, CameraOptions } from 'react-native-image-picker';
// import RNFS from 'react-native-fs';
// import { globalStyles, colors } from '../styles';
// import Meter from '../components/meter';
// import { SafeAreaView, TextInput, Button, ActivityIndicator } from 'react-native';
// import axios from 'axios';
// import { firebase } from '@react-native-firebase/firestore';
// import firestore from '@react-native-firebase/firestore';

// import Dish from '../components/mapping';

// const { width } = Dimensions.get('screen');

// const HomeScreen = ({ navigation }: any) => {
//   const [fileUri, setFileUri] = useState<string | null>(null);
//   const [imageUrl, setImageUrl] = useState<string>('');
//   const [responseData, setResponseData] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [age, setAge] = useState('');
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [goalWeight, setGoalWeight] = useState('');
//   const [goalTime, setGoalTime] = useState('');
//   const [activityRate, setActivityRate] = useState('');
  

//   const [Calorie, setCalorie] = useState(0);
//   const [Fat, setFat] = useState(0);
//   const [Protein, setProtein] = useState(0);
//   const [Carbs, setCarbs] = useState(0);
//   const[Sugar, setSugar] = useState(0);
//   const [Fibre, setFibre] = useState(0);










//   useEffect(() => {
//     const fetchUserData = async () => {
//       const user = firebase.auth().currentUser;
//       if (user) {
//         try {
//           const userDoc = await firestore()
//             .collection('Users')
//             .doc(user.uid)
//             .get();

//           if (userDoc.exists) {
//             const data = userDoc.data();
//             setFirstName(data?.firstname || '');
//             setLastName(data?.lastName || '');
//             setAge(data?.age || '');
//             setHeight(data?.height || '');
//             setWeight(data?.weight || '');
//             setGoalWeight(data?.goalWeight || '');
//             setGoalTime(data?.goalTime || '');
//             setActivityRate(data?.activityRate || '');
//           }
//         } catch (error) {
//           console.error('Error fetching user data: ', error);
//         }
//       }
//     };

//     fetchUserData();
//   }, []);
   

//   const handleClick = async () => {
//     console.log("Camera Clicked");
  
//     const options: CameraOptions = {
//       mediaType: 'photo',
//       cameraType: 'back',
//       saveToPhotos: true,
//     };
  
//     launchCamera(options, async (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorMessage);
//       } else if (response.assets && response.assets.length > 0) {
//         const asset = response.assets[0];
//         console.log('Asset = ', JSON.stringify(asset));
  
//         if (asset.uri) {
//           try {
//             const destPath = `${RNFS.DocumentDirectoryPath}/capturedImage_${Date.now()}.jpg`;
//             await RNFS.copyFile(asset.uri, destPath);
//             console.log('Image saved to:', destPath);
//             setFileUri(destPath);
  
//             // Create a FormData object
//             const formData = new FormData();
//             formData.append('file', {
//               uri: asset.uri,
//               type: 'image/jpeg',
//               name: 'capturedImage.jpg',
//             });
//             console.log(formData);
  
//             setLoading(true);
  
//             try {
//               console.log("sending");
//               const response = await fetch('https://graceful-fin-434114-b1.el.r.appspot.com/upload', {
//                 method: 'POST',
//                 body: formData,
//                 headers: {
//                   'Content-Type': 'multipart/form-data',
//                 },
//               });
              
//               if (response.ok) {
//                 const data = await response.json().catch(() => null);
//                 console.log(data);
              
//                 if (data) {
//                    console.log(Dish[data.prediction].Carbs);
//                    if(data.prediction)
//                    {
//                    const dish = Dish[data.prediction];
//                    const user = firebase.auth().currentUser;
//                    firestore()
//                   .collection('Users')
//                   .doc(user?.uid)
//                   .set({
                 
//                       Calorie : dish.Calorie,
//                       Fat: dish.Fat,
//                       Carbs: dish.Carbs,
//                       Protein: dish.Protein,
//                       Fibre: dish.Fibre,
//                       Sugar: dish.Sugar,
                   
//                   })
//                   .then(() => {
//                     navigation.replace('popup');
//                     console.log('User added!');
//                   })
//                 }

//                 } else {
//                   console.log('API returned a non-JSON or empty response');
//                 }
//               } else {
//                 console.error('API Error:', response.statusText);
//                 setError('Failed to upload image');
//               }
//             } catch (error) {
//               console.error('API Error:', error);
//               setError('Failed to upload image');
//             } finally {
//               setLoading(false);
//             }
//           } catch (err) {
//             console.log('Failed to save image:', err);
//           }
//         }
//       }
//     });
//   };
  
//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={styles.text_container}>
//           <Text style={[globalStyles.title, styles.title]}>Hello {firstName}</Text>
//           <Text style={globalStyles.text}>Find, track and eat healthy food</Text>
//         </View>

//         <View style={styles.box}>
//           <Text style={styles.text}>Centered Box</Text>
//           <Image source={require('C:/Users/91629/Desktop/GoFit/src/assets/MainCard.png')} style={styles.box_img} />
//         </View>

//         <View>
//           <Text style={[globalStyles.title, styles.titleHealth]}>Your Health Dashboard</Text>
//         </View>

//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.horizontalScroll}
//         >
 
//             <View style={styles.squareBox}>
//               <Text style={styles.boxText}>Calories </Text>
//               <Meter percentage={Calorie} />
//             </View>
//             <View style={styles.squareBox}>
//               <Text style={styles.boxText}>Fat</Text>
//               <Meter percentage={Fat} />
//             </View>
//             <View style={styles.squareBox}>
//               <Text style={styles.boxText}>Carbs </Text>
//               <Meter percentage={Carbs} />
//             </View>
//             <View style={styles.squareBox}>
//               <Text style={styles.boxText}>Protein </Text>
//               <Meter percentage={Protein} />
//             </View>
//             <View style={styles.squareBox}>
//               <Text style={styles.boxText}>Sugar </Text>
//               <Meter percentage={Sugar} />
//             </View>
//             <View style={styles.squareBox}>
//               <Text style={styles.boxText}>Fibre </Text>
//               <Meter percentage={Fibre} />
//             </View>
//         </ScrollView>
//       </ScrollView>

//       {/* {fileUri && ( // Display the captured image if fileUri is set
//         <View style={styles.imageContainer}>
//           <Text style={styles.imageTitle}>Captured Image</Text>
//           <Image source={{ uri: `file://${fileUri}` }} style={styles.capturedImage} />
//         </View>
//       )} */}

//       <TouchableOpacity style={styles.camera} onPress={handleClick}>
//         <Text style={styles.camera_text}>Camera</Text>
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
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     flexDirection: 'row',
//     width: '100%',
//     padding: 20,
//     backgroundColor: '#ffffff',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: colors.button,
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
//   horizontalScroll: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   squareBox: {
//     width: 290,
//     height: 250,
//     backgroundColor: colors.background_secondary,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: colors.button,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 3,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 30,
//   },
//   boxText: {
//     fontSize: globalStyles.text.fontSize,
//     color: '#333',
//     marginBottom: 10,
//     position: 'absolute',
//     start: 20,
//     top: 25,
//   },
//   camera: {
//     position: 'absolute',
//     bottom: 8,
//     left: (width - 80) / 2,
//     width: 90,
//     height: 90,
//     backgroundColor: colors.button,
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//   },
//   camera_text: {
//     color: 'white',
//     textAlign: 'center',
//   },
//   titleHealth: {
//     paddingTop: '10%',
//     paddingBottom: '5%',
//   },
//   box_img: {
//     width: '30%',
//     height: '100%',
//   },
//   imageContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   imageTitle: {
//     fontSize: 18,
//     color: '#333',
//     marginBottom: 10,
//   },
//   capturedImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//   },
// });

// export default HomeScreen;

// Ensure that `Dish` and other necessary imports are properly imported

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
import { launchCamera, CameraOptions } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import { globalStyles, colors } from '../styles';
import Meter from '../components/meter';
import { firebase } from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import Dish from '../components/mapping'; // Ensure this is correctly imported

const { width } = Dimensions.get('screen');

const HomeScreen = ({ navigation }: any) => {
  const [fileUri, setFileUri] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [firstName, setFirstName] = useState('');
  const [Calorie, setCalorie] = useState(0);
  const [Fat, setFat] = useState(0);
  const [Protein, setProtein] = useState(0);
  const [Carbs, setCarbs] = useState(0);
  const [Sugar, setSugar] = useState(0);
  const [Fibre, setFibre] = useState(0);


  const tot_Calorie = 2400;
  const tot_Fat = 75;
  const tot_Carbs = 275;
  const tot_Fibre = 30;
  const tot_Sugar = 50;
  const tot_Protein = 50;

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
            setCalorie(data?.Calorie || 0);
            setFat(data?.Fat || 0);
            setProtein(data?.Protein || 0);
            setCarbs(data?.Carbs || 0);
            setSugar(data?.Sugar || 0);
            setFibre(data?.Fibre || 0);
          }
        } catch (error) {
          console.error('Error fetching user data: ', error);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleClick = async () => {
    console.log('Camera Clicked');

    const options: CameraOptions = {
      mediaType: 'photo',
      cameraType: 'back',
      saveToPhotos: true,
    };

    launchCamera(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        console.log('Asset = ', JSON.stringify(asset));

        if (asset.uri) {
          try {
            const destPath = `${RNFS.DocumentDirectoryPath}/capturedImage_${Date.now()}.jpg`;
            await RNFS.copyFile(asset.uri, destPath);
            console.log('Image saved to:', destPath);
            setFileUri(destPath);

            const formData = new FormData();
            formData.append('file', {
              uri: asset.uri,
              type: 'image/jpeg',
              name: 'capturedImage.jpg',
            });
            console.log(formData);

            setLoading(true);

            try {
              console.log('sending');
              const response = await fetch('https://graceful-fin-434114-b1.el.r.appspot.com/upload', {
                method: 'POST',
                body: formData,
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });

              if (response.ok) {
                const data = await response.json().catch(() => null);
                console.log(data);

                if (data && data.prediction && Dish[data.prediction]) {
                  const dish = Dish[data.prediction];
                  const user = firebase.auth().currentUser;

                  if (user) {
                    firestore()
                      .collection('Users')
                      .doc(user.uid)
                      .set(
                        {
                          Calorie: Calorie + dish.Calorie,
                          Fat: Fat + dish.Fat,
                          Carbs: Carbs + dish.Carbs,
                          Protein: Protein + dish.Protein,
                          Fibre: Fibre + dish.Fibre,
                          Sugar:Sugar+ dish.Sugar,
                        },
                        { merge: true } // This ensures existing fields are not overwritten
                      )
                      .then(() => {
                        const route = { Calorie, Fat, Carbs, Sugar, Protein, Fibre };
                        navigation.replace('popup', route);
                        console.log('User data updated!');
                      })
                      .catch((error) => {
                        console.error('Error updating user data: ', error);
                      });
                  }
                } else {
                  console.log('Invalid prediction or missing data in Dish mapping');
                }
              } else {
                console.error('API Error:', response.statusText);
                setError('Failed to upload image');
              }
            } catch (error) {
              console.error('API Error:', error);
              setError('Failed to upload image');
            } finally {
              setLoading(false);
            }
          } catch (err) {
            console.log('Failed to save image:', err);
          }
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.text_container}>
          <Text style={[globalStyles.title, styles.title]}>Hello {firstName}</Text>
          <Text style={globalStyles.text}>Find, track and eat healthy food</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.text_main_box}>
              Gofit</Text>
          <Image source={require('../assets/MainCard.png')} style={styles.box_img} />
        </View>

        <View>
          <Text style={[globalStyles.title, styles.titleHealth]}>Your Health Dashboard</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
          <View style={styles.squareBox}>
            <Text style={styles.boxText}>Calories</Text>
            <Meter percentage={(Calorie/tot_Calorie)*100} />
          </View>
          <View style={styles.squareBox}>
            <Text style={styles.boxText}>Fat</Text>
            <Meter percentage={(Fat/tot_Fat)*100} />
          </View>
          <View style={styles.squareBox}>
            <Text style={styles.boxText}>Carbs </Text>
            <Meter percentage={(Carbs/tot_Carbs)*100} />
          </View>
          <View style={styles.squareBox}>
            <Text style={styles.boxText}>Protein </Text>
            <Meter percentage={(Protein/tot_Protein)*100} />
          </View>
          <View style={styles.squareBox}>
            <Text style={styles.boxText}>Sugar </Text>
            <Meter percentage={(Sugar/tot_Sugar)*100} />
          </View>
          <View style={styles.squareBox}>
            <Text style={styles.boxText}>Fibre </Text>
            <Meter percentage={(Fibre/tot_Fibre)*100} />
          </View>
        </ScrollView>
      </ScrollView>

      <TouchableOpacity style={styles.camera} onPress={handleClick}>
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
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.button,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: '15%',
    height: 150,
  },
  text_main_box: {
     fontSize: 50,
     color: colors.button,
     fontWeight: 'bold',
     marginHorizontal: 10,
     marginRight: 20
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
  horizontalScroll: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareBox: {
    width: 290,
    height: 250,
    backgroundColor: colors.background_secondary,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.button,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  boxText: {
    fontSize: globalStyles.text.fontSize+7,
    color: colors.button,
    marginBottom: 10,
    position: 'absolute',
    start: 20,
    top: 25,
  },
  camera: {
    position: 'absolute',
    bottom: 8,
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
  },
  titleHealth: {
    paddingTop: '10%',
    paddingBottom: '5%',
  },
  box_img: {
    width: '30%',
    height: '100%',
    borderRadius: 10,
  },
});

export default HomeScreen;

