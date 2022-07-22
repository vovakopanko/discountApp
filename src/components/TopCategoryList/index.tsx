import {
  BottomTabNavigationProp,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, View } from "react-native";
import { CategoryHeader } from "../CategoryHeader";
import { CategoryScrollView } from "../CategoryScrollView";
import { styles } from "./styles";
import { CategoryType, Data, MainBottomTabParamList } from "./types";

export default function TopCategoryList({ categoryData }: CategoryType) {
  const tabBarHeight = useBottomTabBarHeight();
  const navigation =
    useNavigation<BottomTabNavigationProp<MainBottomTabParamList>>();
  return (
    <ScrollView
      style={{ ...styles.contentBlock, marginBottom: tabBarHeight - 32 }}
    >
      {categoryData.map((category: Data, index:number) => (
        <View key={category.id}>
          {category.cards.length === 0 ? (
            null
          ) : (
            <>
              <CategoryHeader category={category} index={index} />
              <CategoryScrollView category={category} navigation={navigation} />
            </>
          )}
        </View>
      ))}
    </ScrollView>
  );
}
