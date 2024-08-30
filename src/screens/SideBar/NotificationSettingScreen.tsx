import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const NotificationSettingScreen: React.FC = () =>
{
    const [showNotifications, setShowNotifications] = useState(true);
    const [notificationSounds, setNotificationSounds] = useState(true);
    const [lockScreenNotifications, setLockScreenNotifications] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.optionContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.optionText}>Show notifications</Text>
                    <Text style={styles.subText}>Receive push notifications for new messages</Text>
                </View>
                <Switch
                    value={showNotifications}
                    onValueChange={setShowNotifications}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={showNotifications ? '#ffffff' : '#f4f3f4'}
                />
            </View>

            <View style={styles.optionContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.optionText}>Notification sounds</Text>
                    <Text style={styles.subText}>Play sound for new messages</Text>
                </View>
                <Switch
                    value={notificationSounds}
                    onValueChange={setNotificationSounds}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={notificationSounds ? '#ffffff' : '#f4f3f4'}
                />
            </View>

            <View style={styles.optionContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.optionText}>Lock screen notifications</Text>
                    <Text style={styles.subText}>Allow notification on the lock screen</Text>
                </View>
                <Switch
                    value={lockScreenNotifications}
                    onValueChange={setLockScreenNotifications}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={lockScreenNotifications ? '#ffffff' : '#f4f3f4'}
                />
            </View>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    textContainer: {
        flex: 1,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    subText: {
        fontSize: 14,
        color: '#aaa',
    },
});

export default NotificationSettingScreen;
