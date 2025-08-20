import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ScreenHeader from '../../components/ScreenHeader';
import { ProfileParamList } from '../BottomTab/MyTabs';

const AddCardScreen: React.FC = () =>
{
    const navigation = useNavigation<NavigationProp<ProfileParamList>>();
    return (
        <View>
            <ScreenHeader onPress={() => navigation.goBack()} title="Add New Card" />
        </View>
    );
};

export default AddCardScreen;

const styles = StyleSheet.create({});