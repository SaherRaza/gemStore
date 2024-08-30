import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    MyTabs: undefined;
};

const ForgotPasswordScreen = () =>
{

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.iconStyle}
            >
                <AntDesign name="left" size={18} color="#1E3354" />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
                <Text style={styles.smallText}>Enter email associated with your account and we’ll send and email with intructions to reset your password</Text>
            </View>

            <View style={styles.inputContainer}>
                <MaterialIcons name="email" size={20} color="#838383" style={styles.icon} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your email here"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
        </SafeAreaView>
    );
};

export default ForgotPasswordScreen;

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
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#838383', // Set the color you want for the border
        paddingVertical: 5,
        width: "90%",
        alignSelf: "center",
        marginTop: 60
    },
    icon: {
        marginRight: 10, // Space between the icon and TextInput
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
});