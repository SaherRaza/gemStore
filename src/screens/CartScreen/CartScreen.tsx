import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import React, { FC, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from './../../components/CustomButton';
import Checkbox from 'expo-checkbox';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { CartParamList } from "../BottomTab/MyTabs";
import CartListItem from "../../components/CartListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectDeliveryPrice, selectSubtotal, selectTotal } from "../../store/cartSlice";

interface Props { }

const CartScreen: FC<Props> = () =>
{
  const navigation = useNavigation<NavigationProp<CartParamList>>();

  const cart = useSelector((state: RootState) => state.cart.items);

  console.log("cart addedd+++++++++++++", cart);

  const subTotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);

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

      <FlatList style={{ flex: 1, backgroundColor: "red" }}
        data={cart}
        renderItem={({ item, index }) => <CartListItem key={index} cartItem={item} />}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.title}>
          <Text style={[styles.textStyle, { color: "#8A8A8F" }]}>SubTotal</Text>
          <Text style={[styles.textStyle, { fontWeight: "400" }]}>{subTotal}$</Text>
        </View>
        <View style={styles.lineBreak} />
        <View style={styles.title}>
          <Text style={[styles.textStyle, { color: "#8A8A8F" }]}>Delivery</Text>
          <Text style={[styles.textStyle, { fontWeight: "400" }]}>{deliveryFee} A$</Text>
        </View>
        <View style={styles.lineBreak} />
        <View style={styles.title}>
          <Text style={[styles.textStyle, { fontWeight: "500" }]}>Total</Text>
          <Text style={[styles.textStyle, { fontWeight: "500" }]}>{total}A$</Text>
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            onPress={() => navigation.navigate("CheckOutScreen")}
            title="Proceed to Checkout" Width={300} />
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
    bottom: 15,
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
  //
  totalsContainer: {
    margin: 20,
    borderColor: "gainsboro",
    borderTopWidth: 1,
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "black",
    alignSelf: "center",
    width: "90%",
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },

});
