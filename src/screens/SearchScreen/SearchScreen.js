import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons, Feather, MaterialIcons, Entypo } from "@expo/vector-icons";

// Function to estimate the width of the text
const calculateWidth = (text) => {
  const characterWidth = 10; // This is an approximation and would change based on the actual font size and type
  const padding = 20; // Total horizontal padding in the recentSearchItem
  const iconWidth = 34; // Approximate width of the icon and margin
  const textWidth = text.length * characterWidth;

  return Math.max(textWidth + padding + iconWidth, 100); // Minimum width of 100 to handle short text
};

const CategoryList = [
  {
    id: 1,
    title: "CLOTHING",
    image: require("../../../assets/images/clothing.png"),
    bgColor: "#A3A798",
  },
  {
    id: 2,
    title: "ACCESSORIES",
    image: require("../../../assets/images/BAG.png"),
    bgColor: "#898280",
  },
  {
    id: 3,
    title: "SHOES",
    image: require("../../../assets/images/SHOES.png"),
    bgColor: "#44565C",
  },
  {
    id: 4,
    title: "COLLECTION",
    image: require("../../../assets/images/COLLECTION.png"),
    bgColor: "#B9AEB2",
  },
];

const SearchScreen = () => {
  const [text, onChangeText] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [showCategories, setShowCategories] = useState(true);
  const [showBackButton, setShowBackButton] = useState(false);

  const addSearch = (newSearch) => {
    if (newSearch.trim() !== !recentSearches.includes(newSearch.trim())) {
      setRecentSearches([...recentSearches, newSearch.trim()]);
      setShowBackButton(true);
      onChangeText(""); // clear the search input
    }
  };

  // function to remove a search from list

  const removeSearch = (index) => {
    const updatedSearches = [...recentSearches];
    updatedSearches.splice(index, 1);
    setRecentSearches(updatedSearches);
  };

  // function to clear all searches
  const clearAllSearches = () => {
    setRecentSearches([]);
  };

  useEffect(() => {
    if (text || recentSearches.length > 0) {
      setShowCategories(false); // Hide categories when typing or when there are recent searches
    } else {
      setShowCategories(true); // Show categories when not typing and no recent searches
    }
  }, [text, recentSearches]);

  // function to handle back button press
  const handleBackPress = () => {
    onChangeText(""); // clear the search input
    setShowBackButton(false); // Hide back button
    setShowCategories(true); // Show categories
    setRecentSearches(""); // Clear recent searches
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          {text || showBackButton ? (
            <TouchableOpacity onPress={handleBackPress}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                style={styles.iconStyle}
                source={require("../../../assets/images/DrawerIcon.png")}
              />
            </TouchableOpacity>
          )}

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
              onChangeText={onChangeText}
              value={text}
              placeholder="Search..."
              placeholderTextColor={"#43484B"}
              keyboardType="default"
              onSubmitEditing={() => addSearch(text)} // Use onSubmitEditing to trigger the search
            />
          </View>
          <TouchableOpacity style={styles.filterIcon}>
            <Ionicons name="filter" size={24} color="#43484B" />
          </TouchableOpacity>
        </View>

        {/* Displaying Recent Searches */}
        {recentSearches.length > 0 && (
          <ScrollView style={{ height: 60 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginRight: 40,
                marginLeft: 40,
                marginVertical: 10,
              }}
            >
              <Text>Recent Searches</Text>
              <TouchableOpacity onPress={clearAllSearches}>
                <MaterialIcons name="delete-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
            {recentSearches.map((search, index) => (
              <View
                key={index}
                style={[
                  styles.recentSearchItem,
                  { width: calculateWidth(search) }, // Set the width dynamically based on the search text
                ]}
              >
                <Text style={styles.recentSearchText}>{search}</Text>
                <TouchableOpacity onPress={() => removeSearch(index)}>
                  <Entypo name="cross" size={18} color="grey" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        )}

        {showCategories &&
          CategoryList.map((item, index) => (
            <TouchableWithoutFeedback>
              <View
                key={index}
                style={[
                  styles.categoryContainer,
                  { backgroundColor: item.bgColor },
                ]}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    paddingLeft: 20,
                  }}
                >
                  <Text style={[styles.textStyle, { color: "white" }]}>
                    {item.title}
                  </Text>
                </View>
                <View style={{ flex: 1, alignItems: "flex-end" }}>
                  <Image
                    resizeMode="cover"
                    style={{ width: 123, height: 126 }}
                    source={item.image}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
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
    margin: 15,
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
  categoryContainer: {
    width: 350,
    height: 126,
    borderRadius: 20,
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    overflow: "hidden",
    marginVertical: 15,
  },
  recentSearchItem: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
    backgroundColor: "#FAFAFA",
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 10,
  },
  recentSearchText: {
    fontSize: 16,
  },
});
