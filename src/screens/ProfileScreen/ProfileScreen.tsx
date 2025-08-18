import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ProfileParamList } from "../BottomTab/MyTabs";
import { useSelector } from "react-redux";

const ProfileScreen: React.FC = () =>
{
  const navigation = useNavigation<NavigationProp<ProfileParamList>>();
  const profile = useSelector((state: any) => state.profile);
  const { firstName, lastName, email } = profile;
  console.log(profile.firstName);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <Image style={{ borderRadius: 360 }}
            resizeMode="contain"
            source={require("../../../assets/images/profile.png")} />

          <View>
            <Text style={{ fontWeight: "700" }}>{firstName} {lastName}</Text>
            <Text>{email}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileSetting")}>
          <Ionicons name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.option}>
          <FontAwesome5 name="map-marker-alt" size={24} color="#B1B5C3" />
          <Text style={styles.optionText}>Address</Text>
          <Entypo style={styles.arrowIcon} name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.lineBreak} />

        <TouchableOpacity style={styles.option}>
          <FontAwesome5 name="credit-card" size={24} color="#B1B5C3" />
          <Text style={styles.optionText}>Payment method</Text>
          <Entypo style={styles.arrowIcon} name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.lineBreak} />

        <TouchableOpacity onPress={() => navigation.navigate("MyOrdersScreen")} style={styles.option}>
          <FontAwesome5 name="ticket-alt" size={24} color="#B1B5C3" />
          <Text style={styles.optionText}>My Orders</Text>
          <Entypo style={styles.arrowIcon} name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.lineBreak} />

        <TouchableOpacity onPress={() => navigation.navigate("WishlistScreen")}
          style={styles.option}>
          <FontAwesome name="heart" size={24} color="#B1B5C3" />
          <Text style={styles.optionText}>My Wishlist</Text>
          <Entypo style={styles.arrowIcon} name="chevron-right" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.lineBreak} />

        <TouchableOpacity onPress={() => navigation.navigate("RateAppScreen")} style={styles.option}>
          <FontAwesome5 name="star" size={24} color="#B1B5C3" />
          <Text style={styles.optionText}>Rate this app</Text>
          <Entypo style={styles.arrowIcon} name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.lineBreak} />

        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}
          style={styles.option}>
          <FontAwesome5 name="sign-out-alt" size={24} color="#B1B5C3" />
          <Text style={styles.optionText}>Log out</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
    marginTop: 40
  },
  cardContainer: {
    borderRadius: 20,
    margin: 18,
    // backgroundColor: '#F3F3F6',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  optionText: {
    fontSize: 18,
    marginLeft: 16,
    color: '#333333',
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  lineBreak: {
    height: 1,
    width: '95%',
    backgroundColor: '#B1B5C3',
    alignSelf: "center"
  },
});
