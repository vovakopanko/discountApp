import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { Fire } from "../../../assets/svg";
import { colors } from "../../../styles/palletes";
import { MainBottomTabParamList } from "../../components/TopCategoryList/types";
import { Discounts } from "../../components/Discounts/Discounts";
import { SelectedCategory } from "../../components/SelectedCategory/SelectedCategory";
import { selectedCategory } from "../../redux/reducers/homeReducer/homeReducer";
import { styles } from "./styles";
import {
  CategoryList,
  RootAppStackParams,
  RootAppStackParamsList,
} from "./types";
import { useSelectorData } from "../../hooks/useSelectorData";

function SelectorDiscountCategory() {
  const dispatch = useDispatch();
  const { categoryList } = useSelectorData();
  const navigation =
    useNavigation<BottomTabNavigationProp<MainBottomTabParamList>>();

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
            navigation.navigate("SelectedCategoryList");
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
  const Stack = createStackNavigator<RootAppStackParamsList>();
  const { currentCategory } = useSelectorData();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SelectorDiscountCategory />
      <View style={styles.borderLine} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: styles.cardStyle,
        }}
      >
        <Stack.Screen
          name={RootAppStackParams.SelectedCategoryList}
          component={
            currentCategory === "All discounts" ? Discounts : SelectedCategory
          }
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
