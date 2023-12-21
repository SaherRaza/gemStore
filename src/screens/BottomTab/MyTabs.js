import * as React from "react";

import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import HomeScreen from "../HomeScreen/HomeScreen";
import SearchScreen from "./../SearchScreen/SearchScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CartScreen from "./../CartScreen/CartScreen";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <SearchStack.Navigator screenOptions={screenOptions}>
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}
const CartStack = createNativeStackNavigator();

function CartStackScreen() {
  const screenOptions = {
    headerShown: false,
    tabBarHideOnKeyboard: true,
  };
  return (
    <CartStack.Navigator screenOptions={screenOptions}>
      <CartStack.Screen name="CartScreen" component={CartScreen} />
    </CartStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
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

const Tab = createBottomTabNavigator();

function MyTabs() {
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
          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return (
                <View>
                  <Ionicons name="ios-home-outline" size={24} color="black" />
                </View>
              );
            else
              return (
                <View>
                  <Ionicons name="ios-home-outline" size={24} color="#838383" />
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
          tabBarIcon: ({ focused, tintColor, color }) => {
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
          tabBarIcon: ({ focused, tintColor, color }) => {
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
          tabBarIcon: ({ focused, tintColor, color }) => {
            if (focused)
              return (
                <View>
                  <Ionicons name="ios-person-outline" size={24} color="black" />
                </View>
              );
            else
              return (
                <View>
                  <Ionicons
                    name="ios-person-outline"
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
