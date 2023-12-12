import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/OnBoardingScreens/WelcomeScreen';
import SlidingScreens from './src/screens/OnBoardingScreens/SlidingScreens';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <HomeScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
