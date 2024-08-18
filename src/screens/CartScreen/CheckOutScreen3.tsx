import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
const CheckOutScreen3 = () =>
{
    return (
        <View style={styles.container}>
            <View style={styles.headerStyle}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.iconStyle}
                >
                    <AntDesign name="left" size={18} color="#1E3354" />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Text style={styles.textStyle}>CheckOut</Text>
                </View>

                {/* Empty View to balance the layout */}
                <View style={styles.emptyView} />
            </View>

            <View style={styles.headerContainer}>
                <View style={styles.progressContainer}>
                    <Ionicons name="location-outline" size={24} color="black" />
                    <View style={styles.dotsContainer}>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <Ionicons name="card-outline" size={24} color="grey" />
                    <View style={styles.dotsContainer}>
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                        <View style={styles.dot} />
                    </View>
                    <Ionicons name="checkmark-circle-outline" size={24} color="grey" />
                </View>
            </View>

            <View style={{ marginLeft: 10, marginTop: 50 }}>
                <Text style={[styles.textStyle, { fontSize: 30, fontWeight: "500" }]}>Order Completed</Text>
            </View>

            <View style={styles.imgContainer}>
                <Image
                    resizeMode='contain'
                    source={require("../../../assets/images/order.png")} />
            </View>
        </View>
    );
};

export default CheckOutScreen3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    headerStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // Make sure to use space-between
        marginTop: 35,
        paddingHorizontal: 20, // Adjust as needed for padding
    },
    iconStyle: {
        width: 32,
        height: 32,
        borderRadius: 360,
        backgroundColor: "#E1E1E1",
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        fontWeight: "bold",
        fontSize: 16,
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center', // Center the text horizontally
    },
    emptyView: {
        width: 32, // This view will be the same size as the iconStyle view
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
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
        marginTop: 40
    }
});