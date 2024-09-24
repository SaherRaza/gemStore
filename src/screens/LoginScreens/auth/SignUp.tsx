import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { FC, useState } from 'react';
import colors from '@utils/color';
import { Formik } from 'formik';
import AuthInputField from '@components/form/AuthInputField';
import * as yup from 'yup';
import Form from '@components/form';
import SubmitBtn from '@components/form/SubmitBtn';
import PasswordVisibilityIcon from '@ui/PasswordVisibilityIcon';
import AppLink from '@ui/AppLink';
import CircleUi from '@ui/CircleUi';
import AuthFormContainer from '@components/form/AuthFormContainer';

interface Props { }

const signupSchema = yup.object({
    name: yup.string().trim('Name is missing').min(3, 'Invalid Name!').required('Name is required'),
    email: yup.string().trim('Email is missing').email('Invalid email').required('Email is required'),
    password: yup.string().trim('Password is missing').min(8, 'Password is too short!')
        .matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#\$%\^&\*])[a-zA-Z\d!@#\$%\^&\*]+$/, "password is too simple").
        required('Password is required'),
});

const initialValues = {
    name: '',
    email: '',
    password: '',
};
const SignUp: FC<Props> = () =>
{
    const [secureEntry, setSecureEntry] = useState(true);

    const togglePasswordView = () =>
    {
        setSecureEntry(!secureEntry);
    };
    return (
        <AuthFormContainer heading='Welcome'
            subHeading='lets get started by creating your account'
        >
            <Form
                onSubmit={values =>
                {
                    console.log(values);
                }}
                initialValues={initialValues}
                validationSchema={signupSchema}>
                <View style={styles.formContainer}>
                    <AuthInputField
                        name='name'
                        label='Name'
                        placeholder='saher'
                        containerStyle={styles.marginBottom}
                    />
                    <AuthInputField
                        name='email'
                        label='Email'
                        placeholder='saher@gmail.com'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        containerStyle={styles.marginBottom}
                    />
                    <AuthInputField
                        name='password'
                        label='Password'
                        placeholder='password'
                        keyboardType='email-address'
                        secureTextEntry={secureEntry}
                        containerStyle={styles.marginBottom}
                        rightIcon={<PasswordVisibilityIcon privateIcon={secureEntry} />}
                        onRightIconPress={togglePasswordView}
                    />
                    <SubmitBtn title='Sign up' />
                    <View style={styles.linkContainer}>
                        <AppLink title='I lost my password' />
                        <AppLink title='Sign In' />
                    </View>
                </View>
            </Form>
        </AuthFormContainer>
    );
};

export default SignUp;

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