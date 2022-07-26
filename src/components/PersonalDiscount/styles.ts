import { StyleSheet } from "react-native";
import { colors } from "../../../styles/palletes";

export const styles = StyleSheet.create({
    discountSales: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: "600",
      color: colors.WHITE,
    },
    discountInfo: {
      position: "absolute",
      bottom: 8,
      left: 8,
      borderRadius: 16,
      paddingHorizontal: 8,
      paddingVertical: 4,
      backgroundColor: colors.RED,
    },
  });