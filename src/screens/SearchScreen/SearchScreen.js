import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";

const SearchScreen = () => {
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState("");
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <Image
              style={styles.iconStyle}
              source={require("../../../assets/images/DrawerIcon.png")}
            />
          </TouchableOpacity>
          <Text style={styles.textStyle}>Discover</Text>
          <TouchableOpacity>
            <View style={styles.circle} />
            <Ionicons name="notifications-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.textInputContainer}>
          <View style={styles.inputContainer}>
            <Feather
              name="search"
              size={24}
              color="#43484B"
              style={styles.iconStyle}
            />
            <TextInput
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Search..."
              placeholderTextColor={"#43484B"}
              keyboardType="default"
            />
          </View>
          <TouchableOpacity style={styles.filterIcon}>
            <Ionicons name="filter" size={24} color="#43484B" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // margin:20,
    marginTop: 60,
    alignItems: "center",
    // backgroundColor:"red",
  },
  iconStyle: {
    width: 18,
    height: 17,
  },
  textStyle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  circle: {
    height: 8,
    width: 8,
    borderRadius: 10,
    backgroundColor: "red",
    position: "absolute",
    right: 2,
  },
  textInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#83838383",
    borderRadius: 20,
    paddingLeft: 10, // Adjust as needed
    width: 280,
    height: 49,
  },
  iconStyle: {
    marginRight: 10, // Adjust space between icon and text input
  },
  filterIcon: {
    width: 51,
    height: 49,
    backgroundColor: "#83838383",
    borderRadius: 20,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
