import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { FC } from "react";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { CartParamList } from "../BottomTab/MyTabs";
import CartListItem from "../../components/CartListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectDeliveryPrice, selectSubtotal, selectTotal } from "../../store/cartSlice";
import ScreenHeader from "../../components/ScreenHeader";
import CustomButton from './../../components/CustomButton';

interface Props { }

const CartScreen: FC<Props> = () =>
{
  const navigation = useNavigation<NavigationProp<CartParamList>>();

  const cart = useSelector((state: RootState) => state.cart.items);

  const subTotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);

  return (
    <View style={styles.container}>
      <ScreenHeader onPress={() => navigation.goBack()} title="Your Cart" />

      <FlatList
        data={cart}
        keyExtractor={(item) => item.product.id.toString()}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={styles.flatListContent} // Add paddingBottom for space
        showsVerticalScrollIndicator={false} // Optional: hides scrollbar for clean UI
      />

      {cart.length > 0 ? (<View style={styles.bottomContainer}>
        <View style={styles.title}>
          <Text style={[styles.textStyle, { color: "#8A8A8F" }]}>SubTotal</Text>
          <Text style={[styles.textStyle, { fontWeight: "400" }]}>{subTotal}$</Text>
        </View>
        <View style={styles.lineBreak} />
        <View style={styles.title}>
          <Text style={[styles.textStyle, { color: "#8A8A8F" }]}>Delivery</Text>
          <Text style={[styles.textStyle, { fontWeight: "400" }]}>{deliveryFee}$</Text>
        </View>
        <View style={styles.lineBreak} />
        <View style={styles.title}>
          <Text style={[styles.textStyle, { fontWeight: "500" }]}>Total</Text>
          <Text style={[styles.textStyle, { fontWeight: "500" }]}>{total}$</Text>
        </View>
        <View style={styles.btnContainer}>
          <CustomButton
            onPress={() => navigation.navigate("CheckOutScreen")}
            title="Proceed to Checkout"
            Width={300}
          />
        </View>
      </View>) : (
        <Text style={[styles.textPosition, styles.textStyle]}>No items in cart</Text>
      )}



    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
  flatListContent: {
    paddingBottom: 30,  // Space so the last item isn't hidden by the bottomContainer
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  btnContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  bottomContainer: {
    backgroundColor: "white",
    height: "30%",  // 30% of the screen height
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lineBreak: {
    height: 1,
    width: '100%',
    backgroundColor: '#8A8A8F',
    alignSelf: "center",
    marginVertical: 10,
  },
  textPosition: {
    textAlign: 'center',
    justifyContent: "center",
    flex: 1,

  }
});
