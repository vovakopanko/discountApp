import { StyleSheet } from "react-native";
import { colors } from "../../../styles/palletes";

export const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.GRAY,
    opacity: 0.97,
    borderTopWidth: 0,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    fontSize: 12,
    fontWeight: 600
  }
});
