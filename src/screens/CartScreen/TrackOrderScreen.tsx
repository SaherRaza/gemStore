import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TrackOrderScreen()
{
    const orderStatus = [
        { label: 'Parcel is successfully delivered', date: '15 May 10:20' },
        { label: 'Parcel is out for delivery', date: '14 May 08:00' },
        { label: 'Parcel is received at delivery Branch', date: '13 May 17:25' },
        { label: 'Parcel is in transit', date: '13 May 07:00' },
        { label: 'Sender has shipped your parcel', date: '12 May 14:25' },
        { label: 'Sender is preparing to ship your order', date: '12 May 10:01' },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Track Order</Text>
            </View>

            {/* Order Details */}
            <View style={styles.orderDetailsContainer}>
                <Text style={styles.orderDetailsText}>Delivered on 15.05.21</Text>
                <Text style={styles.orderDetailsText}>
                    Tracking Number: <Text style={styles.trackingNumber}>IK287368838</Text>
                </Text>
            </View>

            {/* Order Status Timeline */}
            <View style={styles.timelineContainer}>
                {orderStatus.map((status, index) => (
                    <View key={index} style={styles.timelineItem}>
                        <View style={styles.timelineIcon}>
                            <Ionicons name={index === 0 ? "checkmark-circle" : "checkmark-done"} size={20} color={index === 0 ? "green" : "black"} />
                        </View>
                        <View style={styles.timelineTextContainer}>
                            <Text style={styles.timelineText}>{status.label}</Text>
                            <Text style={styles.timelineDate}>{status.date}</Text>
                        </View>
                    </View>
                ))}
            </View>

            {/* Rating Reminder */}
            <View style={styles.ratingReminderContainer}>
                <Text style={styles.ratingReminderText}>Don’t forget to rate</Text>
                <Text style={styles.ratingReminderSubText}>Rate product to get 5 points for collect.</Text>
                <View style={styles.ratingStars}>
                    {[...Array(5)].map((_, index) => (
                        <Ionicons key={index} name="star-outline" size={20} color="gray" />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingBottom: 20,
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
    orderDetailsContainer: {
        marginVertical: 15,
    },
    orderDetailsText: {
        fontSize: 14,
        color: '#888',
    },
    trackingNumber: {
        fontWeight: 'bold',
        color: 'black',
    },
    timelineContainer: {
        marginVertical: 15,
    },
    timelineItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    timelineIcon: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timelineTextContainer: {
        marginLeft: 10,
        flex: 1,
    },
    timelineText: {
        fontSize: 14,
    },
    timelineDate: {
        fontSize: 12,
        color: '#888',
        marginTop: 5,
    },
    ratingReminderContainer: {
        backgroundColor: '#F8F8F8',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
    },
    ratingReminderText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    ratingReminderSubText: {
        fontSize: 14,
        color: '#888',
        marginBottom: 15,
    },
    ratingStars: {
        flexDirection: 'row',
    },
});
