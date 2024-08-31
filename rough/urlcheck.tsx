import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const App = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [responseData, setResponseData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchPrediction = async () => {
    setLoading(true);
    setError('');
    setResponseData(null);

    try {
      const response = await fetch('https://graceful-fin-434114-b1.el.r.appspot.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: imageUrl }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setResponseData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter image URL"
          value={imageUrl}
          onChangeText={setImageUrl}
        />
        <Button title="Fetch Prediction" onPress={fetchPrediction} />
      </View>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      )}
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      ) : (
        responseData && (
          <View style={styles.responseContainer}>
            <Text style={styles.responseText}>Response:</Text>
            <Text style={styles.responseData}>{JSON.stringify(responseData, null, 2)}</Text>
          </View>
        )
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  loadingContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  errorContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  responseContainer: {
    marginTop: 20,
  },
  responseText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  responseData: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default App;
