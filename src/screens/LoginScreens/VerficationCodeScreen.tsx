import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Keyboard, TextInput, } from 'react-native';
import React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { FC, useEffect, useRef, useState } from 'react';
import AuthFormContainer from '../../components/form/AuthFormContainer';
import AppButton from '../../ui/AppButton';
import AppLink from '../../ui/AppLink';
import OTPField from '../../ui/OTPField';

type RootStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    MyTabs: undefined;
};

interface Props { }

const otpFields = new Array(6).fill('');

const VerificationCodeScreen: FC<Props> = props =>
{
    const [otp, setOtp] = useState([...otpFields]);
    const [activeOtpIndex, setActiveOtpIndex] = useState(0);

    const inputRef = useRef<TextInput>(null);

    const handleChange = (value: string, index: number) =>
    {
        const newOtp = [...otp];

        if (value === 'Backspace')
        {
            // moves to the previous only if the field is empty
            if (!newOtp[index]) setActiveOtpIndex(index - 1);
            newOtp[index] = '';
        } else
        {
            // update otp and move to the next
            setActiveOtpIndex(index + 1);
            newOtp[index] = value;
        }

        setOtp([...newOtp]);
    };

    const handlePaste = (value: string) =>
    {
        if (value.length === 6)
        {
            Keyboard.dismiss();
            const newOtp = value.split('');
            setOtp([...newOtp]);
        }
    };

    const handleSubmit = () =>
    {
        console.log(otp);
    };

    useEffect(() =>
    {
        inputRef.current?.focus();
    }, [activeOtpIndex]);

    return (
        <AuthFormContainer heading="Please look at your email.">
            <View style={styles.inputContainer}>
                {otpFields.map((_, index) =>
                {
                    return (
                        <OTPField
                            ref={activeOtpIndex === index ? inputRef : null}
                            key={index}
                            placeholder="*"
                            onKeyPress={({ nativeEvent }) =>
                            {
                                handleChange(nativeEvent.key, index);
                            }}
                            onChangeText={handlePaste}
                            keyboardType="numeric"
                            value={otp[index] || ''}
                        />
                    );
                })}
            </View>

            <AppButton title="Submit" onPress={handleSubmit} />

            <View style={styles.linkContainer}>
                <AppLink title="Re-send OTP" />
            </View>
        </AuthFormContainer>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    linkContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'flex-end',
    },
});

export default VerificationCodeScreen;
