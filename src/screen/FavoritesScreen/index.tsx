import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { EmptyList } from "../../components/EmptyList";
import Favorites from "../../components/Favorites";
import { getFavoritesData } from "../../redux/selectors";
import { styles } from "./styles";

export default function FavoritesScreen() {
  const [data, setData] = useState([]);
  const favoriteData = useSelector(getFavoritesData);

  useEffect(() => {
    setData(favoriteData);
  }, [favoriteData]);

  return Platform.OS === "ios" ? (
    <View style={styles.favoritesBlock}>
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
