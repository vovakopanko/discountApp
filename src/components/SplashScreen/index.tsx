import { Animated, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Logo from "./../../../assets/icon.png";
import { useEffect, useRef } from "react";
import MainContainer from "../../navigation/MainContainer";

const SplashScreen = () => {
  const startAnimation = useRef(new Animated.Value(0)).current;
  const edges = useSafeAreaInsets();

  const scaleLogo = useRef(new Animated.Value(1)).current;
  const scaleTitle = useRef(new Animated.Value(1)).current;

  const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const contentTransition = useRef(
    new Animated.Value(Dimensions.get("window").height)
  ).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(startAnimation, {
          toValue: -Dimensions.get("window").height + (edges.top + 65),
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          toValue: 0.5,
          useNativeDriver: true,
        }),
        Animated.timing(scaleTitle, {
          toValue: 0.8,
          useNativeDriver: true,
        }),
        Animated.timing(moveLogo, {
          toValue: {
            x: 0,
            y: Dimensions.get("window").height / 2 - 1100,
          },
          useNativeDriver: true,
        }),
        Animated.timing(moveTitle, {
          toValue: {
            x: 0,
            y: Dimensions.get("window").height / 2 - 1100,
          },
          useNativeDriver: true,
        }),
        Animated.timing(contentTransition, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }, 500);
  }, []);
  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          zIndex: 1,
          alignItems: "center",
          justifyContent: "center",
          transform: [{ translateY: startAnimation }],
        }}
      >
        <Animated.Image
          source={Logo}
          style={{
            width: 100,
            height: 100,
            transform: [
              { translateY: moveLogo.y },
              { translateX: moveLogo.x },
              { scale: scaleLogo },
            ],
          }}
        />
        <Animated.Text
          style={{
            fontSize: 24,
            color: "red",
            paddingTop: 20,
            fontWeight: "800",
            transform: [{ translateY: moveTitle.y }, { scale: scaleTitle }],
          }}
        >
          Demo Discount
        </Animated.Text>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          transform: [{ translateY: contentTransition }],
        }}
      >
        <MainContainer />
      </Animated.View>
    </Animated.View>
  );
};

export default SplashScreen;
