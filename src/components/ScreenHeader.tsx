import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { AntDesign } from "@expo/vector-icons";

interface Props
{
    title?: string;
    onPress: () => void;
}
const ScreenHeader: FC<Props> = ({ onPress, title }) =>
{
    return (
        <View style={styles.headerStyle}>
            <TouchableOpacity
                onPress={onPress}
                style={styles.iconStyle}
            >
                <AntDesign name="left" size={18} color="#1E3354" />
            </TouchableOpacity>

            {/* Centering the text "Your Cart" */}
            <View style={styles.titleContainer}>
                <Text style={styles.textStyle}>{title}</Text>
            </View>

            {/* Empty View to balance the layout */}
            <View style={styles.emptyView} />
        </View>
    );
};

export default ScreenHeader;

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // Make sure to use space-between
        marginTop: 60,
        margin: 10,
        paddingHorizontal: 20, // Adjust as needed for padding
    },
    iconStyle: {
        width: 32,
        height: 32,
        borderRadius: 360,
        backgroundColor: "white",
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
});