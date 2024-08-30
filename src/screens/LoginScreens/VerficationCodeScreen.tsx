import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    MyTabs: undefined;
};

const VerificationCodeScreen = () =>
{

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                // onPress={() => navigation.goBack()}
                style={styles.iconStyle}
            >
                <AntDesign name="left" size={18} color="#1E3354" />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.forgotText}>Verification code</Text>
                <Text style={styles.smallText}>Please enter the verification code we sent to your email address</Text>
            </View>
        </SafeAreaView>
    );
};

export default VerificationCodeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    iconStyle: {
        width: 32,
        height: 32,
        borderRadius: 360,
        backgroundColor: "#E1E1E1",
        alignItems: "center",
        justifyContent: "center",
        margin: 25
    },
    textContainer: {
        margin: 25,
    },
    forgotText: {
        fontSize: 30,
        fontWeight: "400"
    },
    smallText: {
        fontSize: 15,
        textAlign: "left",
        lineHeight: 25,
        marginVertical: 15,
        color: "#838383",
    }
});