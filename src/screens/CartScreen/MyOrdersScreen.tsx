import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const orders = [
    {
        id: '1',
        orderNumber: '#1524',
        trackingNumber: 'IK287368838',
        quantity: 2,
        subtotal: 110,
        date: '13/05/2021',
        status: 'PENDING',
    },
    {
        id: '2',
        orderNumber: '#1524',
        trackingNumber: 'IK2873218897',
        quantity: 3,
        subtotal: 230,
        date: '12/05/2021',
        status: 'PENDING',
    },
    {
        id: '3',
        orderNumber: '#1524',
        trackingNumber: 'IK237368820',
        quantity: 5,
        subtotal: 490,
        date: '10/05/2021',
        status: 'PENDING',
    },
];

export default function MyOrdersScreen()
{
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle" size={24} color="gray" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My Orders</Text>
                <TouchableOpacity>
                    <MaterialIcons name="notifications-none" size={24} color="black" />
                </TouchableOpacity>
            </View>


            <View style={{ paddingTop: 30, flex: 1, }}>


                {/* Order List */}
                <FlatList
                    data={orders}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.orderCard}>
                            <View style={styles.orderHeader}>
                                <Text style={styles.orderNumber}>Order {item.orderNumber}</Text>
                                <Text style={styles.orderDate}>{item.date}</Text>
                            </View>
                            <Text style={styles.trackingNumber}>Tracking number: {item.trackingNumber}</Text>
                            <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
                            <Text style={styles.subtotal}>Subtotal: <Text style={styles.subtotalValue}>${item.subtotal}</Text></Text>
                            <Text style={styles.status}>{item.status}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("OrderDetailScreen")} style={styles.detailsButton}>
                                <Text style={styles.detailsButtonText}>Details</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
        borderBottomColor: '#E5E5E5',
        marginTop: 50
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
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
        margin: 5,
        gap: 5
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
    trackingNumber: {
        fontSize: 14,
        color: '#7D7D7D',
        marginBottom: 5,
    },
    quantity: {
        fontSize: 14,
        marginBottom: 5,
    },
    subtotal: {
        fontSize: 14,
        marginBottom: 10,
    },
    subtotalValue: {
        fontWeight: 'bold',
        color: '#000',
    },
    status: {
        color: '#F57C00',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    detailsButton: {
        alignSelf: 'flex-end',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 16,
        bottom: 10
    },
    detailsButtonText: {
        fontSize: 14,
        color: '#000',
    },
});
