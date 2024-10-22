import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { memo, useState } from 'react';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

type Props = {
};


const RadioButton: React.FC<Props> = memo(({ }) =>
{
    const [current, setCurrent] = useState("option1"); // Initialize selected option

    const options = [
        { id: "option1", price: "Free", deliveryType: "Delivery to home", deliveryDays: "Delivery from 3 to 7 business days" },
        { id: "option2", price: "$ 9.90", deliveryType: "Delivery to home", deliveryDays: "Delivery from 4 to 6 business days" },
        { id: "option3", price: "$ 10.90", deliveryType: "Fast Delivery", deliveryDays: "Delivery from 2 to 3 business days" },
    ];

    return (
        <View style={styles.container}>
            <RadioButtonGroup
                containerStyle={{ marginBottom: 10 }}
                selected={current} // Set the currently selected value
                onSelected={(value: string) => setCurrent(value)} // Update selected value
                radioBackground='#508A7B'
            >
                {options.map((option) => (
                    <RadioButtonItem
                        key={option.id} // Unique key for each radio button
                        value={option.id} // Set the unique value for the item
                        label={
                            <View key={option.id} style={styles.radioOption}>
                                <View style={{ flexDirection: "row", gap: 10 }}>
                                    <Text style={{ fontSize: 16 }}>{option.price}</Text>
                                    <Text style={{ fontSize: 16, fontWeight: "500", color: "grey" }}>{option.deliveryType}</Text>
                                </View>
                                <Text style={{ color: "#898989" }}>{option.deliveryDays}</Text>
                            </View>
                        }
                    />

                ))}
            </RadioButtonGroup>
        </View>
    );
});

export default RadioButton;

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    radioOption: {
        padding: 10,
        flex: 1,
        gap: 8,
    },
    selectedOption: {
        backgroundColor: "#898989", // Change to selected background color
    }
});


// import React, { useState, useEffect } from 'react';
// import { View, TextInput } from 'react-native';
// import { debounce } from 'lodash';

// const DebouncedInput = () =>
// {
//     const [inputValue, setInputValue] = useState('');
//     const [debouncedValue, setDebouncedValue] = useState('');

//     // Debounce the state update
//     const updateValue = debounce((value) =>
//     {
//         setDebouncedValue(value);
//     }, 300); // Wait for 300ms

//     useEffect(() =>
//     {
//         updateValue(inputValue);
//         return () =>
//         {
//             updateValue.cancel(); // Cleanup on unmount
//         };
//     }, [inputValue]);

//     return (
//         <View>
//             <TextInput
//                 value={inputValue}
//                 onChangeText={setInputValue} // Fewer state updates
//             />
//         </View>
//     );
// };
