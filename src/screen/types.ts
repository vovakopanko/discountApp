import { StackNavigationProp } from "@react-navigation/stack";
import { RootAppStackParamsList } from "./HomeScreen/types";

export type Tabs = {
  title: string;
  icon?: string;
  iconInactive?: any;
};

export type MainStackNavigationProps = {
  route: routeType;
  navigation: any;
};

type ChevronNavigationProp = StackNavigationProp<RootAppStackParamsList>;

export type routeType = {
  params: any;
};
