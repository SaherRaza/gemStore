import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function OrderSummary()
{
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Order #1514</Text>
            </View>

            {/* Order Status */}
            <View style={styles.statusContainer}>
                <Text style={styles.statusText}>Your order is delivered</Text>
                <Text style={styles.statusSubText}>Rate product to get 5 points for collect.</Text>
            </View>

            {/* Order Information */}
            <View style={styles.orderInfoContainer}>
                <View style={styles.orderInfoRow}>
                    <Text style={styles.orderInfoLabel}>Order number</Text>
                    <Text style={styles.orderInfoValue}>#1514</Text>
                </View>
                <View style={styles.orderInfoRow}>
                    <Text style={styles.orderInfoLabel}>Tracking Number</Text>
                    <Text style={styles.orderInfoValue}>IK987362341</Text>
                </View>
                <View style={styles.orderInfoRow}>
                    <Text style={styles.orderInfoLabel}>Delivery address</Text>
                    <Text style={styles.orderInfoValue}>SBI Building, Software Park</Text>
                </View>
            </View>

            {/* Order Items */}
            <View style={styles.itemsContainer}>
                <View style={styles.itemRow}>
                    <Text style={styles.itemName}>Maxi Dress</Text>
                    <Text style={styles.itemQuantity}>x1</Text>
                    <Text style={styles.itemPrice}>$68.00</Text>
                </View>
                <View style={styles.itemRow}>
                    <Text style={styles.itemName}>Linen Dress</Text>
                    <Text style={styles.itemQuantity}>x1</Text>
                    <Text style={styles.itemPrice}>$52.00</Text>
                </View>
            </View>

            {/* Order Summary */}
            <View style={styles.summaryContainer}>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Sub Total</Text>
                    <Text style={styles.summaryValue}>$120.00</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Shipping</Text>
                    <Text style={styles.summaryValue}>$0.00</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Total</Text>
                    <Text style={styles.summaryTotal}>$120.00</Text>
                </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.returnHomeButton}>
                    <Text style={styles.returnHomeButtonText}>Return home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rateButton}>
                    <Text style={styles.rateButtonText}>Rate</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        marginTop: 70
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    statusContainer: {
        backgroundColor: '#E5E5E5',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 15,
    },
    statusText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    statusSubText: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
    orderInfoContainer: {
        backgroundColor: '#F8F8F8',
        padding: 20,
        borderRadius: 10,
        marginVertical: 15,
    },
    orderInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    orderInfoLabel: {
        fontSize: 14,
        color: '#888',
    },
    orderInfoValue: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    itemsContainer: {
        backgroundColor: '#F8F8F8',
        padding: 20,
        borderRadius: 10,
        marginVertical: 15,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    itemName: {
        fontSize: 14,
        flex: 2,
    },
    itemQuantity: {
        fontSize: 14,
        flex: 1,
        textAlign: 'center',
    },
    itemPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'right',
    },
    summaryContainer: {
        marginVertical: 20,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    summaryLabel: {
        fontSize: 14,
        color: '#888',
    },
    summaryValue: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    summaryTotal: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    returnHomeButton: {
        backgroundColor: '#E5E5E5',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    returnHomeButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    rateButton: {
        backgroundColor: '#000',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    rateButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
