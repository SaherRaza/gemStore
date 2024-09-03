import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { CartParamList } from '../BottomTab/MyTabs';

export default function CheckOutScreen2()
{
    const navigation = useNavigation<NavigationProp<CartParamList>>();
    const [isAgreed, setIsAgreed] = useState(false);

    return (
        <View style={styles.container}>

            <View style={styles.headerStyle}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.iconStyle}
                >
                    <AntDesign name="left" size={18} color="#1E3354" />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Text style={styles.textStyle}>CheckOut</Text>
                </View>

                {/* Empty View to balance the layout */}
                <View style={styles.emptyView} />
            </View>

            <View style={styles.headerContainer}>
                <View style={styles.progressContainer}>
                    <Ionicons name="location-sharp" size={24} color="grey" />
                    <View style={styles.dotsContainer}>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <Ionicons name="card-outline" size={24} color="black" />
                    <View style={styles.dotsContainer}>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <Ionicons name="checkmark-circle-outline" size={24} color="grey" />
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.stepText}>STEP 2</Text>
                <Text style={styles.title}>Payment</Text>
            </View>


            {/* Payment Method Options */}
            <View style={styles.paymentOptions}>
                <TouchableOpacity style={styles.paymentOption}>
                    <Ionicons name="cash-outline" size={24} color="gray" />
                    <Text>Cash</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentOptionSelected}>
                    <Ionicons name="card-outline" size={24} color="black" />
                    <Text>Credit Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.paymentOption}>
                    <Ionicons name="ellipsis-horizontal-circle-outline" size={24} color="gray" />
                    <Text>Other</Text>
                </TouchableOpacity>
            </View>

            {/* Card Section */}
            <View style={styles.cardSection}>
                <Text style={styles.cardSectionTitle}>Choose your card</Text>
                <TouchableOpacity style={styles.addNew}>
                    <Text style={styles.addNewText}>Add new+</Text>
                </TouchableOpacity>
                <Image source={{ uri: 'https://via.placeholder.com/350x150' }} style={styles.cardImage} />
                {/* Replace the above placeholder image with the card image */}
            </View>


            <View style={{ marginTop: 10 }}>
                <Text>or check out with</Text>
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



            {/* Order Summary */}
            <View style={styles.orderSummary}>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Product price</Text>
                    <Text style={styles.summaryValue}>$110</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Shipping</Text>
                    <Text style={styles.summaryValue}>Freeship</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Subtotal</Text>
                    <Text style={styles.subtotalValue}>$110</Text>
                </View>


                {/* Terms and Conditions */}
                <View style={styles.terms}>
                    <Checkbox value={isAgreed} onValueChange={setIsAgreed} />
                    <Text style={styles.termsText}>
                        I agree to <Text style={styles.link}>Terms and conditions</Text>
                    </Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //padding: 20
    },
    headerStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // Make sure to use space-between
        marginTop: 35,
        paddingHorizontal: 20, // Adjust as needed for padding
    },
    iconStyle: {
        width: 32,
        height: 32,
        borderRadius: 360,
        backgroundColor: "#E1E1E1",
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
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
        marginTop: 20
    },

    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        gap: 15,
    },
    dot: {
        width: 3,
        height: 3,
        borderRadius: 1.5,
        backgroundColor: '#999',
        marginHorizontal: 1,
    },
    stepText: {
        fontSize: 12,
        color: '#999',
        marginBottom: 5,
    },
    activeStepIcon: {
        marginHorizontal: 10,
        color: 'black',
    },
    stepTitle: {
        fontSize: 14,
        color: '#A0A0A0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    paymentOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    paymentOption: {
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 8,
        flex: 1,
        marginHorizontal: 5,
    },
    paymentOptionSelected: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#E5E5E5',
        borderRadius: 8,
        flex: 1,
        marginHorizontal: 5,
    },
    cardSection: {
        marginVertical: 20,
    },
    cardSectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    addNew: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    addNewText: {
        color: 'red',
    },
    cardImage: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginTop: 10,
    },
    iconContainer: {
        width: 49.58,
        height: 34,
        borderColor: "#F1F2F3",
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    paymentProviders: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 25,
    },
    orderSummary: {
        marginVertical: 20,
        backgroundColor: "red",
        flex: 1,
        margin: 0
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    summaryLabel: {
        fontSize: 16,
        color: '#A0A0A0',
    },
    summaryValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtotalValue: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    terms: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    termsText: {
        marginLeft: 10,
    },
    link: {
        color: 'blue',
    },
    placeOrderButton: {
        backgroundColor: 'black',
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: 'center',
        marginVertical: 20,
    },
    placeOrderButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
