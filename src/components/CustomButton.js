import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = ({title, Width}) => {
  return (
    <View style={[styles.container,{width:Width}]}>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        height:60,
        borderRadius:45,
        borderColor:"white", 
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: 'grey', // Replace with the actual color code
      //  alignSelf: 'center',
       
    },
    textStyle:{
        color:"white"
      },
    
})