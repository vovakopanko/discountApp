import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "./styles";
import { bottomTab } from "./constants";
import { colors } from "../../../styles/palletes";
import { ProfileActive, DiscountActive, Discounts, Favorites, FavoritesActive, Profile } from "../../../assets/svg";
import CurrentCard from "../../screen/CurrentCardScreen";
import FavoritesScreen from "../../screen/FavoritesScreen";
import HomeScreen from "../../screen/HomeScreen";
import ProfileScreen from "../../screen/ProfileScreen";


const Tab = createBottomTabNavigator();

export default function MainContainer() {
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
              return (
                focused ? <ProfileActive /> : <Profile />
              );
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
        <Tab.Screen name="CurrentCard"  options={() => ({
                  tabBarItemStyle: {
                    display: 'none',
                  },
                })} component={CurrentCard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
