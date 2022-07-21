import { Image, Text, View } from "react-native";
import { colors } from "../../../styles/palletes";
import { images } from "../../constants/images";
import { MainStackNavigationProps } from "../types";

export function CurrentCard({ route }: MainStackNavigationProps) {
  const data = route.params.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 16,
      }}
    >
      <Image
        source={data.img ? data.img : images.DEFAULT_IMAGE}
        style={{
          width: "100%",
          height: "40%",
        }}
      />
      <Text style={{ fontSize: 24, color: colors.BLACK }}>{data.title}</Text>
    </View>
  );
}
