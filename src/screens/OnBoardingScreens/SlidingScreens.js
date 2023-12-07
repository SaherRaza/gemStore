import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SlidingScreens = () => {
  return (
    <View style={styles.container}>

    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>Discover Something new</Text>
      <Text style={[styles.textStyle,{fontWeight:"500", fontSize:14}]}>Special new arrivals just for you</Text>
    </View>
    <View style={styles.imgContainer}>
      <Image resizeMode='contain' 
      source={require("../../../assets/images/image1.png")}
       />
    </View>
    <View style={{flex: 1, // This makes the bottom half take up the other half of the container
    backgroundColor: '#yourColorCode', // Replace with the color code you want
    justifyContent: 'center',
    alignItems: 'center',
    // Add additional styling as needed
    }}>
    </View>
    </View>
  )
}

export default SlidingScreens

const styles = StyleSheet.create({
  container:{
    flex: 1, // This makes the top half take up half of the container
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer:{
    marginTop:130,
    gap:20
  },
  textStyle:{
    fontSize:20,
    textAlign:"center",
    fontWeight:"bold"
  },
  imgContainer:{
    marginTop:50
  }
})