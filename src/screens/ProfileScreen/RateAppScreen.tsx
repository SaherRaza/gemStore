import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomStarRating from '../../components/CustomStarRating';
import ScreenHeader from '../../components/ScreenHeader';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ProfileParamList } from '../BottomTab/MyTabs';
import { TextInput } from 'react-native-paper';

const RateAppScreen = () =>
{
    const navigation = useNavigation<NavigationProp<ProfileParamList>>();
    const [inputValue, setInputValue] = React.useState('');
    const maxLength = 50;  // Set your character limit here

    return (
        <View style={styles.container}>
            <View>
                <ScreenHeader onPress={() => navigation.goBack()} title='Share your feedback' />
            </View>
            <View style={styles.starContainer}>
                <Text style={styles.textStyle}>What is your opinion of GemStore?</Text>
                <CustomStarRating />
            </View>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    numberOfLines={4}
                    maxLength={maxLength}
                    placeholder="Would you like to write anything about this product?"
                    placeholderTextColor="#C4C4C4"
                    value={inputValue}
                    onChangeText={text => setInputValue(text)}
                />
                <Text style={styles.characterCount}>
                    {`${ inputValue.length }/${ maxLength } characters`}
                </Text>
            </View>
        </View>
    );
};

export default RateAppScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        fontWeight: "600",
        fontSize: 18
    },
    starContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        gap: 15,
        backgroundColor: "orange"
    },
    textInputContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 10,
        backgroundColor: '#F9F9F9',
        margin: 10,
    },
    input: {
        height: 120,
        textAlignVertical: 'top',  // Align text to the top
        color: '#333333',
        padding: 10,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderColor: '#E0E0E0',
        borderWidth: 1,
    },
    characterCount: {
        textAlign: 'right',
        color: '#C4C4C4',
        marginTop: 5,
        fontSize: 12,
    },
});