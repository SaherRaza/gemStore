import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    country: Yup.string().required('Country is required'),
    streetName: Yup.string().required('Street name is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string(),
    zipCode: Yup.string().required('Zip Code is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
});
const CheckOutScreen = ({ navigation }) =>
{
    const [shippingMethod, setShippingMethod] = useState('free');
    const [couponCode, setCouponCode] = useState('');
    const [billingSameAsShipping, setBillingSameAsShipping] = useState(false);

    return (
        <ScrollView style={styles.container}>

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
                    <Ionicons name="location-outline" size={24} color="black" />
                    <View style={styles.dotsContainer}>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <Ionicons name="card-outline" size={24} color="grey" />
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
                <Text style={styles.stepText}>STEP 1</Text>
                <Text style={styles.title}>Shipping</Text>
            </View>

            <Formik
                initialValues={{ firstName: '', lastName: '', country: '' }}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="First Name*"
                            onChangeText={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                            value={values.firstName}
                        />
                        {touched.firstName && errors.firstName && <Text style={styles.error}>{errors.firstName}</Text>}

                        <TextInput
                            style={styles.input}
                            placeholder="Last Name*"
                            onChangeText={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                            value={values.lastName}
                        />
                        {touched.lastName && errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}

                        <TextInput
                            style={styles.input}
                            placeholder="Country*"
                            onChangeText={handleChange('country')}
                            onBlur={handleBlur('country')}
                            value={values.country}
                        />
                        {touched.country && errors.country && <Text style={styles.error}>{errors.country}</Text>}

                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    error: {
        color: 'red',
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
