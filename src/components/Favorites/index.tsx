import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import {  ScrollView, StyleSheet, Text, View } from "react-native";
import FavoriteList from "../FavoriteList";
import { styles } from "./types";

export default function Favorites({ data }) {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={{ justifyContent: "flex-end" }}>
      <Text style={styles.favoriteTitle}>Favorites</Text>
      <ScrollView style={{ marginBottom: tabBarHeight - 40 }}>
        <FavoriteList data={data} />
      </ScrollView>
    </View>
  )
}


