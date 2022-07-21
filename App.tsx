import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import reduxStore from "./src/redux/reduxStore";

export default function App() {
  const { store, persistor } = reduxStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <Text>Demo Discount App</Text>
            <StatusBar style="auto" />
          </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});