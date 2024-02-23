import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SearchParamList } from '../BottomTab/MyTabs';

type Props = NativeStackScreenProps<SearchParamList, "DetailScreen">;

const DetailScreen: React.FC<Props> = () =>
{
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});