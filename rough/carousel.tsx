import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const CarouselPage = () => {
  // Define an array of objects containing image URLs and messages
  const carouselItems = [
    { image: 'C:/Users/91629/Desktop/GoFit/src/assets/MainCard.png', message: 'First Card Message' },
    { image:  'C:/Users/91629/Desktop/GoFit/src/assets/MainCard.png', message: 'Second Card Message' },
    { image:  'C:/Users/91629/Desktop/GoFit/src/assets/MainCard.png', message: 'Third Card Message' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.carousel}
      >
        {carouselItems.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image 
              source={{ uri: item.image }} 
              style={styles.cardImage} 
            />
            <Text style={styles.cardText}>{item.message}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  carousel: {
    paddingHorizontal: 20,
  },
  card: {
    width: 200,
    height: 300,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    elevation: 4, // For Android shadow
  },
  cardImage: {
    marginTop: 20,
    width: '80%',
    height: '50%',
    resizeMode: 'contain',
  },
  cardText: {
    marginTop: 10,
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CarouselPage;