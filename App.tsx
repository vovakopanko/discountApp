import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainContainer from "./src/navigation/MainContainer";
import reduxStore from "./src/redux/reduxStore";

export default function App() {
  const { store, persistor } = reduxStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <MainContainer />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
