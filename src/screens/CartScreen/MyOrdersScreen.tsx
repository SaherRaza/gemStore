import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenHeader from '../../components/ScreenHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function MyOrdersScreen()
{
    const navigation = useNavigation();
    const checkoutData = useSelector((state: RootState) => state.checkout);

    // Log to check checkoutData
    useEffect(() =>
    {
        console.log("Checkout Data:", checkoutData);
    }, [checkoutData]);

    return (
        <View style={styles.container}>
            {/* Header */}
            <ScreenHeader onPress={() => navigation.goBack()} title="My Orders" />

            <View style={{ paddingTop: 30, flex: 1 }}>
                {/* Check if checkoutData has content */}
                {checkoutData ? (
                    <FlatList
                        data={[checkoutData]} // Displaying checkout data as a single order
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.orderCard}>
                                <View style={styles.orderHeader}>
                                    <Text style={styles.orderNumber}>
                                        {item.firstName ? `Order for ${ item.firstName }` : "Order"}
                                    </Text>
                                    <Text style={styles.orderDate}>{item.lastName || "No Date"}</Text>
                                </View>
                                {/* Display other order details conditionally */}
                                <TouchableOpacity onPress={() => navigation.navigate("OrderDetailScreen")} style={styles.detailsButton}>
                                    <Text style={styles.detailsButtonText}>Details</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                ) : (
                    <Text style={styles.noDataText}>No order data available</Text>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    noDataText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#7D7D7D',
        marginTop: 20,
    },
    orderCard: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 15,
        marginHorizontal: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2,
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    orderNumber: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    orderDate: {
        fontSize: 14,
        color: '#7D7D7D',
    },
    quantity: {
        fontSize: 14,
        marginBottom: 5,
    },
    subtotal: {
        fontSize: 14,
        marginBottom: 10,
    },
    detailsButton: {
        alignSelf: 'flex-end',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    detailsButtonText: {
        fontSize: 14,
        color: '#000',
    },
});
