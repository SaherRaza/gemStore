import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, Foundation } from "@expo/vector-icons";
import Swiper from "react-native-swiper";

const DATA = [
  {
    id: 1,
    image: require("../../../assets/images/sweater.png"),
  },
  {
    id: 2,
    image: require("../../../assets/images/longDress.png"),
  },
  {
    id: 3,
    image: require("../../../assets/images/denim.jpg"),
  },
  {
    id: 4,
    image: require("../../../assets/images/longDress.png"),
  },
  {
    id: 5,
    image: require("../../../assets/images/denim.jpg"),
  },
];

const HomeScreen = () => {
  const [selectedIcon, setSelectedIcon] = useState(null); // manages the selected category

  // updates the selected category
  const handlePress = (index) => {
    setSelectedIcon(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image
            style={styles.iconStyle}
            source={require("../../../assets/images/DrawerIcon.png")}
          />
        </TouchableOpacity>
        <Text style={styles.textStyle}>GemStore</Text>
        <TouchableOpacity>
          <View style={styles.circle} />
          <Ionicons name="notifications-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.ProductCategoryBar}>
          <TouchableOpacity
            onPress={() => handlePress(0)}
            style={{
              borderColor: selectedIcon === 0 ? "#3A2C27" : "white",
              borderWidth: 1,
              borderRadius: 360,
              padding: 5,
            }}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: selectedIcon === 0 ? "#3A2C27" : "#F3F3F3" },
              ]}
            >
              <Ionicons name="female" size={24} color="#9D9D9D" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePress(1)}
            style={{
              borderColor: selectedIcon === 1 ? "#3A2C27" : "white",
              borderWidth: 1,
              borderRadius: 360,
              padding: 5,
            }}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: selectedIcon === 1 ? "#3A2C27" : "#F3F3F3" },
              ]}
            >
              <Ionicons name="md-male-outline" size={24} color="#9D9D9D" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePress(2)}
            style={{
              borderColor: selectedIcon === 2 ? "#3A2C27" : "white",
              borderWidth: 1,
              borderRadius: 360,
              padding: 5,
            }}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: selectedIcon === 2 ? "#3A2C27" : "#F3F3F3" },
              ]}
            >
              <Ionicons name="ios-glasses-outline" size={24} color="#9D9D9D" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePress(3)}
            style={{
              borderColor: selectedIcon === 3 ? "#3A2C27" : "white",
              borderWidth: 1,
              borderRadius: 360,
              padding: 5,
            }}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: selectedIcon === 3 ? "#3A2C27" : "#F3F3F3" },
              ]}
            >
              <Image
                style={{ width: 26, height: 26 }}
                tintColor={"#9D9D9D"}
                source={require("../../../assets/images/beauty.png")}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.headerSlider}>
          <Swiper
            activeDotColor="#E7E8E9"
            dotColor="#464447"
            dotStyle={{ borderColor: "white", borderWidth: 1 }}
            loop={true}
            showsButtons={false}
            autoplay={true}
            pagingEnabled={true}
          >
            <View>
              <Image
                style={{ width: 330, height: 209 }}
                resizeMode="cover"
                source={require("../../../assets/images/S1.png")}
              />
              <Text style={styles.headerTitle}>
                Autumn{"\n"}Collection{"\n"}2023
              </Text>
            </View>
            <View>
              <Image
                style={{ width: 330, height: 209 }}
                resizeMode="cover"
                source={require("../../../assets/images/S1.png")}
              />
              <Text style={styles.headerTitle}>
                Enhance{"\n"}Your{"\n"}Style
              </Text>
            </View>
            <View>
              <Image
                style={{ width: 330, height: 209 }}
                resizeMode="cover"
                source={require("../../../assets/images/S1.png")}
              />
              <Text style={styles.headerTitle}>
                Autumn{"\n"}Collection{"\n"}2023
              </Text>
            </View>
          </Swiper>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Feature Products</Text>
          <TouchableOpacity>
            <Text style={{ color: "#9B9B9B", fontSize: 16 }}>show all</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 25 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={DATA}
            renderItem={({ item }) => (
              <View style={styles.productContainer}>
                <Image
                  resizeMode="cover"
                  source={item.image}
                  style={styles.cardImage}
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        <View style={styles.bannerContainer}>
          <View style={styles.textBanner}>
            <Text style={styles.textColor}>New Collection</Text>
            <Text
              style={[
                styles.textColor,
                { fontSize: 24, fontWeight: "500", marginTop: 15 },
              ]}
            >
              HANG OUT
            </Text>
            <Text
              style={[styles.textColor, { fontSize: 24, fontWeight: "500" }]}
            >
              & PARTY
            </Text>
          </View>
          {/* <View style={{flex:1}}>
          <Image
          style={{width:119, height:158}}
          resizeMode="cover"
           source={require("../../../assets/images/denim.jpg")} />
        </View> */}
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Recommended</Text>
          <TouchableOpacity>
            <Text style={{ color: "#9B9B9B", fontSize: 16 }}>show all</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 25 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={DATA}
            renderItem={({ item }) => (
              <View style={styles.recommendCategory}>
                <View>
                  <Image
                    resizeMode="cover"
                    source={item.image}
                    style={[styles.cardImage, { width: 66, height: 66 }]}
                  />
                </View>
                <View style={styles.textBlock}>
                  <Text>White Fashion Hoodie</Text>
                  <Text>$ 29.00</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

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
  ProductCategoryBar: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconContainer: {
    width: 58,
    height: 56,
    borderRadius: 360,
    // backgroundColor:"#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
  },
  headerSlider: {
    width: 330,
    height: 209,
    alignSelf: "center",
    marginTop: 30,
    overflow: "hidden", // Ensures that the children don't overflow the rounded corners
    borderRadius: 20,
  },
  headerTitle: {
    position: "absolute",
    fontWeight: "bold",
    color: "white",
    fontSize: 22,
    textAlign: "center",
    top: 30,
    right: 30,
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
    flex: 1,
    margin: 10,
  },
  bannerContainer: {
    height: 157,
    flex: 1,
    width: "100%",
    backgroundColor: "#F8F8FA",
    marginTop: 30,
    flexDirection: "row",
  },
  textColor: {
    color: "#4A4A4A",
    fontSize: 16,
  },
  textBanner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  recommendCategory: {
    flexDirection: "row",
    width:213,
    height:66,
    backgroundColor:"#F9F9F9",
    borderRadius:20,
    marginHorizontal:10
  },
  textBlock:{
    flex:1,
    justifyContent:"center",
  }
});
