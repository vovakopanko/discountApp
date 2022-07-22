import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { Fire } from "../../../assets/svg";
import { colors } from "../../../styles/palletes";
import TopCategoryList from "../../components/Discounts";
import { Data } from "../../components/Discounts/types";
import { selectedCategory } from "../../redux/reducers/homeReducer/homeReducer";
import {
  getCategoryListSelector,
  getCurrentCategory,
  getDiscountDataList,
} from "../../redux/selectors";
import { styles } from "./styles";
import { CategoryList } from "./types";

export default function HomeScreen() {
  const dataSelector = useSelector(getDiscountDataList);
  const [data, useData] = useState(dataSelector);

  const dispatch = useDispatch();
  const categoryList = useSelector(getCategoryListSelector);
  const currentCategory = useSelector(getCurrentCategory);
  useEffect(() => {
    useData(dataSelector);
  }, [dataSelector]);

  const currentIndex = categoryList.findIndex((el) => el.isSelected === true);
  const selectedData =
    currentIndex !== -1
      ? data.filter((el: Data) => el.title === categoryList[currentIndex].name)
      : data;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView horizontal style={{ maxHeight: 40 }}>
        {categoryList.map((category: CategoryList, index: number) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(
                selectedCategory({
                  name: category.name,
                  id: category.id,
                  isSelected: !category.isSelected,
                  index: index,
                })
              );
            }}
            key={category.id}
            style={{
              ...styles.categoryItem,
              backgroundColor: category.isSelected ? colors.BLUE : colors.GRAY,
            }}
          >
            {category.name === "All discounts" && (
              <View style={styles.paddingIcon}>
                <Fire />
              </View>
            )}
            <Text style={styles.headerCategoryTitle}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.borderLine} />
      <TopCategoryList
        categoryData={currentCategory === "All discounts" ? data : selectedData}
      />
    </SafeAreaView>
  );
}
