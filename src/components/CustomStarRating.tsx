import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const CustomStarRating = () =>
{
    const [defaultRating, setDefaultRating] = useState(1);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    const starImgCorner = require('../../assets/images/star_corner.png');
    const starImgFilled = require('../../assets/images/star_filled.png');

    const CustomRatingBar = () =>
    {
        return (
            <View style={styles.barStyle}>
                {maxRating.map((item, key) =>
                {
                    return (
                        <TouchableOpacity activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaultRating(item)}
                        >
                            <Image resizeMode="cover"
                                style={styles.starImageStyle}
                                source={
                                    //checks if item is less than or equal to defaultRating
                                    item <= defaultRating ? require('../../assets/images/star_filled.png') :
                                        require('../../assets/images/star_corner.png')
                                }
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    return (
        <View>
            <CustomRatingBar />
            <Text>
                {defaultRating + "/" + maxRating.length}
            </Text>
        </View>
    );
};

export default CustomStarRating;

const styles = StyleSheet.create({

    barStyle: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    starImageStyle: {
        width: 40,
        height: 40,
    }
});