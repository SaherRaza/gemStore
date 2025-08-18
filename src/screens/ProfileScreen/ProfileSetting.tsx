import { StyleSheet, Text, View, Image, Pressable, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import { ProfileParamList } from '../BottomTab/MyTabs';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Feather from '@expo/vector-icons/Feather';
import CustomButton from '../../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../store/profileSlice';

interface Props { };

const ProfileSetting: React.FC<Props> = () =>
{
    const navigation = useNavigation<NavigationProp<ProfileParamList>>();

    const dispatch = useDispatch();

    const profile = useSelector((state: any) => state.profile);

    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [email, setEmail] = useState(profile.email);
    const [gender, setGender] = useState(profile.gender);
    const [phone, setPhone] = useState(profile.phone);

    const handleSave = () =>
    {
        dispatch(updateProfile({ firstName, lastName, email, gender, phone }));
    };

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
                            value={firstName}
                            style={[styles.input, { width: "40%" }]}
                            placeholder="First Name"
                            onChangeText={setFirstName}
                        />
                        <TextInput
                            style={[styles.input, { width: "40%" }]}
                            placeholder="Last Name"
                            value={lastName}
                            onChangeText={setLastName}
                        />
                    </View>
                    <View style={{
                        flexDirection: "row", justifyContent: "space-around",
                    }}>
                        <TextInput
                            style={[styles.input, { width: "90%" }]}
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={{
                        flexDirection: "row", justifyContent: "space-around",
                    }}>
                        <TextInput
                            style={[styles.input, { width: "30%" }]}
                            placeholder="Gender"
                            value={gender}
                            onChangeText={setGender}
                        />
                        <TextInput
                            style={[styles.input, { width: "50%" }]}
                            placeholder="Phone"
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </View>
                </View>

                <View style={{
                    marginTop: 70, alignItems: "center",
                    justifyContent: "center",
                }}>
                    <CustomButton
                        onPress={handleSave}
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