import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    MyTabs: undefined;
    ForgotPasswordScreen: undefined;
};
const LoginScreen: React.FC = () =>
{
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>Log into</Text>
                <Text style={styles.textStyle}>your Account</Text>
            </View>

            <View style={{ marginTop: 60 }}>
                <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#A8A8A8" />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#A8A8A8" secureTextEntry={true} />

                <TouchableOpacity onPress={() => navigation.navigate("ForgotPasswordScreen")}>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                <View style={styles.btnContainer}>
                    <CustomButton onPress={() => navigation.navigate("MyTabs")} title='LOG IN' Width={200} />
                </View>
                <Text style={styles.orText}>or log in with</Text>

                <View style={styles.socialIconsContainer}>
                    <TouchableOpacity style={styles.iconButton}>
                        <AntDesign name="apple1" size={24} color="black" />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Image resizeMode='contain' source={require("../../../assets/images/Google.png")} />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <EvilIcons name="sc-facebook" size={24} color="blue" />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}><Text style={styles.loginText}>Sign Up</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textContainer: {
        gap: 20,
        margin: 20,
        marginTop: 60,
    },
    textStyle: {
        fontSize: 26,
        fontWeight: "600",
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#A8A8A8',
        fontSize: 16,
        paddingVertical: 10,
        marginBottom: 30,
        color: '#000',
        width: "90%",
        alignSelf: "center"
    },
    btnContainer: {
        alignSelf: "center",
        marginTop: 40
    },
    orText: {
        color: '#A8A8A8',
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 14,
    },
    socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    iconButton: {
        marginHorizontal: 8,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 360,
        borderWidth: 1,
        borderColor: "grey"
    },
    footerContainer: {
        position: 'absolute',
        bottom: 50, // 50 units from the bottom of the screen
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    footerText: {
        color: '#000',
        textAlign: 'center',
        fontSize: 14,
    },
    loginText: {
        color: '#000',
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
    forgotPassword: {
        color: '#838383',
        textAlign: "right",
        margin: 20,
        fontSize: 12
    }
});