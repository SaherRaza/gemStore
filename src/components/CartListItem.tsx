import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { cartSlice } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import Checkbox from "expo-checkbox";
import { FC, useState } from "react";

interface Props
{
    cartItem: any;
}



const CartListItem: FC<Props> = ({ cartItem }) =>
{
    const dispatch = useDispatch();
    const [isChecked, setChecked] = useState(false);

    const increaseQuantity = () =>
    {
        dispatch(
            cartSlice.actions.changeQuantity({
                productId: cartItem.product.id,
                amount: 1,
            })
        );
    };

    const decreaseQuantity = () =>
    {
        dispatch(
            cartSlice.actions.changeQuantity({
                productId: cartItem.product.id,
                amount: -1,
            })
        );
    };

    return (
        <View style={styles.cartListStyle}>
            <View style={styles.imageSection}>
                <Image style={styles.image} resizeMode="cover" source={cartItem.product.image} />
            </View>
            <View style={styles.textSection}>
                <View style={styles.checkboxContainer}>
                    <Text style={[styles.textStyle, { lineHeight: 35, fontSize: 14 }]}>{cartItem.product.name}</Text>
                    {/* <Checkbox
                        style={styles.checkBox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#508A7B' : "#8A8A8F"}
                    /> */}
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={[styles.textStyle, { fontSize: 14 }]}>Price: {cartItem.product.price}$</Text>
                    <Text style={[styles.textStyle, { fontSize: 14 }]}>Total: {cartItem.product.price * cartItem.quantity}$</Text>
                </View>
                <View style={styles.sizeContainer}>
                    {/* <View>
                        <Text style={[styles.textStyle, { color: "#8A8A8F", fontWeight: "400", fontSize: 12, lineHeight: 35 }]}>Size:{cartItem.product.size}</Text>
                        <Text style={[styles.textStyle, { color: "#8A8A8F", fontWeight: "400", fontSize: 12, lineHeight: 35 }]}>Size:{cartItem.product.color}</Text>
                    </View> */}
                    <View style={styles.footer}>
                        <Feather
                            onPress={decreaseQuantity}
                            name="minus-circle"
                            size={24}
                            color="gray"
                        />
                        <Text style={styles.quantity}>{cartItem.quantity}</Text>
                        <Feather
                            onPress={increaseQuantity}
                            name="plus-circle"
                            size={24}
                            color="gray"
                        />

                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cartListStyle: {
        width: "90%",
        alignSelf: "center",
        borderRadius: 20,
        backgroundColor: "#f1f1f1",
        flexDirection: "row",
        height: 100, // Example explicit height
        marginVertical: 5
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
    textStyle: {
        fontWeight: "bold",
        fontSize: 16,
    },
    textSection: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
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
    },
    quantity: {
        marginHorizontal: 10,
        fontWeight: "bold",
        color: "gray",
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        top: 10
    },
    itemTotal: {
        fontSize: 16,
        marginLeft: "auto",
        fontWeight: "500",
    },
    checkBox: {
        top: 30,
    }
});

export default CartListItem;

// import { View, Text, StyleSheet, Image } from "react-native";
// import { Feather } from "@expo/vector-icons";
// import { cartSlice } from "../store/cartSlice";
// import { useDispatch } from "react-redux";
// import { FC } from "react";

// interface Props
// {
//     cartItem: any;
// }

// const CartListItem: FC<Props> = ({ cartItem }) =>
// {
//     const dispatch = useDispatch();

//     const increaseQuantity = () =>
//     {
//         dispatch(
//             cartSlice.actions.changeQuantity({
//                 productId: cartItem.id, // Access id directly if no product nesting
//                 amount: 1,
//             })
//         );
//     };

//     const decreaseQuantity = () =>
//     {
//         dispatch(
//             cartSlice.actions.changeQuantity({
//                 productId: cartItem.id,
//                 amount: -1,
//             })
//         );
//     };

//     return (
//         <View style={styles.container}>
//             <Image resizeMode="contain"
//                 source={cartItem.product.image} style={styles.image} />
//             <View style={styles.contentContainer}>
//                 <Text style={styles.name}>{cartItem.product.name}</Text>
//                 <Text style={styles.size}>Size {cartItem.product.size}</Text>

//                 <View style={styles.footer}>
//                     <Feather
//                         onPress={decreaseQuantity}
//                         name="minus-circle"
//                         size={24}
//                         color="gray"
//                     />
//                     <Text style={styles.quantity}>{cartItem.product.quantity}</Text>
//                     <Feather
//                         onPress={increaseQuantity}
//                         name="plus-circle"
//                         size={24}
//                         color="gray"
//                     />
//                     <Text style={styles.itemTotal}>
//                         ${cartItem.product.price * cartItem.product.quantity}
//                     </Text>
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//         paddingHorizontal: 20,
//         flexDirection: "row",
//         backgroundColor: "red"
//     },
//     contentContainer: {
//         flex: 1,
//         marginLeft: 10,
//     },
//     image: {
//         height: 100,
//         width: 100,
//         borderRadius: 20
//     },
//     name: {
//         fontWeight: "500",
//         fontSize: 18,
//     },
//     size: {
//         fontSize: 16,
//         color: "gray",
//     },
//     quantity: {
//         marginHorizontal: 10,
//         fontWeight: "bold",
//         color: "gray",
//     },
//     footer: {
//         marginTop: "auto",
//         flexDirection: "row",
//         alignItems: "center",
//     },
//     itemTotal: {
//         fontSize: 16,
//         marginLeft: "auto",
//         fontWeight: "500",
//     },
// });

// export default CartListItem;
