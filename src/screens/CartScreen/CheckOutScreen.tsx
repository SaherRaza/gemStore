import React, { FC, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Formik } from 'formik';
import { useNavigation, NavigationProp, CompositeNavigationProp } from '@react-navigation/native';
import { CartParamList, HomeParamList } from '../BottomTab/MyTabs';
import ScreenHeader from '../../components/ScreenHeader';
import RadioButton from '../../components/RadioButton';
import CustomButton from '../../components/CustomButton';
import
{
    validationSchema, setCity, setCountry, setName, resetCheckout, setLastName
    , setPhoneNumber, setStreetName, setState, setZipCode
} from '../../store/checkoutSlice';
import { useDispatch } from 'react-redux';

type combinedNavigation = CompositeNavigationProp<
    NavigationProp<CartParamList>,
    NavigationProp<HomeParamList>
>;


const CheckOutScreen = () =>
{
    const navigation = useNavigation<combinedNavigation>();
    const [couponCode, setCouponCode] = useState('');
    const [billingSameAsShipping, setBillingSameAsShipping] = useState(false);



    const dispatch = useDispatch();

    const handleFormSubmit = (values) =>
    {
        dispatch(setName(values.name));
        dispatch(setLastName(values.lastName));
        dispatch(setPhoneNumber(values.phoneNumber));
        dispatch(setStreetName(values.streetName));
        dispatch(setCity(values.city));
        dispatch(setCountry(values.country));
        dispatch(setState(values.state));
        dispatch(setZipCode(values.zipCode));
        dispatch(resetCheckout());
        //console.log("Form submitted:", values);

    };
    const handleNext = () =>
    {

        if (!billingSameAsShipping)
        {
            Alert.alert('Error', 'Please check the box to copy the address data from shipping.');
            return;
        }
    };
    return (
        <ScrollView
            keyboardDismissMode={'on-drag'}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 120 }}
            style={styles.container}>

            <ScreenHeader onPress={() => navigation.goBack()} title="Check out" />

            <View style={styles.headerContainer}>
                <View style={styles.progressContainer}>
                    <Ionicons name="location-sharp" size={24} color="black" />
                    <View style={styles.dotsContainer}>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <Ionicons name="card" size={24} color="grey" />
                    <View style={styles.dotsContainer}>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <Ionicons name="checkmark-circle" size={24} color="grey" />
                </View>
            </View>
            <View style={{ padding: 20 }}>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.stepText}>STEP 1</Text>
                    <Text style={styles.title}>Shipping</Text>
                </View>

                <Formik
                    initialValues={{ firstName: '', lastName: '', country: '', streetName: '', city: '', state: '', zipCode: '', phoneNumber: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) =>
                    {
                        // Check if any field is empty
                        const isFormValid = Object.values(values).every(value => value.trim() !== '');

                        if (!isFormValid)
                        {
                            Alert.alert('Error', 'Please fill all the required fields.');
                            return;
                        }

                        handleNext();
                        // If all checks pass, dispatch the values and navigate to the next screen
                        handleFormSubmit(values);
                        navigation.navigate("CheckOutScreen2");
                    }
                    }
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <View>
                                <TextInput
                                    style={[
                                        styles.input,
                                        {
                                            borderColor: touched.firstName && errors.firstName ? 'red' : '#D3D3D3',
                                        },
                                    ]}
                                    placeholder="First Name*"
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    value={values.firstName}
                                />
                                {touched.firstName && errors.firstName && <Text style={styles.error}>{errors.firstName}</Text>}

                                <TextInput
                                    style={[
                                        styles.input,
                                        {
                                            borderColor: touched.lastName && errors.lastName ? 'red' : '#D3D3D3',
                                        },
                                    ]}
                                    placeholder="Last Name*"
                                    onChangeText={handleChange('lastName')}
                                    onBlur={handleBlur('lastName')}
                                    value={values.lastName}
                                />
                                {touched.lastName && errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}

                                <TextInput
                                    style={[
                                        styles.input,
                                        {
                                            borderColor: touched.country && errors.country ? 'red' : '#D3D3D3',
                                        },
                                    ]}
                                    placeholder="Country*"
                                    onChangeText={handleChange('country')}
                                    onBlur={handleBlur('country')}
                                    value={values.country}
                                />
                                {touched.country && errors.country && <Text style={styles.error}>{errors.country}</Text>}

                                <TextInput
                                    style={[
                                        styles.input,
                                        {
                                            borderColor: touched.streetName && errors.streetName ? 'red' : '#D3D3D3',
                                        },
                                    ]}
                                    placeholder="Street Name*"
                                    onChangeText={handleChange('streetName')}
                                    onBlur={handleBlur('streetName')}
                                    value={values.streetName}
                                />
                                {touched.streetName && errors.streetName && <Text style={styles.error}>{errors.streetName}</Text>}

                                <TextInput
                                    style={[
                                        styles.input,
                                        {
                                            borderColor: touched.city && errors.city ? 'red' : '#D3D3D3',
                                        },
                                    ]}
                                    placeholder="City*"
                                    onChangeText={handleChange('city')}
                                    onBlur={handleBlur('city')}
                                    value={values.city}
                                />
                                {touched.city && errors.city && <Text style={styles.error}>{errors.city}</Text>}

                                <TextInput
                                    style={[
                                        styles.input,
                                        {
                                            borderColor: touched.state && errors.state ? 'red' : '#D3D3D3',
                                        },
                                    ]}
                                    placeholder="State/Province"
                                    onChangeText={handleChange('state')}
                                    onBlur={handleBlur('state')}
                                    value={values.state}
                                />
                                {/* {touched.state && errors.state && <Text style={styles.error}>{errors.state}</Text>} */}

                                <TextInput
                                    style={[
                                        styles.input,
                                        {
                                            borderColor: touched.zipCode && errors.zipCode ? 'red' : '#D3D3D3',
                                        },
                                    ]}
                                    placeholder="Zip-Code*"
                                    onChangeText={handleChange('zipCode')}
                                    onBlur={handleBlur('zipCode')}
                                    value={values.zipCode}
                                />
                                {touched.zipCode && errors.zipCode && <Text style={styles.error}>{errors.zipCode}</Text>}

                                <TextInput
                                    style={[
                                        styles.input,
                                        {
                                            borderColor: touched.phoneNumber && errors.phoneNumber ? 'red' : '#D3D3D3',
                                        },
                                    ]}
                                    placeholder="Phone number*"
                                    onChangeText={handleChange('phoneNumber')}
                                    onBlur={handleBlur('phoneNumber')}
                                    value={values.phoneNumber}
                                />
                                {touched.phoneNumber && errors.phoneNumber && <Text style={styles.error}>{errors.phoneNumber}</Text>}


                            </View>
                            {/* <Button onPress={handleSubmit} title="Submit" /> */}
                            {/* </>
                    )}
                </Formik> */}


                            <Text style={styles.subTitle}>Shipping method</Text>
                            <RadioButton />


                            <View style={{ marginTop: 30 }}>
                                <Text style={[styles.textStyle, { fontSize: 20, fontWeight: "600" }]}>Coupon Code</Text>
                            </View>

                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder="Have a code? type it here.."
                                    value={couponCode}
                                    onChangeText={setCouponCode}
                                />
                                <TouchableOpacity style={styles.validateButton}>
                                    <Text style={styles.validateButtonText}>Validate</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginTop: 30 }}>
                                <Text style={[styles.textStyle, { fontSize: 20, fontWeight: "600" }]}>Billing Address</Text>
                            </View>

                            <View style={styles.checkboxContainer}>
                                <Checkbox
                                    color={'#508A7B'}
                                    value={billingSameAsShipping}
                                    onValueChange={setBillingSameAsShipping}
                                />
                                <Text style={styles.checkboxLabel}>Copy address data from shipping</Text>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <CustomButton
                                    // color={!billingSameAsShipping ? "#2D201C" : "#508A7B"}
                                    // disabled={!billingSameAsShipping} // Disable if checkbox is not selected
                                    title='Continue to payment' onPress={handleSubmit} />
                            </View>
                        </>
                    )}
                </Formik>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
    },
    textStyle: {
        fontWeight: "bold",
        fontSize: 16,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
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
        borderWidth: 1,
        marginBottom: 10,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginVertical: 12
    },
    error: {
        color: 'red',
    },
    subTitle: {
        fontSize: 22,
        fontWeight: '600',
        marginVertical: 20,
        marginTop: 50

    },

    selectedContainer: {
        backgroundColor: '#D3D3D3', // Light gray background when selected
        borderTopColor: 'gray', // Top border color when selected
        borderBottomColor: 'gray', // Bottom border color when selected
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#508A7B',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selectedRb: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#508A7B',
    },

    validateButton: {
    },
    validateButtonText: {
        color: '#508A7B',
        fontSize: 16,
    },
    inputContainer: {
        width: "100%",
        height: 55,
        borderRadius: 20,
        backgroundColor: "#CBCDD8",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20
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
        marginTop: 30
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CheckOutScreen;
