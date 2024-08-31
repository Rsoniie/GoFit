import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { launchCamera, Asset } from 'react-native-image-picker';
import { globalStyles, colors } from '../styles';

const CameraScreen = () => {
  const [filePath, setFilePath] = useState<Asset | null>(null);
  const [fileUri, setFileUri] = useState<string | null>(null);

  const handleClick = () => {
    const options = {
      mediaType: 'photo',
      cameraType: 'back',
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
    <SafeAreaView style={styles.container}>
      <View style={styles.viewfinder}>
        <Text style={styles.viewfinderText}>Camera View</Text>
      </View>

      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlButtonText}>Flash</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.captureButton} onPress={handleClick}>
          <View style={styles.captureButtonInner} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton}>
          <Text style={styles.controlButtonText}>Switch</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background_primary,
  },
  viewfinder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.button,
    backgroundColor: colors.button,
  },
  viewfinderText: {
    color: '#fff',
    fontSize: 18,
    opacity: 0.7,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 30,
  },
  controlButton: {
    padding: 20,
  },
  controlButtonText: {
    color: globalStyles.text.color,
    fontSize: 16,
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: colors.button,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.background_secondary,
  },
});

export default CameraScreen;
