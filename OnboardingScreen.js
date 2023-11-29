// OnboardingScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./images/Untitled.png')}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button
            title="Get Started"
            onPress={() => navigation.navigate('Home')}
            color="#ffffff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 400,
    height: 600,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#6499E9', 
    borderRadius: 10, // Border radius to make corners rounded
    paddingHorizontal: 20, // Horizontal padding for the button
    elevation: 5, // Elevation for the shadow effect
    shadowColor: '#00E6D8', // Shadow color
    shadowOffset: { width: 6, height: 5 }, // Shadow offset
    shadowOpacity: 0.7, // Shadow opacity
    shadowRadius: 5, // Shadow radius
  },

});

export default OnboardingScreen;
