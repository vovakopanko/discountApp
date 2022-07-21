import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { images } from "../../constants/images";
import { getFavoritesData } from "../../redux/selectors";
import { styles } from "./styles";

export default function FavoritesScreen() {
  const data = useSelector(getFavoritesData)
  return (
    <View style={styles.profileBlock}>
      <Text
        style={styles.fontStyle}
      >
        {data.name} will appear here soon
      </Text>
      <Image
        source={images.COMING_SOON}
        style={styles.imageSize}
      />
    </View>
  );
}
