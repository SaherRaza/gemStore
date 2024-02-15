import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import CustomButton from "../../components/CustomButton";

const SlidingScreens: React.FC = () =>
{
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Swiper
          activeDotColor="#E7E8E9"
          dotColor="#464447"
          dotStyle={{ borderColor: "white", borderWidth: 1, }}
          loop={true}
          showsButtons={false}
          autoplay={true}
        >
          <ScreenOne />
          <ScreenTwo />
          <ScreenThree />
        </Swiper>
      </View>
      <View style={{ flex: 1 }}>
        <CustomButton title={"Shopping now"} Width={193} />
      </View>
    </View>
  );
};

export default SlidingScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes the top half take up half of the container
    backgroundColor: "white",
    alignItems: "center",
  },
  textContainer: {
    marginTop: 130,
    bottom: 30
  },
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
  },
  wrapper: {
    flex: 3,
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 480,
    height: 368,
  },

});

export const ScreenOne = () =>
{
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Discover Something new</Text>
        <Text style={[styles.textStyle, { fontWeight: "500", fontSize: 14 }]}>
          Special new arrivals just for you
        </Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          resizeMode="contain"
          source={require("../../../assets/images/image1.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export const ScreenTwo = () =>
{
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Update trendy Outfit</Text>
        <Text style={[styles.textStyle, { fontWeight: "500", fontSize: 14 }]}>
          Favorite brands and hottest trends
        </Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          resizeMode="contain"
          source={require("../../../assets/images/image1.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export const ScreenThree = () =>
{
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Explore your true Style</Text>
        <Text style={[styles.textStyle, { fontWeight: "500", fontSize: 14 }]}>
          Relax and let us bring the style to you
        </Text>
      </View>
      <View style={styles.imgContainer}>
        <Image
          resizeMode="contain"
          source={require("../../../assets/images/image1.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};