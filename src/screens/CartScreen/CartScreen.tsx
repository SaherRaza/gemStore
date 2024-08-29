import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from './../../components/CustomButton';
import Checkbox from 'expo-checkbox';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { CartParamList } from "../BottomTab/MyTabs";

const CartScreen = () =>
{
  const navigation = useNavigation<NavigationProp<CartParamList>>();
  const [isChecked, setChecked] = useState(false);
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
          <View style={styles.checkboxContainer}>
            <Text style={[styles.textStyle, { lineHeight: 35, fontSize: 14 }]}>SportWear Set</Text>
            <Checkbox
              // style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? '#508A7B' : "#8A8A8F"}
            />
          </View>
          <Text style={[styles.textStyle, { lineHeight: 35, fontSize: 14 }]}>$ 80.00</Text>
          <View style={styles.sizeContainer}>
            <Text style={[styles.textStyle, { color: "#8A8A8F", fontWeight: "400", fontSize: 12, lineHeight: 35 }]}>Size:L | Color:Cream</Text>
            <View style={styles.btn}>
              <TouchableOpacity><Text>-</Text></TouchableOpacity>
              <Text>0</Text>
              <TouchableOpacity><Text>+</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.title}>
          <Text style={[styles.textStyle, { color: "#8A8A8F" }]}>Product Price</Text>
          <Text style={[styles.textStyle, { fontWeight: "400" }]}>$110</Text>
        </View>
        <View style={styles.lineBreak} />
        <View style={styles.title}>
          <Text style={[styles.textStyle, { color: "#8A8A8F" }]}>Shipping</Text>
          <Text style={[styles.textStyle, { fontWeight: "400" }]}>Freeship</Text>
        </View>
        <View style={styles.lineBreak} />
        <View style={styles.title}>
          <Text style={[styles.textStyle, { fontWeight: "500" }]}>Subtotal</Text>
          <Text style={[styles.textStyle, { fontWeight: "500" }]}>$110</Text>
        </View>
        <View style={styles.btnContainer}>
          <CustomButton onPress={() => navigation.navigate("CheckOutScreen")} title="Proceed to Checkout" Width={300} />
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
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
    backgroundColor: "white",
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
    width: "90%",
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
    width: "35%",
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
    flex: 1
  },
  btnContainer: {
    alignItems: "center",
    position: 'absolute',
    bottom: 0,
    width: "100%"
  },
  bottomContainer: {
    backgroundColor: "#F1F1F1",
    height: "40%",
    position: 'absolute',
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 35
  },
  lineBreak: {
    height: 1,
    width: '85%',
    backgroundColor: '#8A8A8F',
    alignSelf: "center"
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  btn: {
    flexDirection: "row",
    width: 90,
    borderRadius: 40,
    borderWidth: 1.2,
    padding: 5,
    justifyContent: "space-evenly",
    borderColor: "#8A8A8F",
    alignItems: "center"
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
