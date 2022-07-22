import { Text, View } from "react-native";
import { styles } from "./styles";

export function PersonalDiscount({ discounts }: { discounts: string }) {
  return (
    <View style={styles.discountInfo}>
      <Text style={styles.discountSales}>{discounts}</Text>
    </View>
  );
}
