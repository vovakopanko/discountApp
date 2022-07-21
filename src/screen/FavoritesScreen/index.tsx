import { Image, Text, View } from "react-native";
import { images } from "../../constants/images";
import { styles } from "./styles";

export default function FavoritesScreen() {
  return (
    <View style={styles.profileBlock}>
      <Text style={styles.fontStyle}>will appear here soon</Text>
      <Image source={images.COMING_SOON} style={styles.imageSize} />
    </View>
  );
}
