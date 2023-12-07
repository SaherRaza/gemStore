import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/OnBoardingScreens/WelcomeScreen';
import SlidingScreens from './src/screens/OnBoardingScreens/SlidingScreens';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SlidingScreens />
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
