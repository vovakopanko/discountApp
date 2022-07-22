import { StyleSheet } from "react-native";
import { colors } from "../../../styles/palletes";

export const styles = StyleSheet.create({
  favoritesBlock: {
    justifyContent: "center",
    alignItems: "center",
  },
  patternBlock: {
    width: 212,
    height: 120,
    borderRadius: 7.43,
    backgroundColor: colors.GRAY,
  },
  patternBlock2: {
    display: "flex",
    justifyContent: "flex-start",
  },
  description: {
    color: colors.LIGHT_GRAY,
    fontSize: 16,
    textAlign: "center",
    width: "80%",
  },
  blockIcon: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: colors.LIGHT_BLUE,
    width: 35,
    height: 35,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyles: {
    position: "absolute",
    left: "40%",
    top: "40%",
  },
  block3: {
    width: 150,
    height: 7,
    borderRadius: 100,
    marginTop: 2.48,
    backgroundColor: colors.GRAY,
  },
  block2: {
    width: 212,
    height: 7,
    borderRadius: 100,
    marginTop: 2.48,
    backgroundColor: colors.GRAY,
  },
  block1: {
    width: 102,
    height: 13,
    borderRadius: 100,
    marginTop: 10,
    backgroundColor: colors.GRAY,
  },

  title: {
    color: colors.BLACK,
    fontSize: 26,
    fontWeight: "bold",
    paddingTop: 36.14,
    paddingBottom: 12,
    textAlign: "center",
  },
});
