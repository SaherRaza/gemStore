import { FlatList, StyleSheet, Switch, Text, View } from 'react-native';
import React, { useState } from 'react';
import { HomeParamList } from '../BottomTab/MyTabs';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ScreenHeader from '../../components/ScreenHeader';

interface Offer
{
    id: string;
    title: string;
    description: string;
}

const offers: Offer[] = [
    {
        id: '1',
        title: 'Good morning! Get 20% Voucher',
        description: 'Summer sale up to 20% off. Limited voucher. Get now!! 😜',
    },
    {
        id: '2',
        title: 'Special offer just for you',
        description: 'New Autumn Collection 30% off',
    },
    {
        id: '3',
        title: 'Holiday sale 50%',
        description: 'Tap here to get 50% voucher.',
    },
];

const OfferCard: React.FC<{ item: Offer; }> = ({ item }) => (
    <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
    </View>
);


const NotificationScreen: React.FC = () =>
{
    const navigation = useNavigation<NavigationProp<HomeParamList>>();



    return (
        <View style={styles.container}>
            <ScreenHeader onPress={() => navigation.goBack()} title="Notification" />
            <FlatList
                data={offers}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <OfferCard item={item} />}
                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                contentContainerStyle={{ padding: 20 }}
            />
        </View>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, // for Android shadow
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#555',
    },

});