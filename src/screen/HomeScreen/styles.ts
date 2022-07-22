import { StyleSheet } from "react-native";
import { colors } from "../../../styles/palletes";

export const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "#f5f5f5",
  },
  carouselArea: {
    position: "absolute",
    top: 0,
    height: 100,
    width: "100%",
  },
  headerCategoryTitle: {
    textAlign: "center",
    fontSize: 14,
    padding: 12,
    fontWeight: "600",
  },
  border: {
    height: 50,
  },
  title: {
    fontSize: 26,
    textAlign: "center",
  },
  categoryHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 24,
  },
  categoryItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 8,
    borderRadius: 12,
    backgroundColor: colors.GRAY,
  },
  btnShowAll: {
    color: colors.BLUE,
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "600",
    fontStyle: "normal",
    paddingRight: 20,
  },
  discountSales: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
    color: colors.WHITE,
  },
  contentBlock: {
    marginHorizontal: 16,
  },
  imageSize: {
    width: "auto",
    height: 120,
    borderRadius: 16,
    paddingHorizontal: 20,
  },
  wrapper: {
    paddingRight: 10,
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
  favoritesIcon: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: colors.WHITE,
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  subTitleBlock: {
    flexDirection: "row",
    maxWidth: 225,
  },
  subTitle: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "600",
  },
  showMore: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: 120,
    borderRadius: 16,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.LIGHT_GRAY,
  },
  showMoreTitle: {
    color: colors.LIGHT_GRAY,
    fontSize: 14,
    fontWeight: "600",
  },
  paddingIcon: {
    paddingLeft: 5,
  },
  borderLine: {
    borderBottomWidth: 1,
    borderColor: colors.GRAY,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
});
