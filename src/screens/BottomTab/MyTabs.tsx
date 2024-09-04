import * as React from "react";

import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import
{
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import HomeScreen from "../HomeScreen/HomeScreen";
import SearchScreen from "../SearchScreen/SearchScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CartScreen from "../CartScreen/CartScreen";
import SelectedCategory from "../SearchScreen/SelectedCategory";
import DetailScreen from "../SearchScreen/DetailScreen";
import CheckOutScreen from "../CartScreen/CheckOutScreen";
import CheckOutScreen2 from './../CartScreen/CheckOutScreen2';
import CheckOutScreen3 from './../CartScreen/CheckOutScreen3';
import MyOrdersScreen from './../CartScreen/MyOrdersScreen';
import OrderSummary from './../CartScreen/OrderSummary';
import TrackOrderScreen from './../CartScreen/TrackOrderScreen';



export type HomeParamList = {
  HomeScreen: undefined;
};


const HomeStack = createNativeStackNavigator<HomeParamList>();

const HomeStackScreen: React.FC = () =>
{
  const screenOptions = {
    headerShown: false,
  };
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      {/* Other screens if any */}
    </HomeStack.Navigator>
  );
};


export type SearchParamList = {
  SearchScreen: undefined;
  SelectedCategory: {
    category: string;
  };
  DetailScreen: undefined;
};

const SearchStack = createNativeStackNavigator<SearchParamList>();

function SearchStackScreen()
{
  const screenOptions = {
    headerShown: false,
  };
  return (
    <SearchStack.Navigator screenOptions={screenOptions}>
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
      <SearchStack.Screen
        name="SelectedCategory"
        component={SelectedCategory}
      />
      <SearchStack.Screen name="DetailScreen" component={DetailScreen} />
    </SearchStack.Navigator>
  );
}

export type CartParamList = {
  CartScreen: undefined;
  CheckOutScreen: undefined;
  CheckOutScreen2: undefined;
  CheckOutScreen3: undefined;
  MyOrdersScreen: undefined;
  OrderSummary: undefined;
  TrackOrderScreen: undefined;
};
const CartStack = createNativeStackNavigator<CartParamList>();

function CartStackScreen()
{
  const screenOptions = {
    headerShown: false,
    tabBarHideOnKeyboard: true,
  };
  return (
    <CartStack.Navigator screenOptions={screenOptions}>
      <CartStack.Screen name="CartScreen" component={CartScreen} />
      <CartStack.Screen name="CheckOutScreen" component={CheckOutScreen} />
      {/* <CartStack.Screen name="CheckOutScreen2" component={CheckOutScreen2} /> */}
      <CartStack.Screen name="OrderSummary" component={OrderSummary} />
      <CartStack.Screen name="TrackOrderScreen" component={TrackOrderScreen} />
    </CartStack.Navigator>
  );
}

export type ProfileParamList = {
  ProfileScreen: undefined;
};
const ProfileStack = createNativeStackNavigator<ProfileParamList>();

function ProfileStackScreen()
{
  const screenOptions = {
    headerShown: false,
    tabBarHideOnKeyboard: true,
  };
  return (
    <ProfileStack.Navigator screenOptions={screenOptions}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}
export type BottomTabParamList = {
  Home: HomeParamList;
  Search: SearchParamList;
  Cart: CartParamList;
  Profile: ProfileParamList;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function MyTabs()
{
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        lazy: false,
        tabBarStyle: {
          flexDirection: "row",
          //marginHorizontal: 20,
          justifyContent: "space-evenly",
          width: wp("100%"),
          alignSelf: "center",
          height: hp("10%"),
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          bottom: 0,
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, }) =>
          {
            if (focused)
              return (
                <View>
                  <Ionicons name="home-outline" size={24} color="black" />
                </View>
              );
            else
              return (
                <View>
                  <Ionicons name="home-outline" size={24} color="#838383" />
                </View>
              );
          },
        }}
        name="Home"
        component={HomeStackScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, }) =>
          {
            if (focused)
              return (
                <View>
                  <Feather name="search" size={24} color="black" />
                </View>
              );
            else
              return (
                <View>
                  <Feather name="search" size={24} color="#838383" />
                </View>
              );
          },
        }}
        name="Search"
        component={SearchStackScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, }) =>
          {
            if (focused)
              return (
                <View>
                  <AntDesign name="shoppingcart" size={24} color="black" />
                </View>
              );
            else
              return (
                <View>
                  <AntDesign name="shoppingcart" size={24} color="#838383" />
                </View>
              );
          },
        }}
        name="Cart"
        component={CartStackScreen}
      />

      <Tab.Screen
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) =>
          {
            if (focused)
              return (
                <View>
                  <Ionicons name="person-outline" size={24} color="black" />
                </View>
              );
            else
              return (
                <View>
                  <Ionicons
                    name="person-outline"
                    size={24}
                    color="#838383"
                  />
                </View>
              );
          },
        }}
        name="Profile"
        component={ProfileStackScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  TabContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-evenly",
    backgroundColor: "#272E34",
    width: wp("100%"),
    alignSelf: "center",
    height: hp("10%"),
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  iconStyle: {
    marginBottom: 3,
    alignSelf: "center",
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: "semibold",
    color: "#6C8193",
    textAlign: "center",
    fontSize: 10,
  },
});

export default MyTabs;
