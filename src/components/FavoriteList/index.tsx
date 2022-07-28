import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Image,
  LayoutAnimation,
  Platform,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { Favorites, Heart } from "../../../assets/svg";
import { images } from "../../constants/images";
import {
  getFavoritesCard,
  removeFavoriteCard,
} from "../../redux/reducers/homeReducer/homeReducer";
import { MainBottomTabParamList } from "../TopCategoryList/types";
import { styles } from "./styles";
import { Data } from "./types";

const layoutAnimConfig = {
  duration: 700,
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    duration: 300,
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const removeItem = () => {
  LayoutAnimation.configureNext(layoutAnimConfig);
};

export default function FavoriteList({ data }: Data) {
  const dispatch = useDispatch();

  const navigation =
    useNavigation<BottomTabNavigationProp<MainBottomTabParamList>>();
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        horizontal={false}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.favoritesBlock}
              onPress={() => {
                removeItem();
                navigation.navigate("CurrentCard", {
                  params: {
                    title: item.title,
                    id: item.id,
                    img: item.img,
                    navigation,
                  },
                });
              }}
            >
              <View style={styles.favoritesWrapper}>
                <Text style={styles.favoritesTitle}>{item.discounts}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  dispatch(
                    removeFavoriteCard({
                      id: item.id,
                      currentCardTiele: item.title,
                      isSelected: !item.isSelected,
                    })
                  );
                  dispatch(getFavoritesCard());
                }}
                style={styles.selectedBtn}
              >
                {item.isSelected ? <Heart /> : <Favorites />}
              </TouchableOpacity>
              <Image
                source={item.img ? item.img : images.DEFAULT_IMAGE}
                style={styles.imageSize}
              />
              <View style={styles.titleBlock}>
                <Text style={styles.cardTitle}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </>
  );
}
