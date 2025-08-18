import { StyleSheet, Text, View, Image, Pressable, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import { ProfileParamList } from '../BottomTab/MyTabs';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import CustomButton from '../../components/CustomButton';

interface Props { };

const ProfileSetting: React.FC<Props> = () =>
{
    const navigation = useNavigation<NavigationProp<ProfileParamList>>();
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={styles.container}>
            <View>
                <ScreenHeader onPress={() => navigation.goBack()} title="Profile Setting" />
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.imgStyle}
                        resizeMode='contain'
                        source={require("../../../assets/images/profile.png")} />
                    <Pressable style={styles.iconPosition}>
                        <Feather name="camera" size={18} color="white" />
                    </Pressable>
                </View>

                <View style={{ padding: 10 }}>
                    <View style={{
                        flexDirection: "row", justifyContent: "space-around",
                    }}>
                        <TextInput
                            style={[styles.input, { width: "40%" }]}
                            placeholder="First Name"
                        />
                        <TextInput
                            style={[styles.input, { width: "40%" }]}
                            placeholder="Last Name"
                        />
                    </View>
                    <View style={{
                        flexDirection: "row", justifyContent: "space-around",
                    }}>
                        <TextInput
                            style={[styles.input, { width: "90%" }]}
                            placeholder="Email"
                        />
                    </View>
                    <View style={{
                        flexDirection: "row", justifyContent: "space-around",
                    }}>
                        <TextInput
                            style={[styles.input, { width: "30%" }]}
                            placeholder="Gender"
                        />
                        <TextInput
                            style={[styles.input, { width: "50%" }]}
                            placeholder="Phone"
                        />
                    </View>
                </View>

                <View style={{
                    marginTop: 70, alignItems: "center",
                    justifyContent: "center",
                }}>
                    <CustomButton
                        color="#343434"
                        title='Save Change'
                        Width={203} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    imgStyle: {
        width: 108,
        height: 108,
        borderRadius: 360,
    },
    iconPosition: {
        width: 42,
        height: 42,
        backgroundColor: "#43484B",
        borderRadius: 360,
        alignItems: "center",
        justifyContent: "center",
        top: -30,
        left: 30

    },
    input: {
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginVertical: 12
    },
});

export default ProfileSetting;