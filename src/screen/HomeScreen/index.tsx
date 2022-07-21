import { Image, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { images } from "../../constants/images";
import { authActions } from "../../redux/reducers/homeReducer";
import { getHomeData } from "../../redux/selectors";
import { styles } from "./styles";

export default function HomeScreen() {
  const data = useSelector(getHomeData)
  const dispatch = useDispatch();
  return (
    <View style={styles.profileBlock}>
      <Text
      onPress={()=>{dispatch(authActions.ChangeNameProfile())}}
        style={styles.fontStyle}
      >
        {data.name} will appear here soon
      </Text>
      <Image
        source={images.COMING_SOON}
        style={styles.imageSize}
      />
    </View>
  );
}
