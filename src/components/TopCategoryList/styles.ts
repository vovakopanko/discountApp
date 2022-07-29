import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Platform, StyleSheet } from "react-native";

const tabBarHeight = useBottomTabBarHeight();
export const styles = StyleSheet.create({
  contentBlock: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom:
          Platform.OS === "android" ? tabBarHeight : tabBarHeight - 32,
  },
});
