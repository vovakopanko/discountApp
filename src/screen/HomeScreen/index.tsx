import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { Fire } from "../../../assets/svg";
import { colors } from "../../../styles/palletes";
import { MainBottomTabParamList } from "../../components/TopCategoryList/types";
import { DiscountsCategory } from "../../components/Discounts/Discounts";
import { SelectedCategory } from "../../components/SelectedCategory/SelectedCategory";
import { selectedCategory } from "../../redux/reducers/homeReducer/homeReducer";
import { styles } from "./styles";
import {
  CategoryList,
  PropsEvent,
  RootAppStackParams,
  RootAppStackParamsList,
} from "./types";
import { useSelectorData } from "../../hooks/useSelectorData";
import React from "react";
import { CurrentCard } from "../CurrentCardScreen";

function SelectorDiscountCategory() {
  const { categoryList } = useSelectorData();
  const navigation =
    useNavigation<BottomTabNavigationProp<MainBottomTabParamList>>();
  const dispatch = useDispatch();

  const EventHandler = ({ category, index }: PropsEvent) => {
    dispatch(
      selectedCategory({
        name: category.name,
        id: category.id,
        isSelected: !category.isSelected,
        index: index,
      })
    );
    navigation.navigate(
        RootAppStackParams.DiscountsCategory
    );
  };

  return (
    <ScrollView
      horizontal
      style={styles.scrollHeight}
      showsHorizontalScrollIndicator={false}
    >
      {categoryList.map((category: CategoryList, index: number) => (
        <TouchableOpacity
          onPress={() => {
            EventHandler({ category, index });
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
          <Text
            style={{
              ...styles.headerCategoryTitle,
              color: category.isSelected ? colors.WHITE : colors.BLACK,
            }}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default function HomeScreen() {
  const Stack = createStackNavigator<RootAppStackParamsList>();
  const { isAllDiscounts } = useSelectorData();
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
          name={RootAppStackParams.DiscountsCategory}
          component={isAllDiscounts ? DiscountsCategory : SelectedCategory}
        />
        <Stack.Screen
          name={RootAppStackParams.CurrentCard}
          component={CurrentCard}
          options={{ headerShown: false, gestureEnabled: true }}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
