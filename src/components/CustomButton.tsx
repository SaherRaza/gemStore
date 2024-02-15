import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

interface CustomButtonProps
{
  title: string;
  Width: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, Width }) =>
{
  return (
    <TouchableOpacity style={[styles.container, { width: Width }]}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 45,
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'grey', // Replace with the actual color code
    //  alignSelf: 'center',

  },
  textStyle: {
    color: "white"
  },

});