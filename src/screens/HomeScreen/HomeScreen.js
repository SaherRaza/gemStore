import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons, Foundation } from "@expo/vector-icons";
import Swiper from "react-native-swiper";

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
        >
          <View>
            <Image
              style={{ width: 330, height: 209, borderRadius: 20 }}
              resizeMode="cover"
              source={require("../../../assets/images/S1.png")}
            />
            <Text style={styles.headerTitle}>Autumn{"\n"}Collection{"\n"}2023</Text>
          </View>
          <View>
            <Image
              style={{ width: 330, height: 209, borderRadius: 20 }}
              resizeMode="cover"
              source={require("../../../assets/images/S1.png")}
            />
            <Text style={styles.headerTitle}>Enhance{"\n"}Your{"\n"}Style</Text>
          </View>
          <View>
            <Image
              style={{ width: 330, height: 209, borderRadius: 20 }}
              resizeMode="cover"
              source={require("../../../assets/images/S1.png")}
            />
            <Text style={styles.headerTitle}>Autumn{"\n"}Collection{"\n"}2023</Text>
          </View>
        </Swiper>
      </View>
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
  },
  headerTitle: {
    position: "absolute",
    fontWeight: "bold",
    color: "white",
    fontSize: 22,
    textAlign: "center",
    top: 30,
    right:30
  },
});
