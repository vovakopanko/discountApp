import { Text, View } from "react-native";
import { Camera, Heart } from "../../../assets/svg";
import { styles } from "./styles";

export function EmptyList() {
  return (
      <View style={styles.favoritesBlock}>
        <View style={styles.patternBlock}>
          <View style={styles.blockIcon}>
            <Heart />
          </View>
          <View style={styles.iconStyles}>
            <Camera />
          </View>
        </View>
        <View style={styles.patternBlock2}>
          <View style={styles.block1} />
          <View style={styles.block2} />
          <View style={styles.block3} />
        </View>
        <Text style={styles.title}>No favorites</Text>
        <Text onPress={() => {}} style={styles.description}>
          To add your favorite discounts, just click on the {<Heart />} icon in
          the card
        </Text>
      </View>
  );
}
