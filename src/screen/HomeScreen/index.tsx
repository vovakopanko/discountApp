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
  getSelectedData,
} from "../../redux/selectors";
import { styles } from "./styles";
import { CategoryList } from "./types";

function SelectorDiscountCategory() {
  const categoryList = useSelector(getCategoryListSelector);
  const dispatch = useDispatch();
  return (
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
  );
}

export default function HomeScreen() {
  const dataSelector = useSelector(getDiscountDataList);
  const [data, useData] = useState(dataSelector);

  const selectedData = useSelector(getSelectedData);
  const currentCategory = useSelector(getCurrentCategory);

  useEffect(() => {
    useData(dataSelector);
  }, [dataSelector]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SelectorDiscountCategory />
      <View style={styles.borderLine} />
      <TopCategoryList
        categoryData={currentCategory === "All discounts" ? data : selectedData}
      />
    </SafeAreaView>
  );
}
