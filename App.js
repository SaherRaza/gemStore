import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/OnBoardingScreens/WelcomeScreen';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <WelcomeScreen />
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
