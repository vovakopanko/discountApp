import { colors } from './../../../styles/palletes/index';
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  curentImageBlock: {
    // flex: 1,
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  cardTitle: {
    fontSize: 24,
    color: colors.BLACK,
    fontWeight: "800",
    paddingTop: 20,
  },
  imageSize: {
    width: 304,
    height: 170,
    borderRadius: 25,
  },
  btnBlock: {
    alignSelf: "flex-start",
    position: "absolute",
    top: 40,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  btnText: {
    fontSize: 16,
    textAlign: "left",
  },
});
