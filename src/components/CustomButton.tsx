import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

interface CustomButtonProps
{
  title: string;
  Width?: number;
  onPress: () => void;
  disabled?: boolean;
  color?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, Width, onPress, disabled, color }) =>
{
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.container, { width: Width, backgroundColor: color || '#2D201C' }]}>
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
    backgroundColor: '#2D201C', // Replace with the actual color code
    //  alignSelf: 'center',

  },
  textStyle: {
    color: "white"
  },

});