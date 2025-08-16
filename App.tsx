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
import CheckOutScreen from "./src/screens/CartScreen/CheckOutScreen";
import CheckOutScreen3 from "./src/screens/CartScreen/CheckOutScreen3";
import MyOrdersScreen from "./src/screens/CartScreen/MyOrdersScreen";
import CheckOutScreen2 from "./src/screens/CartScreen/CheckOutScreen2";
import OrderSummary from "./src/screens/CartScreen/OrderSummary";
import TrackOrderScreen from "./src/screens/CartScreen/OrderDetailScreen";
import ProfileScreen from "./src/screens/ProfileScreen/ProfileScreen";
import SignUpScreen from "./src/screens/LoginScreens/SignUpScreen";
import LoginScreen from "./src/screens/LoginScreens/LoginScreen";
import ForgotPasswordScreen from "./src/screens/LoginScreens/ForgotPasswordScreen";
import OrderDetailScreen from "./src/screens/CartScreen/OrderDetailScreen";
import { Provider } from "react-redux";
import { store } from "./src/store";
const Stack = createNativeStackNavigator();

const App = () =>
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
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="CheckOutScreen2" component={CheckOutScreen2} />
            <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
            <Stack.Screen name="SlidingScreens" component={SlidingScreens} />
            <Stack.Screen name="CheckOutScreen3" component={CheckOutScreen3} />
            <Stack.Screen name="MyOrdersScreen" component={MyOrdersScreen} />
            <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />
            <Stack.Screen name="MyTabs" component={MyTabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* <CartScreen /> */}
      {/* <CheckOutScreen /> */}
      {/* <CheckOutScreen3 /> */}
      {/* <MyOrdersScreen /> */}
      {/* <CheckOutScreen2 /> */}
      {/* <OrderSummary /> */}
      {/* <TrackOrderScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <LoginScreen /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;