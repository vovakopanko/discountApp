import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { EmptyList } from "../../components/EmptyList";
import FavoriteList from "../../components/FavoriteList";
import { getFavoritesData } from "../../redux/selectors";

function Favorites({ data }) {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={{ justifyContent: "flex-end" }}>
      <Text style={styles.favoriteTitle}>Favorites</Text>
      <ScrollView style={{ marginBottom: tabBarHeight - 40 }}>
        <FavoriteList data={data} />
      </ScrollView>
    </View>
  );
}

export default function FavoritesScreen() {
  const [data, setData] = useState([]);
  const favoriteData = useSelector(getFavoritesData);

  useEffect(() => {
    setData(favoriteData);
  }, [favoriteData]);

  return Platform.OS === "ios" ? (
    <View style={{ display: "flex", flex: 1, justifyContent: "center" }}>
      <SafeAreaView>
        {data.length ? (
          <View style={{ height: "100%" }}>
            <Favorites data={data} />
          </View>
        ) : (
          <EmptyList />
        )}
      </SafeAreaView>
    </View>
  ) : data.length ? (
    <Favorites data={data} />
  ) : (
    <EmptyList />
  );
}

const styles = StyleSheet.create({
  favoriteTitle: {
    fontSize: 28,
    lineHeight: 28,
    fontWeight: "800",
    marginHorizontal: 16,
    paddingVertical: 24,
  },
});
