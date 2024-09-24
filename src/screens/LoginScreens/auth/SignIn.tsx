import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FC, useState } from 'react';
import AuthInputField from '@components/form/AuthInputField';
import * as yup from 'yup';
import Form from '@components/form';
import SubmitBtn from '@components/form/SubmitBtn';
import PasswordVisibilityIcon from '@ui/PasswordVisibilityIcon';
import AppLink from '@ui/AppLink';
import AuthFormContainer from '@components/form/AuthFormContainer';

interface Props { }

const signInSchema = yup.object({
    email: yup.string().trim('Email is missing').email('Invalid email').required('Email is required'),
    password: yup.string().trim('Password is missing').min(8, 'Password is too short!').
        required('Password is required'),
});

const initialValues = {
    email: '',
    password: '',
};
const SignIn: FC<Props> = () =>
{
    const [secureEntry, setSecureEntry] = useState(true);

    const togglePasswordView = () =>
    {
        setSecureEntry(!secureEntry);
    };
    return (
        <AuthFormContainer heading='Welcome Back'>
            <Form
                onSubmit={values =>
                {
                    console.log(values);
                }}
                initialValues={initialValues}
                validationSchema={signInSchema}>
                <View style={styles.formContainer}>
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
                    <SubmitBtn title='Sign In' />
                    <View style={styles.linkContainer}>
                        <AppLink title='I lost my password' />
                        <AppLink title='Sign Up' />
                    </View>
                </View>
            </Form>
        </AuthFormContainer>
    );
};

export default SignIn;

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