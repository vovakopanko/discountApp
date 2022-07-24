import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    paddingRight: 10,
  },
  imageSize: {
    width: "auto",
    height: 120,
    borderRadius: 16,
    paddingHorizontal: 20,
  },
  subTitleBlock: {
    flexDirection: "row",
    maxWidth: 225,
  },
  subTitleNewItemBlock: {
    position: "absolute",
    top: 6,
    left: 6,
  },
  subTitle: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
    paddingTop: 5,
  },
});
