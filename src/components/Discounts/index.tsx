import { BottomTabNavigationProp, useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../styles/palletes";
import { images } from "../../constants/images";
import { FavoritesClickIcon } from "../FavoritesClickIcon";
import { PersonalDiscount } from "../PersonalDiscount";
import { styles } from "./styles";
import { CardInfo, Data, MainBottomTabParamList } from "./types";

export default function TopCategoryList({ categoryData }: any) {
    const tabBarHeight = useBottomTabBarHeight();
    const navigation =
    useNavigation<BottomTabNavigationProp<MainBottomTabParamList>>();
    return (
      <ScrollView
        style={{ ...styles.contentBlock, marginBottom: tabBarHeight - 32 }}
      >
        {categoryData.map((category: Data) => (
          <View key={category.id}>
            {category.title === "New items" ? (
              <View>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <View key={category.id} style={styles.categoryHeader}>
                  <View>
                    <ScrollView horizontal>
                      {category.cards.slice(0, 4).map((card: CardInfo) => (
                        <TouchableOpacity
                          key={card.id}
                          onPress={() => {
                            navigation.navigate("CurrentCard", {
                              params: {
                                title: card.title,
                                id: card.id,
                                img: card.img,
                              },
                            });
                          }}
                          style={styles.wrapper}
                        >
                          <View style={{ width: 200 }}>
                            <Image
                              source={
                                card.img ? card.img : images.DEFAULT_IMAGE
                              }
                              style={styles.imageSize}
                            />
                            <PersonalDiscount discounts={card.discounts} />
                            <FavoritesClickIcon
                              category={category}
                              card={card}
                            />
                          </View>
                          <View
                            style={{ position: "absolute", top: 6, left: 6 }}
                          >
                            <Text
                              style={{
                                ...styles.subTitle,
                                color: colors.WHITE,
                              }}
                            >
                              {card.title}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                      {category.cards.length > 4 && (
                        <TouchableOpacity style={styles.showMore}>
                          <Text style={styles.showMoreTitle}>
                            Watch more +{category.cards.length - 4}
                          </Text>
                        </TouchableOpacity>
                      )}
                    </ScrollView>
                  </View>
                </View>
              </View>
            ) : category.cards.length === 0 ? null : (
              <View>
                <View key={category.id} style={styles.categoryHeader}>
                  <Text style={styles.categoryTitle}>{category.title}</Text>
                  <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.btnShowAll}>All</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <ScrollView horizontal>
                    {category.cards.slice(0, 4).map((card: CardInfo) => (
                      <TouchableOpacity
                        key={card.id}
                        onPress={() => {
                          navigation.navigate("CurrentCard", {
                            params: {
                              title: card.title,
                              id: card.id,
                              img: card.img,
                            },
                          });
                        }}
                        style={styles.wrapper}
                      >
                        <View style={{ width: 200 }}>
                          <Image
                            source={card.img ? card.img : images.DEFAULT_IMAGE}
                            style={styles.imageSize}
                          />
                          <PersonalDiscount discounts={card.discounts} />
                          <FavoritesClickIcon category={category} card={card} />
                        </View>
                        <View style={styles.subTitleBlock}>
                          <Text style={styles.subTitle}>{card.title}</Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                    {category.cards.length > 4 && (
                      <TouchableOpacity style={styles.showMore}>
                        <Text style={styles.showMoreTitle}>
                          Watch more +{category.cards.length - 4}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </ScrollView>
                </View>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    );
  }