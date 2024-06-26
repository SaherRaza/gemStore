import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./src/screens/OnBoardingScreens/WelcomeScreen";
import SlidingScreens from "./src/screens/OnBoardingScreens/SlidingScreens";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTabs from "./src/screens/BottomTab/MyTabs";
import DetailScreen from "./src/screens/SearchScreen/DetailScreen";
import SearchScreen from "./src/screens/SearchScreen/SearchScreen";
import CartScreen from "./src/screens/CartScreen/CartScreen";
const Stack = createNativeStackNavigator();
export default function App()
{
  // useEffect(() => {
  //   // Load custom fonts
  //   Font.loadAsync({
  //     semibold: require("./src/assets/fonts/semibold.ttf"),
  //     poppinsMedium: require("./src/assets/fonts/poppinsMedium.ttf"),
  //     poppinsRegular: require("./src/assets/fonts/poppinsRegular.ttf"),
  //   });
  // }, []);
  return (
    <>
      <StatusBar style="auto" />
      {/* <NavigationContainer>
        <Stack.Navigator
          //  initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="MyTabs" component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer> */}
      <CartScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
