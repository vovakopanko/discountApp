import { StyleSheet } from "react-native";
import { colors } from "../../../styles/palletes";

export const styles = StyleSheet.create({
  favoritesBlock: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  profileBlock: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fontStyle: {
    color: colors.BLACK,
    fontSize: 26,
    fontWeight: "bold",
    paddingBottom: 40,
    textAlign: "center",
    width: "60%",
  },
  imageSize: {
    width: 130,
    height: 154,
  },
});
