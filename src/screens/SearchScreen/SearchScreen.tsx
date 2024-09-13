import
{
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  ImageSourcePropType,
  FlatList
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons, Feather, MaterialIcons, Entypo } from "@expo/vector-icons";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SearchParamList } from "../BottomTab/MyTabs";

import { DATA, Product } from "../../../assets/data/data";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../store/productSlice";




interface Category
{
  id: number;
  title: string;
  image: ImageSourcePropType;
  bgColor: string;
}


const CategoryList: Category[] = [
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

type Props = NativeStackScreenProps<SearchParamList, "SearchScreen">;

const SearchScreen: React.FC<Props> = ({ navigation }) =>
{

  const dispatch = useDispatch();
  // function to handle category selection
  const handleSelectCategory = (category: string) =>
  {
    dispatch(setSelectedCategory(category));
    // Navigate to the next screen to display products
    navigation.navigate('SelectedCategory', category);  // Adjust to your actual product list screen name

  };

  const [text, onChangeText] = useState<string>('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showCategories, setShowCategories] = useState<boolean>(true);
  const [showBackButton, setShowBackButton] = useState<boolean>(false);

  const addSearch = (newSearch: string): void =>
  {
    if (newSearch.trim() !== '' && !recentSearches.includes(newSearch.trim()))
    {
      setRecentSearches([...recentSearches, newSearch.trim()]);
      setShowBackButton(true);
      onChangeText(''); // clear the search input
    }
  };
  // function to remove a search from list

  const removeSearch = (index: number): void =>
  {
    const updatedSearches = [...recentSearches];
    updatedSearches.splice(index, 1);
    setRecentSearches(updatedSearches);
  };

  // function to clear all searches
  const clearAllSearches = (): void =>
  {
    setRecentSearches([]);
    setShowBackButton(false);
  };

  useEffect(() =>
  {
    if (text || recentSearches.length > 0)
    {
      setShowCategories(false); // Hide categories when typing or when there are recent searches
    } else
    {
      setShowCategories(true); // Show categories when not typing and no recent searches
    }
  }, [text, recentSearches]);

  // function to handle back button press
  const handleBackPress = (): void =>
  {
    onChangeText(""); // clear the search input
    setShowBackButton(false); // Hide back button
    setShowCategories(true); // Show categories
    setRecentSearches([]); // Clear recent searches
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
            <View />
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
              style={styles.iconPosition}
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
          <ScrollView
            style={{
              height: 60,
              marginRight: 40,
              marginLeft: 40,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 10,
              }}
            >
              <Text>Recent Searches</Text>
              <TouchableOpacity onPress={clearAllSearches}>
                <MaterialIcons name="delete-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.recentSearchContainer}>
              {recentSearches.map((search, index) => (
                <View key={index} style={styles.recentSearchItem}>
                  <Text style={styles.recentSearchText}>{search}</Text>
                  <TouchableOpacity onPress={() => removeSearch(index)}>
                    <Entypo name="cross" size={18} color="grey" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>
        )}

        {showCategories ? (
          CategoryList.map((item) => (
            <TouchableWithoutFeedback
              key={item.id.toString()}
              onPress={() => handleSelectCategory(item.title)}
            // navigation.navigate("SelectedCategory", {
            //   category: item.title,
            // })

            >
              <View
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
          ))) : (
          <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>Popular this Week</Text>
              <TouchableOpacity>
                <Text style={{ color: "#9B9B9B", fontSize: 16 }}>show all</Text>
              </TouchableOpacity>
            </View>
            <View style={{ margin: 20 }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{ flexGrow: 0 }}
                keyExtractor={(item: Product, index: number) => item.id.toString()}
                data={DATA}
                renderItem={({ item }) => (
                  <View style={styles.productContainer}>
                    <Image
                      resizeMode="cover"
                      source={item.image}
                      style={styles.cardImage}
                    />
                    <View style={{ marginTop: 10 }}>
                      <Text style={{ fontWeight: "600" }}>{item.name}</Text>
                      <Text style={{ fontWeight: "600" }}>{item.price}</Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        )}
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
  iconPosition: {
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
  recentSearchContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginHorizontal: -10, // Negative value to offset child margins
  },
  recentSearchItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#E8E8E8",
    marginHorizontal: 10, // Spacing between items
    marginBottom: 5,
    borderRadius: 10,
    // No need for flexWrap here
  },
  recentSearchText: {
    fontSize: 16,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 35,
  },
  cardImage: {
    width: 126,
    height: 172,
    borderRadius: 20,
  },
  productContainer: {
    margin: 13,
    justifyContent: "center",
    alignItems: "center",
  },
});
