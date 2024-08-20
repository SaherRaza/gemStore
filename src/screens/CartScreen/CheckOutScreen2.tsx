import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';

export default function CheckOutScreen2()
{
    const [isAgreed, setIsAgreed] = useState(false);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Check out</Text>
                <View style={styles.headerIcons}>
                    <Ionicons name="location-outline" size={20} color="black" />
                    <Ionicons name="card-outline" size={20} color="black" style={styles.activeStepIcon} />
                    <Ionicons name="checkmark-circle-outline" size={20} color="black" />
                </View>
            </View>

            {/* Step 2: Payment */}
            <Text style={styles.stepTitle}>STEP 2</Text>
            <Text style={styles.sectionTitle}>Payment</Text>

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

            {/* Payment Providers */}
            <View style={styles.paymentProviders}>
                <Ionicons name="logo-paypal" size={32} color="#0070BA" />
                <Ionicons name="logo-visa" size={32} color="#1A1F71" />
                <Ionicons name="logo-mastercard" size={32} color="#F79E1B" />
                <Ionicons name="logo-alipay" size={32} color="#00A1E0" />
                <Ionicons name="logo-amazon" size={32} color="#FF9900" />
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
            </View>

            {/* Terms and Conditions */}
            <View style={styles.terms}>
                <Checkbox value={isAgreed} onValueChange={setIsAgreed} />
                <Text style={styles.termsText}>
                    I agree to <Text style={styles.link}>Terms and conditions</Text>
                </Text>
            </View>

            {/* Place Order Button */}
            <TouchableOpacity style={styles.placeOrderButton}>
                <Text style={styles.placeOrderButtonText}>Place my order</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    activeStepIcon: {
        marginHorizontal: 10,
        color: 'black',
    },
    stepTitle: {
        fontSize: 14,
        color: '#A0A0A0',
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
    paymentProviders: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    orderSummary: {
        marginVertical: 20,
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
