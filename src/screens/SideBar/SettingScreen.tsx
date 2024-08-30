import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SettingScreen: React.FC = () =>
{
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.optionContainer}>
                <Image source={require('../../../assets/icons/language.png')} style={styles.icon} />
                <Text style={styles.optionText}>Language</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionContainer}>
                <Image source={require('../../../assets/icons/notification.png')} style={styles.icon} />
                <Text style={styles.optionText}>Notification</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionContainer}>
                <Image source={require('../../../assets/icons/terms.png')} style={styles.icon} />
                <Text style={styles.optionText}>Terms of Use</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionContainer}>
                <Image source={require('../../../assets/icons/privacy.png')} style={styles.icon} />
                <Text style={styles.optionText}>Privacy Policy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionContainer}>
                <Image source={require('../../../assets/icons/chat.png')} style={styles.icon} />
                <Text style={styles.optionText}>Chat Support</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 15,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
});

export default SettingScreen;
