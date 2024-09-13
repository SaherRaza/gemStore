import
{
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SearchParamList } from "../BottomTab/MyTabs";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../store";
import { useSelector } from "react-redux";


type Props = NativeStackScreenProps<SearchParamList, "SelectedCategory">;

const SelectedCategory: React.FC<Props> = ({ route }) =>
{
  const navigation = useNavigation<NativeStackScreenProps<SearchParamList>>();
  // Access filtered products from Redux store
  const filteredProducts = useSelector((state: RootState) => state.products.filteredProducts);

  const { category } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconStyle}
        >
          <AntDesign name="left" size={18} color="#1E3354" />
        </TouchableOpacity>
        <View>
          <Text
            style={[
              styles.textStyle,
              {
                marginLeft: 26,
              },
            ]}
          >
            {category}
          </Text>
        </View>
      </View>

      <View style={styles.filterIconContainer}>
        <View>
          <Text style={styles.textStyle}>Found</Text>
          <Text style={styles.textStyle}>124 results</Text>
        </View>
        <TouchableOpacity style={styles.filterIcon}>
          <Text>Filter</Text>
          <AntDesign
            style={{ marginLeft: 8 }}
            name="caretdown"
            size={12}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={filteredProducts}
          showsVerticalScrollIndicator={false}
          inverted
          keyExtractor={(item) => item.id}
          numColumns={2} // To display two columns
          columnWrapperStyle={styles.row} // Styles for the row wrapper
          renderItem={({ item }) =>
          {
            // Function to render the stars based on the rating
            const renderStars = () =>
            {
              const stars = [];
              const floorRating = Math.floor(1);
              for (let i = 0; i < 5; i++)
              {
                stars.push(
                  <FontAwesome
                    key={i}
                    name={i < floorRating ? "star" : "star-o"}
                    size={14}
                    color={i < floorRating ? "#508A7B" : "#508A7B"}
                  />
                );
              }
              return stars;
            };
            return (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("DetailScreen")}
              >
                <View style={styles.card}>
                  <View>
                    <Image
                      resizeMode="cover"
                      source={item.image}
                      style={styles.image}
                    />
                    <TouchableOpacity style={styles.iconPosition}>
                      <AntDesign name="heart" size={16} color="grey" />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.type}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}$</Text>
                  <View style={styles.ratingContainer}>
                    {/* <Text style={styles.rating}>
                    {"⭐️".repeat(Math.floor(item.rating))}
                  </Text> */}
                    {renderStars()}
                    <Text style={styles.reviewCount}>10</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
    </View>
  );
};

export default SelectedCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    marginLeft: 40,
  },
  iconStyle: {
    width: 32,
    height: 32,
    borderRadius: 360,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  filterIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 40,
  },
  filterIcon: {
    flexDirection: "row",
    borderWidth: 1.5,
    borderColor: "grey",
    width: 97,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    backgroundColor: "white",
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    width: "45%", // Approximately 45% for each item to fit two in a row with some space in between
    // alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  iconPosition: {
    position: "absolute",
    marginTop: 8,
    right: 8,
    width: 27,
    height: 27,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 360,
  },
  type: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    color: "gold",
  },
  reviewCount: {
    fontSize: 14,
    color: "grey",
    marginLeft: 5,
  },
});

// import
// {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   FlatList,
//   Dimensions,
//   useWindowDimensions,
//   ScrollView,
//   Pressable
// } from "react-native";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { cartSlice } from "../../store/cartSlice";
// import { SearchParamList } from "../BottomTab/MyTabs";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";

// type Props = NativeStackScreenProps<SearchParamList, "SelectedCategory">;


// const SelectedCategory: React.FC<Props> = () =>
// {

//   const product = useSelector((state) => state.products.selectedProduct);
//   const dispatch = useDispatch();

//   // const product = products[0];
//   const { width } = useWindowDimensions();

//   const addToCart = () =>
//   {
//     dispatch(cartSlice.actions.addCartItem({ product: product }));
//   };
//   return (
//     <View>
//       <ScrollView>
//         <FlatList
//           data={product.image}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           pagingEnabled
//           renderItem={({ item }) => (
//             <Image
//               source={{ uri: item }}
//               style={{ width: width, aspectRatio: 1 }}
//             />
//           )}
//         />

//         <View style={{ padding: 20 }}>
//           <Text style={styles.title}>{product.name}</Text>

//           <Text style={styles.price}>${product.price}</Text>

//           <Text style={styles.description}>{product.description}</Text>
//         </View>
//       </ScrollView>

//       <Pressable onPress={addToCart} style={styles.button}>
//         <Text style={styles.buttonText}>Add to Cart</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default SelectedCategory;

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 34,
//     fontWeight: "500",
//     marginVertical: 10
//   },
//   price: {
//     fontWeight: "500",
//     fontSize: 16,
//     letterSpacing: 1.5
//   },
//   description: {
//     marginVertical: 10,
//     fontSize: 18,
//     lineHeight: 30,
//     fontWeight: "300"
//   },
//   button: {
//     position: "absolute",
//     bottom: 30,
//     backgroundColor: "black",
//     alignSelf: "center",
//     width: "90%",
//     padding: 20,
//     borderRadius: 100,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "500",
//     fontSize: 16
//   }
// });

