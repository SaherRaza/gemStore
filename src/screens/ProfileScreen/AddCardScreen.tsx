import { Alert, StyleSheet, Text, TextInput, View, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ScreenHeader from '../../components/ScreenHeader';
import { ProfileParamList } from '../BottomTab/MyTabs';
import { cardValidationSchema, setCardHolderName, setCardNumber, setCVV, setExpire } from '../../store/creditCardSlice';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import CustomButton from '../../components/CustomButton';
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.9;
const CARD_HEIGHT = CARD_WIDTH * 0.55;

const AddCardScreen: React.FC = () =>
{
    const dispatch = useDispatch();

    const handleFormSubmit = (values) =>
    {
        dispatch(setCardHolderName(values.cardHolderName));
        dispatch(setCardNumber(values.cardNumber));
        dispatch(setExpire(values.expire));
        dispatch(setCVV(values.cvv));
        console.log("Form submitted:", values);

    };
    const navigation = useNavigation<NavigationProp<ProfileParamList>>();
    return (
        <ScrollView
            keyboardDismissMode={'on-drag'}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 170 }}
            style={{ flex: 1 }}>

            <ScreenHeader onPress={() => navigation.goBack()} title="Add New Card" />


            <LinearGradient
                colors={["#36D1DC", "#5B86E5"]}
                style={styles.card}>
                {/* Brand */}
                <Text style={styles.brand}>VISA</Text>

                {/* Number */}
                <Text style={styles.number}>**** **** **** ****</Text>

                <View style={styles.row}>
                    <View>
                        <Text style={styles.label}>CARDHOLDER NAME</Text>
                        <Text style={styles.value}>NAME</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>VALID THRU</Text>
                        <Text style={styles.value}>MM/YY</Text>
                    </View>
                </View>
            </LinearGradient>

            <Formik
                initialValues={{ cardHolderName: '', cardNumber: '', expire: '', cvv: '', }}
                validationSchema={cardValidationSchema}
                onSubmit={(values) =>
                {
                    // Check if any field is empty
                    const isFormValid = Object.values(values).every(value => value.trim() !== '');

                    if (!isFormValid)
                    {
                        Alert.alert('Error', 'Please fill all the required fields.');
                        return;
                    }

                    //handleNext();
                    // If all checks pass, dispatch the values and navigate to the next screen
                    handleFormSubmit(values);
                    navigation.navigate("PaymentScreen");
                }
                }
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>

                        <View style={styles.container}>
                            <Text style={styles.formikLabel}>CARDHOLDER NAME</Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    touched.cardHolderName && errors.cardHolderName && { borderColor: '#ED0006' }
                                ]}
                                placeholder="Card Holder Name*"
                                onChangeText={handleChange('cardHolderName')}
                                onBlur={handleBlur('cardHolderName')}
                                value={values.cardHolderName}
                            />
                            {touched.cardHolderName && errors.cardHolderName && <Text style={styles.error}>{errors.cardHolderName}</Text>}

                            <Text style={styles.formikLabel}>CARD NUMBER</Text>
                            <TextInput
                                style={[
                                    styles.input,
                                    touched.cardNumber && errors.cardNumber && { borderColor: '#ED0006' }
                                ]}
                                placeholder="Card Number*"
                                onChangeText={(text) =>
                                {
                                    // Remove all non-digit characters
                                    let cleaned = text.replace(/\D/g, '');
                                    // Add space every 4 digits
                                    let formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
                                    handleChange('cardNumber')(formatted);
                                }}
                                onBlur={handleBlur('cardNumber')}
                                value={values.cardNumber}
                                keyboardType="numeric"
                                maxLength={19}
                            />
                            {touched.cardNumber && errors.cardNumber && <Text style={styles.error}>{errors.cardNumber}</Text>}

                            <View style={styles.formikRow}>
                                <View style={styles.halfInput}>
                                    <Text style={styles.formikLabel}>EXPIRES</Text>
                                    <TextInput
                                        style={[
                                            styles.input,
                                            touched.expire && errors.expire && { borderColor: '#ED0006' }
                                        ]}
                                        maxLength={5}
                                        placeholder="MM/YY"
                                        onChangeText={(text) =>
                                        {
                                            // remove any non-digits
                                            let cleaned = text.replace(/\D/g, '');
                                            // format: add slash after first 2 digits
                                            if (cleaned.length > 2)
                                            {
                                                cleaned = cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
                                            }
                                            handleChange('expire')(cleaned);
                                        }}
                                        onBlur={handleBlur('expire')}
                                        value={values.expire}
                                        keyboardType="numeric"
                                    />
                                    {touched.expire && errors.expire && <Text style={styles.error}>{errors.expire}</Text>}
                                </View>

                                <View style={styles.halfInput}>
                                    <Text style={styles.formikLabel}>CVV</Text>
                                    <TextInput
                                        style={[
                                            styles.input,
                                            touched.cvv && errors.cvv && { borderColor: '#ED0006' }
                                        ]}
                                        placeholder="CVV*"
                                        onChangeText={handleChange('cvv')}
                                        onBlur={handleBlur('cvv')}
                                        value={values.cvv}
                                        keyboardType="numeric"
                                        maxLength={3}
                                    />
                                    {touched.cvv && errors.cvv && <Text style={styles.error}>{errors.cvv}</Text>}
                                </View>
                            </View>
                            <View style={styles.btnContainer}>
                                <CustomButton
                                    Width={180}
                                    onPress={handleSubmit}
                                    title='Add Card' />
                            </View>
                        </View>
                    </>
                )}
            </Formik>

        </ScrollView>
    );
};

export default AddCardScreen;

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 16,
        padding: 20, justifyContent: "space-between",
        alignSelf: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
        marginTop: 50
    },
    brand: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        alignSelf: "flex-end",
    },
    number: {
        fontSize: 22,
        letterSpacing: 2,
        color: "#fff",
        fontWeight: "600",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    label: {
        fontSize: 10,
        color: "#ddd",
    },
    value: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
    },
    container: {
        padding: 20,
        flex: 1,
        marginTop: 20,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 12,
        paddingHorizontal: 15,
        backgroundColor: '#FAFAFA',
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
    },
    error: {
        color: '#ED0006',
        fontSize: 12,
        marginBottom: 8,
    },
    formikLabel: {
        fontSize: 12,
        color: "#777",
        marginBottom: 4,
        fontWeight: "500",
    },
    formikRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    halfInput: {
        width: "48%",
    },
    btnContainer: {
        alignSelf: "center",
        marginTop: 30,
    }
});