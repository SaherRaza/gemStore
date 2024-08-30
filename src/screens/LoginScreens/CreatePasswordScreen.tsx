import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    MyTabs: undefined;
};

const CreatePasswordScreen = () =>
{
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

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
                <Text style={styles.forgotText}>Create new password</Text>
                <Text style={styles.smallText}>Your new password must be different from previously used password</Text>
            </View>
            <View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        secureTextEntry={!passwordVisible}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                        <MaterialIcons name={passwordVisible ? 'visibility' : 'visibility-off'} size={20} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Confirm Password"
                        secureTextEntry={!confirmPasswordVisible}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
                        <MaterialIcons name={confirmPasswordVisible ? 'visibility' : 'visibility-off'} size={20} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CreatePasswordScreen;

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
        borderBottomColor: '#000', // Set the color for the bottom border
        marginBottom: 20, // Space between the two input fields
        paddingVertical: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
});