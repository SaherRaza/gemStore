import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
const CheckOutScreen = () =>
{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('');
    const [streetName, setStreetName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [shippingMethod, setShippingMethod] = useState('free');
    const [couponCode, setCouponCode] = useState('');
    const [billingSameAsShipping, setBillingSameAsShipping] = useState(false);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Check out</Text>
                <View style={styles.progressContainer}>
                    <Ionicons name="location-outline" size={20} color="black" />
                    <View style={styles.dotsContainer}>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <Ionicons name="card-outline" size={20} color="grey" />
                    <View style={styles.dotsContainer}>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <Ionicons name="checkmark-circle-outline" size={20} color="grey" />
                </View>
            </View>
            <Text style={styles.stepText}>STEP 1</Text>
            <Text style={styles.title}>Shipping</Text>

            <TextInput
                style={styles.input}
                placeholder="First name *"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={[styles.input, lastName === '' && styles.error]}
                placeholder="Last name *"
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Country *"
                value={country}
                onChangeText={setCountry}
            />
            <TextInput
                style={styles.input}
                placeholder="Street name *"
                value={streetName}
                onChangeText={setStreetName}
            />
            <TextInput
                style={styles.input}
                placeholder="City *"
                value={city}
                onChangeText={setCity}
            />
            <TextInput
                style={styles.input}
                placeholder="State / Province"
                value={state}
                onChangeText={setState}
            />
            <TextInput
                style={styles.input}
                placeholder="Zip-code *"
                value={zipCode}
                onChangeText={setZipCode}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone number *"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />

            <Text style={styles.subTitle}>Shipping method</Text>
            <TouchableOpacity onPress={() => setShippingMethod('free')} style={styles.radioContainer}>
                <View style={styles.radioCircle}>
                    {shippingMethod === 'free' && <View style={styles.selectedRb} />}
                </View>
                <Text style={styles.radioText}>Free Delivery to home</Text>
                <Text style={styles.radioTextSmall}>Delivery from 3 to 7 business days</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShippingMethod('standard')} style={styles.radioContainer}>
                <View style={styles.radioCircle}>
                    {shippingMethod === 'standard' && <View style={styles.selectedRb} />}
                </View>
                <Text style={styles.radioText}>$9.90 Delivery to home</Text>
                <Text style={styles.radioTextSmall}>Delivery from 4 to 6 business days</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShippingMethod('fast')} style={styles.radioContainer}>
                <View style={styles.radioCircle}>
                    {shippingMethod === 'fast' && <View style={styles.selectedRb} />}
                </View>
                <Text style={styles.radioText}>$9.90 Fast Delivery</Text>
                <Text style={styles.radioTextSmall}>Delivery from 2 to 3 business days</Text>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Coupon Code"
                value={couponCode}
                onChangeText={setCouponCode}
            />
            <TouchableOpacity style={styles.validateButton}>
                <Text style={styles.validateButtonText}>Validate</Text>
            </TouchableOpacity>

            <View style={styles.checkboxContainer}>
                <Checkbox
                    value={billingSameAsShipping}
                    onValueChange={setBillingSameAsShipping}
                />
                <Text style={styles.checkboxLabel}>Copy address data from shipping</Text>
            </View>

            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue to payment</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    backButton: {
        padding: 5,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 3,
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        fontSize: 16,
    },
    error: {
        borderColor: 'red',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selectedRb: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#000',
    },
    radioText: {
        fontSize: 16,
    },
    radioTextSmall: {
        fontSize: 12,
        color: '#666',
        marginLeft: 30,
    },
    validateButton: {
        alignSelf: 'flex-end',
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    validateButtonText: {
        color: '#000',
        fontSize: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxLabel: {
        marginLeft: 8,
        fontSize: 16,
    },
    continueButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CheckOutScreen;
