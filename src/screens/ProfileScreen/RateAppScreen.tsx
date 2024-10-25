import { Keyboard, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View, TextInput } from 'react-native';
import React from 'react';
import CustomStarRating from '../../components/CustomStarRating';
import ScreenHeader from '../../components/ScreenHeader';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ProfileParamList } from '../BottomTab/MyTabs';
import CustomButton from '../../components/CustomButton';

const RateAppScreen = () =>
{
    const navigation = useNavigation<NavigationProp<ProfileParamList>>();
    const [inputValue, setInputValue] = React.useState('');
    const maxLength = 50;  // Set your character limit here

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.container}>
            <View>
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
                <View style={{ margin: 30 }}>
                    <CustomButton title='Send feedback' onPress={() => ""} />
                </View>
            </View>
        </TouchableWithoutFeedback>
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
    },
    textInputContainer: {
        borderRadius: 20,
        margin: 25,
        height: 279,
        marginTop: 40
    },
    input: {
        height: 279,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 20
    },
    characterCount: {
        textAlign: 'right',
        color: '#C4C4C4',
        marginTop: -35,
        fontSize: 12,
        padding: 10
    },
});