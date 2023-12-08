import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import CustomButton from './../../components/CustomButton';

const SlidingScreens = () => {
  return (
    <View style={styles.container}>

    <View style={styles.textContainer}>
      <Text style={styles.textStyle}>Discover Something new</Text>
      <Text style={[styles.textStyle,{fontWeight:"500", fontSize:14}]}>Special new arrivals just for you</Text>
    </View>

    <View style={styles.wrapper}>
    <Swiper
          
          activeDotColor="#E7E8E9"
          dotColor='#464447'
          horizontal={true}
          dotStyle={{ borderColor: "white", borderWidth: 1, }}
          loop={true}
          showsPagination={true}
          paginationStyle={{ backgroundColor:"black",    bottom: 10, // Position the pagination dots at the end of the swiper block
    position: 'absolute', // Ensure absolute positioning within the swiper area
    left: 0,
    right: 0,}}
          showsButtons={false}
          autoplay={true}
        >
    <View style={styles.imgContainer}>
      <Image resizeMode='contain' 
      source={require("../../../assets/images/image1.png")}
      style={styles.image}
       />
    </View>
    <View style={styles.imgContainer}>
      <Image resizeMode='contain' 
      source={require("../../../assets/images/image1.png")}
      style={styles.image}
       />
    </View>
    <View style={styles.imgContainer}>
      <Image resizeMode='contain' 
      source={require("../../../assets/images/image1.png")}
      style={styles.image}
       />
    </View>
      </Swiper>
    </View>

      {/* <CustomButton title={"Shopping now"} Width={193} /> */}
    
    
    </View>
  )
}

export default SlidingScreens

const styles = StyleSheet.create({
  container:{
    flex: 1, // This makes the top half take up half of the container
    backgroundColor: 'white',
    alignItems: 'center',
  },
  textContainer:{
    marginTop:130,
  },
  textStyle:{
    fontSize:20,
    textAlign:"center",
    fontWeight:"bold",
    marginVertical: 10,
  },
  wrapper:{
    backgroundColor:"red",
    height:368,
    width:"100%"
  },
  imgContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 480,
    height: 368,
  },
  paginationStyle: {
    top:60
  },
})