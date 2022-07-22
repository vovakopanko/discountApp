import { StyleSheet } from "react-native";
import { colors } from "../../../styles/palletes";

export const styles = StyleSheet.create({
  favoritesBlock: {
    justifyContent: "center",
    alignItems: "center",
  },
  favoritesWrapper: {
    position: "absolute",
    bottom: 60,
    left: 40,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: colors.RED,
    zIndex: 5,
  },
  favoritesTitle: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
    color: colors.WHITE,
  },
  selectedBtn: {
    position: "absolute",
    right: 40,
    top: 10,
    backgroundColor: colors.WHITE,
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },

  imageSize: {
    width: 343,
    height: 193,
    borderRadius: 12,
  },
  titleBlock: {
    display: "flex",
    alignSelf: "flex-start",
  },
  cardTitle: {
    fontSize: 16,
    color: colors.BLACK,
    lineHeight: 20,
    fontWeight: "700",
    textAlign: "left",
    paddingVertical: 16,
    paddingLeft: 24,
  },
});
