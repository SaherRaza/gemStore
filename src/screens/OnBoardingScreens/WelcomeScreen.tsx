import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';


const WelcomeScreen: React.FC = () =>
{
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../../assets/images/bgImage.png")}
        // overlayColor="#000000"
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.overlay}>
          {/* Your content goes here */}
          <View style={styles.textContainer}>
            <Text style={[styles.textStyle, { fontSize: 20, fontWeight: "bold" }]}>Welcome to GemStore!</Text>
            <Text style={styles.textStyle}>The home for a fashionista</Text>
          </View>
          <View style={styles.btnContainer}>
            <CustomButton title={"Get Started"} Width={193} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the color and opacity as needed
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: "center",
    marginTop: 200,
    gap: 15
  },
  textStyle: {
    color: "white"
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 100
  }
});