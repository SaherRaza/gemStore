import { FlatList, StyleSheet, Switch, Text, View } from 'react-native';
import React, { useState } from 'react';
import { HomeParamList } from '../BottomTab/MyTabs';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ScreenHeader from '../../components/ScreenHeader';

interface Setting
{
    id: string;
    title: string;
    subtitle: string;
};

const settingData: Setting[] = [
    {
        id: "1",
        title: "Show notifications",
        subtitle: "Receive push notifications for new messages",
    },
    {
        id: "2",
        title: "Notification sounds",
        subtitle: "Play sound for new messages",
    },
    {
        id: "3",
        title: "Lock screen notifications",
        subtitle: "Allow notification on the lock screen",
    },
];



const NotificationSetting: React.FC = () =>
{
    const navigation = useNavigation<NavigationProp<HomeParamList>>();

    const [switchValues, setSwitchValues] = useState<{ [key: string]: boolean; }>({
        "1": true,
        "2": false,
        "3": false
    });

    const toggleSwitch = (id: string) =>
    {
        setSwitchValues((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const renderItem = ({ item }: { item: Setting; }) => (
        <View style={styles.settingContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
            <Switch
                value={switchValues[item.id]}
                onValueChange={() => toggleSwitch(item.id)}
                trackColor={{ false: "#ccc", true: "#508A7B" }} // track color
                thumbColor="#fff" // knob color
            />
        </View>
    );


    return (
        <View style={styles.container}>
            <ScreenHeader onPress={() => navigation.goBack()} title="Notification Setting" />
            <FlatList
                data={settingData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
                contentContainerStyle={{ padding: 25 }}
            />
        </View>
    );
};

export default NotificationSetting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
    },
    settingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        flex: 1,
        paddingRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#000",
    },
    subtitle: {
        fontSize: 14,
        color: "#444",
        marginTop: 2,
    },
});