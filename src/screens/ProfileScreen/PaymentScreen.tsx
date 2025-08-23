import { Dimensions, Pressable, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ScreenHeader from '../../components/ScreenHeader';
import { ProfileParamList } from '../BottomTab/MyTabs';
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.9;
const CARD_HEIGHT = CARD_WIDTH * 0.55;



const PaymentScreen: React.FC = ({ }) =>
{
    const navigation = useNavigation<NavigationProp<ProfileParamList>>();

    const cardDetails = useSelector((state: RootState) => state.card);
    const { cardHolderName, cardNumber, expire, cvv } = cardDetails;

    return (
        <View style={styles.container}>
            <ScreenHeader onPress={() => navigation.goBack()} title="Payment" />
            <View style={styles.btnTextContainer}>
                <Text style={styles.textStyle}>Card Management</Text>
                <Pressable onPress={() => navigation.navigate("AddCardScreen")}>
                    <Text style={styles.btnStyle}> Add new+
                    </Text>
                </Pressable>
            </View>

            <LinearGradient
                colors={["#36D1DC", "#5B86E5"]}
                style={styles.card}>
                {/* Brand */}
                <Text style={styles.brand}>VISA</Text>

                {/* Number */}
                <Text style={styles.number}>{cardNumber?.trim() ? cardNumber : "**** **** **** ****"}</Text>

                <View style={styles.row}>
                    <View>
                        <Text style={styles.label}>CARDHOLDER NAME</Text>
                        <Text style={styles.value}>{cardHolderName?.trim() ? cardHolderName : "Name"}</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>VALID THRU</Text>
                        <Text style={styles.value}>{expire?.trim() ? expire : "MM/YY"}</Text>
                    </View>
                </View>
            </LinearGradient>

            <View style={{ marginTop: 40, padding: 20 }}>
                <Text style={[styles.textStyle, { fontWeight: "500" }]}>or check out with</Text>
            </View>

            {/* Payment Providers */}
            <View style={styles.paymentProviders}>
                <TouchableOpacity style={styles.iconContainer}>
                    <Image resizeMode='contain' source={require("../../../assets/images/PayPal.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Image resizeMode='contain' source={require("../../../assets/images/visa-logo.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Image resizeMode='contain' source={require("../../../assets/images/Mastercard.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Image resizeMode='contain' source={require("../../../assets/images/Alipay.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.iconContainer, { backgroundColor: "#1F72CD" }]}>
                    <Image style={{ backgroundColor: "#1F72CD" }} resizeMode='contain' source={require("../../../assets/images/AMEX.png")} />
                </TouchableOpacity>
            </View>


        </View>
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btnTextContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20
    },
    textStyle: {
        fontWeight: "bold",
        fontSize: 18
    },
    btnStyle: {
        color: "#ED0006",
        fontWeight: "500",
        fontSize: 14
    },
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 16,
        padding: 20, justifyContent: "space-between",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
        marginTop: 50
    },
    brand: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        alignSelf: "flex-end",
    },
    number: {
        fontSize: 22,
        letterSpacing: 2,
        color: "#fff",
        fontWeight: "600",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    label: {
        fontSize: 10,
        color: "#ddd",
    },
    value: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
    },
    paymentProviders: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 25,
    },
    iconContainer: {
        width: 49.58,
        height: 34,
        borderColor: "#CCD2E3",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
});