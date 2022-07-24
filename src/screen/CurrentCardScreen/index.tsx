import { Image, Text, View } from "react-native";
import { images } from "../../constants/images";
import { MainStackNavigationProps } from "../types";
import { styles } from "./styles";

export function CurrentCard({ route, navigation }: MainStackNavigationProps) {
  const data = route.params.params;
  return (
    <View style={styles.curentImageBlock}>
      <View style={styles.btnBlock}>
        <Text
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.btnText}
        >
          {"<"} Go back
        </Text>
      </View>
      <Image
        source={data.img ? data.img : images.DEFAULT_IMAGE}
        style={styles.imageSize}
      />
      <Text style={styles.cardTitle}>{data.title}</Text>
      <Text>Description</Text>
    </View>
  );
}
