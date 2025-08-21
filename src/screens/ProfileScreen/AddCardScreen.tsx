import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ScreenHeader from '../../components/ScreenHeader';
import { ProfileParamList } from '../BottomTab/MyTabs';
import { cardValidationSchema, setCardHolderName, setCardNumber, setCVV, setExpire } from '../../store/creditCardSlice';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import CustomButton from '../../components/CustomButton';

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
        <View>
            <ScreenHeader onPress={() => navigation.goBack()} title="Add New Card" />

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
                    //navigation.navigate("CheckOutScreen2");
                }
                }
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>
                        <View style={{
                            flex: 1,
                        }}>
                            <TextInput
                                style={[
                                    styles.input,
                                    {
                                        borderColor: touched.cardHolderName && errors.cardHolderName ? '#ED0006' : '#D3D3D3',
                                    },
                                ]}
                                placeholder="Card Holder Name*"
                                onChangeText={handleChange('cardHolderName')}
                                onBlur={handleBlur('cardHolderName')}
                                value={values.cardHolderName}
                            />
                            {touched.cardHolderName && errors.cardHolderName && <Text style={styles.error}>{errors.cardHolderName}</Text>}

                            <TextInput
                                style={[
                                    styles.input,
                                    {
                                        borderColor: touched.cardNumber && errors.cardNumber ? '#ED0006' : '#D3D3D3',
                                    },
                                ]}
                                placeholder="Card Number*"
                                onChangeText={handleChange('cardNumber')}
                                onBlur={handleBlur('cardNumber')}
                                value={values.cardNumber}
                            />
                            {touched.cardNumber && errors.cardNumber && <Text style={styles.error}>{errors.cardNumber}</Text>}



                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <TextInput
                                style={[
                                    styles.input,
                                    {
                                        borderColor: touched.expire && errors.expire ? '#ED0006' : '#D3D3D3',
                                        width: "40%"
                                    },
                                ]}
                                placeholder="Expire*"
                                onChangeText={handleChange('expire')}
                                onBlur={handleBlur('expire')}
                                value={values.expire}
                            />
                            {touched.expire && errors.expire && <Text style={styles.error}>{errors.expire}</Text>}

                            <TextInput
                                style={[
                                    styles.input,
                                    {
                                        borderColor: touched.cvv && errors.cvv ? '#ED0006' : '#D3D3D3',
                                        width: "40%",
                                    },
                                ]}
                                placeholder="CVV*"
                                onChangeText={handleChange('streetName')}
                                onBlur={handleBlur('streetName')}
                                value={values.cvv}
                            />
                            {touched.cvv && errors.cvv && <Text style={styles.error}>{errors.cvv}</Text>}
                        </View>


                        <View style={{ marginTop: 20 }}>
                            <CustomButton
                                title='Add Card' />
                        </View>
                    </>
                )}
            </Formik>
        </View>
    );
};

export default AddCardScreen;

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        marginVertical: 12,
        width: "80%",
        borderRadius: 13,
    },
    error: {
        color: '#ED0006',
    },
});