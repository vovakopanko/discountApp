import {  Text, View } from "react-native";
import FavoriteList from "../FavoriteList";
import { styles } from "./types";

export default function Favorites({ data }) {
  return (
    <View style={{ justifyContent: "flex-end", flex: 1 }}>
      <Text style={styles.favoriteTitle}>Favorites</Text>
      <FavoriteList data={data} />
    </View>
  );
}
