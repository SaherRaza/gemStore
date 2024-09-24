import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { FC, useState } from 'react';
import AuthInputField from '@components/form/AuthInputField';
import * as yup from 'yup';
import Form from '@components/form';
import SubmitBtn from '@components/form/SubmitBtn';
import PasswordVisibilityIcon from '@ui/PasswordVisibilityIcon';
import AppLink from '@ui/AppLink';
import AuthFormContainer from '@components/form/AuthFormContainer';

interface Props { }

const lostPasswordSchema = yup.object({
    email: yup.string().trim('Email is missing').email('Invalid email').required('Email is required'),
});

const initialValues = {
    email: '',
};
const LostPassword: FC<Props> = () =>
{
    return (
        <AuthFormContainer heading='Forget Password'
            subHeading="Oops, did you forget your password?
        don't worry we'll help you get back in. "
        >
            <Form
                onSubmit={values =>
                {
                    console.log(values);
                }}
                initialValues={initialValues}
                validationSchema={lostPasswordSchema}>
                <View style={styles.formContainer}>
                    <AuthInputField
                        name='email'
                        label='Email'
                        placeholder='saher@gmail.com'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        containerStyle={styles.marginBottom}
                    />
                    <SubmitBtn title='Submit' />
                    <View style={styles.linkContainer}>
                        <AppLink title='Sign In' />
                        <AppLink title='Sign Up' />
                    </View>
                </View>
            </Form>
        </AuthFormContainer>
    );
};

export default LostPassword;

const styles = StyleSheet.create({
    formContainer: {
        width: "100%",
    },
    marginBottom: {
        marginBottom: 20
    },
    linkContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    }
});