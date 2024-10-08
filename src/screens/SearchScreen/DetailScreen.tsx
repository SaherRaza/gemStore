import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SearchParamList } from '../BottomTab/MyTabs';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useState } from 'react';
import { cartSlice } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/CustomButton';
import { RootState } from '../../store';
import { addToFavorites } from '../../store/favoriteSlice';


type Props = NativeStackScreenProps<SearchParamList, "DetailScreen">;

const DetailScreen: React.FC<Props> = ({ route, navigation }) =>
{
  const dispatch = useDispatch();

  const [favorite, setFavorite] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { product } = route.params;


  const addToCart = () =>
  {
    console.log("Adding to cart: ", product);
    dispatch(cartSlice.actions.addCartItem({ product }));
  };

  const toggleDropdown = () =>
  {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleFavorite = () =>
  {
    dispatch(addToFavorites(product));  // Dispatch the product item
    setFavorite(!favorite);  // Toggle the local favorite state
  };
  return (
    <SafeAreaView style={styles.container}>

      <View style={{ width: "100%", height: 400 }}>
        <View>
          <Image
            resizeMode='cover'
            source={product.image}
            style={{ width: "100%", height: 400 }} />
        </View>
        <View style={styles.headerStyle}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
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
            <Text style={styles.textStyle}>{product.name}</Text>
            <Text>Reviews (83)</Text>
          </View>
          <View>
            <Text style={styles.textStyle}>{product.price}$</Text>
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
          <View style={styles.sizeSectionPosition}>
            <SizeCircle size="S" />
            <SizeCircle size="M" />
            <SizeCircle size="L" />

          </View>
        </View>
        <View style={styles.lineBreak} />
        <View style={styles.descriptionSection}>
          <View>
            <Text>Description</Text>
          </View>
          <TouchableOpacity onPress={toggleDropdown}>
            <AntDesign name={isDropdownOpen ? "up" : "down"} size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.lineBreak} />
        {isDropdownOpen && (
          <View>

            <Text style={styles.descriptionText}>{product.text}
            </Text>
          </View>
        )}

        <View style={styles.btnContainer}>
          <CustomButton onPress={addToCart} title='Add to Cart' Width={380} />
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
  sizeStyle: {
    height: 28,
    width: 28,
    borderRadius: 360,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 3
  },
  colorSectionPosition: {
    flexDirection: "row"
  },
  sizeSectionPosition: {
    flexDirection: "row"
  },
  descriptionSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 25
  },
  descriptionText: {
    margin: 25,
    textAlign: "justify",
    fontSize: 16
  },
  btnContainer: {
    alignSelf: "center",
    position: "absolute",
    bottom: 15,
  }
});

const ColorCircle = ({ color }) =>
{
  return (
    <TouchableOpacity style={[styles.circleStyle, { backgroundColor: color }]} />
  );
};

const SizeCircle = ({ size }) =>
{
  return (
    <TouchableOpacity style={styles.sizeStyle} >
      <Text>{size}</Text>
    </TouchableOpacity>
  );
};