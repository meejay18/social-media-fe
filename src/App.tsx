/* eslint-disable prefer-const */
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { store } from "./global/store";

let persistor = persistStore(store);
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={mainRouter} />{" "}
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
