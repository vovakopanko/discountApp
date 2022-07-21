import { Image, Text, View } from "react-native";
import { images } from "../../constants/images";
import { styles } from "./styles";

export default function ProfileScreen() {
  return (
    <View style={styles.profileBlock}>
      <Text style={styles.fontStyle}>Authorization will appear here soon</Text>
      <Image source={images.COMING_SOON} style={styles.imageSize} />
    </View>
  );
}
