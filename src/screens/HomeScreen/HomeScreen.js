import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons , Foundation} from '@expo/vector-icons';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Image style={styles.iconStyle}
         source={require("../../../assets/images/DrawerIcon.png")}  />
      </TouchableOpacity>
        <Text style={styles.textStyle}>GemStore</Text>
        <TouchableOpacity>
        <View style={styles.circle} />
        <Ionicons name="notifications-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.ProductCategoryBar}>
        <View style={styles.iconContainer}>
        <Ionicons name="female" size={24} color="#9D9D9D" />
        </View>
        <View style={styles.iconContainer}>
        <Ionicons name="md-male-outline" size={24} color="#9D9D9D"  />
        </View>
        <View style={styles.iconContainer}>
        <Ionicons name="ios-glasses-outline" size={24} color="#9D9D9D"  />
        </View>
        <View style={styles.iconContainer}>
        <Ionicons name="female" size={24} color="#9D9D9D"  />
        </View>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
       // margin:20, 
        marginTop:60,
        alignItems:"center",
       // backgroundColor:"red", 
    },
    iconStyle:{
        width:18,
        height:17
    },
    textStyle:{
        fontSize:22,
        fontWeight:"bold"
      },
      circle:{
        height:8, 
        width:8,
        borderRadius:10,
        backgroundColor:"red",
        position:"absolute",
        right:2
      },
      ProductCategoryBar:{
        marginTop:60, 
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"

      },
      iconContainer:{
        width:58,
        height:56,
        borderRadius:360,
        backgroundColor:"#F3F3F3",
        justifyContent:"center",
        alignItems:"center", 
        
      }
})