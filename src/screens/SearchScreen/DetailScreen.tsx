import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SearchParamList } from '../BottomTab/MyTabs';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useState } from 'react';


type Props = NativeStackScreenProps<SearchParamList, "DetailScreen">;

const DetailScreen: React.FC<Props> = () =>
{
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () =>
  {
    setFavorite(!favorite);
  };
  return (
    <SafeAreaView style={styles.container}>

      <View style={{ width: "100%", height: 400 }}>
        <View>
          <Image
            resizeMode='cover'
            source={require("../../../assets/images/blackShirt.jpg")}
            style={{ width: "100%", height: 400 }} />
        </View>
        <View style={styles.headerStyle}>
          <TouchableOpacity
            //onPress={() => navigation.goBack()}
            style={styles.iconStyle}
          >
            <AntDesign name="left" size={18} color="#1E3354" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleFavorite}
            style={styles.iconStyle}
          >
            <AntDesign name="heart"
              size={18} color={favorite ? "red" : "white"} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.midSection}>
        <View style={styles.detailSection}>
          <View>
            <Text style={styles.textStyle}>Sportwear set</Text>
            <Text>Reviews (83)</Text>
          </View>
          <View>
            <Text style={styles.textStyle}>$ 90.00</Text>
          </View>
        </View>
        <View style={styles.lineBreak} />
        <View style={styles.colorSection}>
          <View>
            <Text>Color</Text>
            <View style={styles.colorSectionPosition}>
              <ColorCircle color="black" />
              <ColorCircle color="orange" />
              <ColorCircle color="green" />
            </View>
          </View>
          <View>
            <Text>Size</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerStyle: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
    width: "100%",
    padding: 25
  },
  iconStyle: {
    width: 34,
    height: 34,
    borderRadius: 360,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
  midSection: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, flex: 1,
    marginTop: -40, backgroundColor: "white"
  },
  detailSection: {
    flexDirection: "row", justifyContent: "space-between",
    margin: 25,
    marginTop: 40
  },
  textStyle: {
    fontWeight: "700",
    fontSize: 18
  },
  lineBreak: {
    height: 2,
    width: '85%',
    backgroundColor: '#F3F3F6',
    alignSelf: "center"
  },
  colorSection: {
    margin: 25,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  circleStyle: {
    borderWidth: 2,
    height: 18,
    width: 18,
    borderRadius: 360,
    borderColor: "white"
  },
  colorSectionPosition: {
    flexDirection: "row"
  }
});

const ColorCircle = ({ color }) =>
{
  return (
    <TouchableOpacity style={[styles.circleStyle, { backgroundColor: color }]} />
  );
};