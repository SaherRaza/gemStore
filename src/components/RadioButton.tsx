import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";


type Props = {
    deliveryType: String;
    deliveryDays: String;
};

const RadioButton: React.FC<Props> = ({ deliveryType, deliveryDays }) =>
{
    const [current, setCurrent] = useState({
        'option1': "Free",
        'option2': "$ 9.90",
        'option3': "$ 9.90"
    });
    return (
        <View style={styles.container}>
            <RadioButtonGroup
                containerStyle={{ marginBottom: 10, }}
                selected={current}
                onSelected={(value) => setCurrent(value)}
                radioBackground="green"
            >
                <RadioButtonItem
                    label={
                        <View style={{}}>
                            <View style={{ flexDirection: "row", gap: 10 }}>
                                <Text style={{ color: "red" }}>{current.option1}</Text>
                                <Text>{deliveryType}</Text>
                            </View>
                            <Text>{deliveryDays}</Text>
                        </View>
                    }
                />
            </RadioButtonGroup>
            <Text></Text>
        </View>
    );
};

export default RadioButton;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    }
});