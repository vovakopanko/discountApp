import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import reduxStore from "./src/redux/reduxStore";
import SplashScreen from "./src/components/SplashScreen";

export default function App() {
  const { store, persistor } = reduxStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <SplashScreen />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
