


// import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
// import { globalStyles, colors } from '../styles';
// import Meter from '../components/meter';  // Adjust the path according to your file structure
// import React, { useState } from 'react';
// import { launchCamera, Asset } from 'react-native-image-picker';

// const { width } = Dimensions.get('screen');

// const HomeScreen = ({ navigation }: any) => {


//   const [filePath, setFilePath] = useState<Asset | null>(null);
//   const [fileUri, setFileUri] = useState<string | null>(null);
//   const handleClick = () => {

//     console.log("camera Clicked");
//     const options = {
//       mediaType: 'photo',
//       cameraType: 'back',
//       saveToPhotos: true,
//     };

//     launchCamera(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorMessage);
//       } else if (response.assets && response.assets.length > 0) {
//         const asset = response.assets[0];
//         console.log('Asset = ', JSON.stringify(asset));

//         setFilePath(asset);
//         setFileUri(asset.uri || null);
//       }
//     });
//   };




//   return (
//     <View style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollViewContent}>
//         <View style={styles.text_container}>
//           <Text style={[globalStyles.title, styles.title]}>Hello Hriday</Text>
//           <Text style={globalStyles.text}>Find, track and eat healthy food</Text>
//         </View>

//         <View style={styles.box}>
//           <Text style={styles.text}>Centered Box</Text>
//           <Image source={require('C:/Users/91629/Desktop/GoFit/rimg.jpg')} style={styles.box_img} />
//         </View>

//         <View>
//           <Text style={[globalStyles.title, styles.titleHealth]}>Your Health Dashboard</Text>
//         </View>

//         <ScrollView 
//           horizontal 
//           showsHorizontalScrollIndicator={false} 
//           contentContainerStyle={styles.horizontalScroll}
//         >
//           {[...Array(6)].map((_, index) => (
//             <View  key = {index} style={styles.squareBox}>
//               <Text style={styles.boxText}>Card </Text>
//               <Meter percentage = {30}></Meter>
//             </View>
//           ))}
//         </ScrollView>
//       </ScrollView>

//       <TouchableOpacity style={styles.camera} onPress={() => handleClick()}>
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
// });

// export default HomeScreen;



import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native';
import { launchCamera, CameraOptions, CameraType, Asset } from 'react-native-image-picker';
import { globalStyles, colors } from '../styles';
import Meter from '../components/meter';  // Adjust the path according to your file structure

const { width } = Dimensions.get('screen');

const HomeScreen = ({ navigation }: any) => {
  const [filePath, setFilePath] = useState<Asset | null>(null);
  const [fileUri, setFileUri] = useState<string | null>(null);

  const handleClick = () => {
    console.log("camera Clicked");

    const options: CameraOptions = {
      mediaType: 'photo',
      cameraType: 'back', // Correct enum value
      saveToPhotos: true,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const asset = response.assets[0];
        console.log('Asset = ', JSON.stringify(asset));

        setFilePath(asset);
        setFileUri(asset.uri || null);
      }
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.text_container}>
          <Text style={[globalStyles.title, styles.title]}>Hello Hriday</Text>
          <Text style={globalStyles.text}>Find, track and eat healthy food</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.text}>Centered Box</Text>
          <Image source={require('C:/Users/91629/Desktop/GoFit/rimg.jpg')} style={styles.box_img} />
        </View>

        <View>
          <Text style={[globalStyles.title, styles.titleHealth]}>Your Health Dashboard</Text>
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.horizontalScroll}
        >
          {[...Array(6)].map((_, index) => (
            <View key={index} style={styles.squareBox}>
              <Text style={styles.boxText}>Card </Text>
              <Meter percentage={30} />
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      <TouchableOpacity style={styles.camera} onPress={() => handleClick()}>
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
    fontSize: globalStyles.text.fontSize,
    color: '#333',
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
  },
});

export default HomeScreen;

