import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
const OrderDetailScreen: React.FC = () =>
{
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back-circle" size={24} color="gray" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My Orders</Text>
                <View />
            </View>

            {/* Order details */}
            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Order number</Text>
                    <Text style={styles.infoValue}>#1514</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Tracking Number</Text>
                    <Text style={styles.infoValue}>IK987362341</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Delivery address</Text>
                    <Text style={styles.infoValue}>SBI Building, Software Park</Text>
                </View>
            </View>

            {/* Product and price details */}
            <View style={styles.summaryContainer}>
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

                {/* Subtotal and total */}
                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Sub Total</Text>
                    <Text style={styles.totalAmount}>$120.00</Text>
                </View>
                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Shipping</Text>
                    <Text style={styles.totalAmount}>$0.00</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalAmount}>$120.00</Text>
                </View>
            </View>

            {/* Action buttons */}
            <TouchableOpacity style={styles.returnButton}>
                <Text style={styles.buttonText}>Return home</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        padding: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
        borderBottomColor: '#E5E5E5',
        marginTop: 20
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    infoContainer: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        margin: 20
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    infoLabel: {
        fontSize: 14,
        color: '#666',
    },
    infoValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    summaryContainer: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        margin: 20
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    itemName: {
        fontSize: 14,
        color: '#333',
    },
    itemQuantity: {
        fontSize: 14,
        color: '#666',
    },
    itemPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    totalLabel: {
        fontSize: 14,
        color: '#666',
    },
    totalAmount: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    separator: {
        height: 1,
        backgroundColor: '#EDEDED',
        marginVertical: 10,
    },
    returnButton: {
        backgroundColor: '#F8F8F8',
        padding: 15,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#DDD',
        alignItems: 'center',
        alignSelf: "center",
        marginTop: 50
    },
    buttonText: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
});

export default OrderDetailScreen;


// OrderDetailsScreen.js
// import React from 'react';
// import { View, Text } from 'react-native';
// import { useSelector } from 'react-redux';

// const OrderDetailsScreen = () =>
// {
//     const checkoutData = useSelector((state) => state.checkout);

//     return (
//         <View>
//             <Text>Name: {checkoutData.name}</Text>
//             <Text>Address: {checkoutData.address}</Text>
//             <Text>Payment Method: {checkoutData.paymentMethod}</Text>
//         </View>
//     );
// };

// export default OrderDetailsScreen;
