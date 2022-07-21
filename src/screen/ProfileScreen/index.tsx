import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { images } from "../../constants/images";
import { getProfileData } from "../../redux/selectors";
import { styles } from "./styles";

export default function ProfileScreen() {
  const data = useSelector(getProfileData)
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
