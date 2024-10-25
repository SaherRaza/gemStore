import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import CustomButton from '../../components/CustomButton';
import { CartParamList } from '../BottomTab/MyTabs';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import ScreenHeader from '../../components/ScreenHeader';

const CheckOutScreen3 = () =>
{
    const navigation = useNavigation<NavigationProp<CartParamList>>();
    return (
        <View style={styles.container}>

            <ScreenHeader onPress={() => navigation.goBack()} title="Check out" />

            <View style={styles.headerContainer}>
                <View style={styles.progressContainer}>
                    <Ionicons name="location-sharp" size={24} color="black" />
                    <View style={styles.dotsContainer}>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <Ionicons name="card" size={24} color="black" />
                    <View style={styles.dotsContainer}>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <Ionicons name="checkmark-circle" size={24} color="black" />
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <View style={{ marginLeft: 30, marginTop: 50 }}>
                    <Text style={[styles.textStyle, { fontSize: 30, fontWeight: "500" }]}>Order Completed</Text>
                </View>

                <View style={styles.imgContainer}>
                    <Image
                        resizeMode='contain'
                        source={require("../../../assets/images/order.png")} />
                    <View style={styles.textContainer}>
                        <Text style={{ textAlign: "center" }}>Thank you for your purchase.</Text>
                        <Text>You can view your order in ‘My Orders’ section.</Text>
                    </View>

                </View>

                <View style={styles.btnContainer}>
                    <CustomButton onPress={() => ""} title='Continue Shopping' Width={380} />
                </View>
            </View>
        </View>
    );
};

export default CheckOutScreen3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
    },
    textStyle: {
        fontWeight: "bold",
        fontSize: 16,
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 20
    },

    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        gap: 15,
    },
    dot: {
        width: 3,
        height: 3,
        borderRadius: 1.5,
        backgroundColor: '#999',
        marginHorizontal: 1,
    },
    imgContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 120
    },
    textContainer: {
        alignItems: "center",
        marginTop: 30

    },
    btnContainer: {
        alignItems: "center",
        marginTop: 100
    }
});