import React from "react";
import Router from "../src/routes/index";
import Demo from "../src/components/Layout/Demo";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import RootReducer from "../src/AppRedux/Reducer/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const App = () => {
  const store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return (
    <div>
      <React.Suspense fallback="Loading......">
        <Provider store={store}>
          <Router />
        </Provider>
      </React.Suspense>
    </div>
  );
};

export default App;
