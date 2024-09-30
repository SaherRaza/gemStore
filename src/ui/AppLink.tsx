import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import colors from '../@utils/colors';

interface Props
{
    title: string;
    onPress?(): void;
}

const AppLink: FC<Props> = ({ title, onPress }) =>
{
    return (
        <Pressable onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
};

export default AppLink;

const styles = StyleSheet.create({
    title: {
        color: colors.SECONDARY
    }
});