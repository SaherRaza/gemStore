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
import React, { useEffect } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SearchParamList } from "../BottomTab/MyTabs";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../../store/productSlice";
import ScreenHeader from "../../components/ScreenHeader";
import CustomStarRating from "../../components/CustomStarRating";


type Props = NativeStackScreenProps<SearchParamList, "SelectedCategory">;

const SelectedCategory: React.FC<Props> = ({ route, navigation }) =>
{
  const dispatch = useDispatch();
  // const navigation = useNavigation<NativeStackScreenProps<SearchParamList>>(); // not needed

  // Access filtered products from Redux store
  const filteredProducts = useSelector((state: RootState) => state.products.filteredProducts);
  const filteredCount = useSelector((state: RootState) => state.products.filteredCount);


  const selectedProduct = useSelector((state: RootState) => state.products.selectedProduct);

  const handleProductSelect = (productId: string) =>
  {
    // Dispatch the action to select the product
    dispatch(setSelectedProduct(productId));
  };


  useEffect(() =>
  {
    if (selectedProduct)
    {
      // Navigate to product details screen when product is selected
      navigation.navigate('DetailScreen', { product: selectedProduct });
    }
  }, [selectedProduct, navigation]);


  const { category } = route.params;
  console.log(category);

  return (
    <View style={styles.container}>
      <ScreenHeader onPress={() => navigation.goBack()} title={category} />


      <View style={styles.filterIconContainer}>
        <View>
          <Text style={styles.textStyle}>Found</Text>
          <Text style={styles.textStyle}>{filteredCount} results</Text>
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
                onPress={() => handleProductSelect(item.id)}
              >
                <View style={styles.card}>
                  <View>
                    <Image
                      resizeMode="cover"
                      source={item.image}
                      style={styles.image}
                    />
                  </View>
                  <Text style={styles.type}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}$</Text>
                  <View style={styles.ratingContainer}>
                    {/* <Text style={styles.rating}>
                    {"⭐️".repeat(Math.floor(item.rating))}
                  </Text> */}
                    {renderStars()}

                    <Text style={styles.reviewCount}>{renderStars().length}</Text>
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
    backgroundColor: "#f1f1f1"
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
  row: {
    flex: 1,
    justifyContent: "space-around",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#f1f1f1",
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

