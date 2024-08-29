import { StyleSheet } from 'react-native';

const colors = {
  background_primary: '#F4FDFD',
  background_secondary: '#FFFFFF',
  header: '#FFFFFF',
  primary_text: '#0C3737',
  secondary_text: '#698686',
  white: '#FFFFFF',
  black: '#000000',
  button: '#156464',
};



const globalStyles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
    alignContent: 'center',
    alignItems: 'center',
  }, 
  text: {
    color: colors.text,
    fontSize: 18,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
    color: colors.button
  },
  button: {
    padding: 12,
    backgroundColor: colors.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    backgroundColor: colors.background_primary
  },
  loader: {
    
    justifyContent: 'center',
    padding: 50,
  },
  text_loader: {
    fontSize: 40,
    fontWeight: '800',
    color: colors.button,

  }
});

export { globalStyles, colors };
