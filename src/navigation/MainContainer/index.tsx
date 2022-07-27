import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "./styles";
import { bottomTab } from "./constants";
import { colors } from "../../../styles/palletes";
import {
  ProfileActive,
  DiscountActive,
  Discounts,
  Favorites,
  FavoritesActive,
  Profile,
} from "../../../assets/svg";
import FavoritesScreen from "../../screen/FavoritesScreen";
import HomeScreen from "../../screen/HomeScreen";
import ProfileScreen from "../../screen/ProfileScreen";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFakeResponseData } from "../../redux/reducers/homeReducer/homeReducer";
import { DB } from "../../redux/reducers/homeReducer/DB";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFakeResponseData(DB));
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={bottomTab.Home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let rn = route.name;
            if (rn === bottomTab.Home) {
              return focused ? <DiscountActive /> : <Discounts />;
            } else if (rn === bottomTab.Favorites) {
              return focused ? <FavoritesActive /> : <Favorites />;
            } else if (rn === bottomTab.Profile) {
              return focused ? <ProfileActive /> : <Profile />;
            }
          },
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: colors.BLUE,
          tabBarInactiveTintColor: colors.BLACK,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
