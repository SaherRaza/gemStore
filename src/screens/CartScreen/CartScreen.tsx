import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from './../../components/CustomButton';

const CartScreen = ({ navigation }) =>
{
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconStyle}
        >
          <AntDesign name="left" size={18} color="#1E3354" />
        </TouchableOpacity>

        {/* Centering the text "Your Cart" */}
        <View style={styles.titleContainer}>
          <Text style={styles.textStyle}>Your Cart</Text>
        </View>

        {/* Empty View to balance the layout */}
        <View style={styles.emptyView} />
      </View>

      <View style={styles.cartListStyle}>
        <View style={styles.imageSection}>
          <Image style={styles.image} resizeMode="cover" source={require("../../../assets/images/blueSweater.jpg")} />
        </View>
        <View style={styles.textSection}>
          <Text style={[styles.textStyle, { lineHeight: 40 }]}>SportWear Set</Text>
          <Text style={[styles.textStyle, { lineHeight: 40 }]}>$ 80.00</Text>
          <Text style={[styles.textStyle, { lineHeight: 40 }]}>Size:L | Color:Cream</Text>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <CustomButton title="Proceed to Checkout" Width={"80%"} />
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Make sure to use space-between
    marginTop: 60,
    paddingHorizontal: 20, // Adjust as needed for padding
  },
  iconStyle: {
    width: 32,
    height: 32,
    borderRadius: 360,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center', // Center the text horizontally
  },
  emptyView: {
    width: 32, // This view will be the same size as the iconStyle view
  },
  cartListStyle: {
    width: "85%",
    height: "15%",
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 40,
    backgroundColor: "#F1F1F1",
    flexDirection: "row"
  },
  imageSection: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: "40%",
    height: "100%",
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  textSection: {
    padding: 15,
  },
  btnContainer: {
    alignItems: "center",
    position: 'absolute',
    bottom: 20,
    width: "100%"
  }
});
