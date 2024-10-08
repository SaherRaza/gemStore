import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
type RootStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
};
const SignUpScreen: React.FC = () =>
{
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>Create</Text>
                <Text style={styles.textStyle}>your Account</Text>
            </View>

            <View>
                <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#A8A8A8" />
                <TextInput style={styles.input} placeholder="Email address" placeholderTextColor="#A8A8A8" />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#A8A8A8" secureTextEntry={true} />
                <TextInput style={styles.input} placeholder="Confirm password" placeholderTextColor="#A8A8A8" secureTextEntry={true} />

                <View style={styles.btnContainer}>
                    <CustomButton onPress={() => navigation.navigate("LoginScreen")} title='SIGN UP' Width={200} />
                </View>
                <Text style={styles.orText}>or sign up with</Text>

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
                <Text style={styles.footerText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}><Text style={styles.loginText}>Log In</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default SignUpScreen;

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
});