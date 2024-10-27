import
{
    Keyboard, SafeAreaView, StyleSheet,
    Text, TouchableWithoutFeedback, View, TextInput, Modal, TouchableOpacity, Image
} from 'react-native';
import React, { useState } from 'react';
import CustomStarRating from '../../components/CustomStarRating';
import ScreenHeader from '../../components/ScreenHeader';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ProfileParamList } from '../BottomTab/MyTabs';
import CustomButton from '../../components/CustomButton';

const RateAppScreen = () =>
{
    const navigation = useNavigation<NavigationProp<ProfileParamList>>();
    const [inputValue, setInputValue] = React.useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSendFeedback = () =>
    {
        // show modal when button is pressed
        setIsModalVisible(true);
    };

    const closeModal = () =>
    {
        setIsModalVisible(false);
        setInputValue('');  // Reset the input value when modal closes
    };

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
                    <CustomButton title='Send feedback' onPress={handleSendFeedback} />
                </View>

                {/* Modal */}
                <Modal
                    transparent={true}
                    visible={isModalVisible}
                    animationType="slide"
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <Image resizeMode='contain'
                                source={require("../../../assets/images/Check.png")} />
                            <Text style={styles.modalText}>Thank you for your feedback!</Text>
                            <Text style={{ color: "#6E768A", fontSize: 15 }}>We appreciate your feedback. We'll use your feedback to improve your experience.</Text>
                            <CustomButton Width={200} title='Done' onPress={closeModal} />
                        </View>
                    </View>
                </Modal>
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
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '85%',
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 10,
        alignItems: 'center',
        height: "40%",
        gap: 30
    },
    modalText: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
    },
});