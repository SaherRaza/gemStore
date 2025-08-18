import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { HomeParamList } from '../BottomTab/MyTabs';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ScreenHeader from '../../components/ScreenHeader';

interface Props { };

const NotificationScreen: React.FC<Props> = () =>
{
    const navigation = useNavigation<NavigationProp<HomeParamList>>();
    return (
        <View style={styles.container}>
            <ScreenHeader onPress={() => navigation.goBack()} title="Notifications" />
        </View>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
    },
});