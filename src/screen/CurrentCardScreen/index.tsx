import { Image, Text, View } from "react-native";
import { colors } from "../../../styles/palletes";
import { images } from "../../constants/images";
import { MainStackNavigationProps } from "../types";
import { styles } from "./styles";

export function CurrentCard({ route }: MainStackNavigationProps) {
  const data = route.params.params;
  return (
    <View style={styles.curentImageBlock}>
      <Image
        source={data.img ? data.img : images.DEFAULT_IMAGE}
        style={styles.imageSize}
      />
      <Text style={{ fontSize: 24, color: colors.BLACK }}>{data.title}</Text>
    </View>
  );
}
