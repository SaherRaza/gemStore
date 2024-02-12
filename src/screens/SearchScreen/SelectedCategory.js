import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const SelectedCategory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <TouchableOpacity style={styles.iconStyle}>
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
            Dresses
          </Text>
        </View>
      </View>

      <View style={styles.filterIconContainer}>
        <View>
          <Text style={styles.textStyle}>Found 124 results</Text>
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

      <TouchableWithoutFeedback style={styles.cardCategory}>
        <Text>hh</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SelectedCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    marginLeft: 40,
  },
  iconStyle: {
    width: 36,
    height: 36,
    borderRadius: 360,
    backgroundColor: "white",
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
    borderColor: "#E5E5E5",
    width: 97,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
