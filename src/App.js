import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  );
}

export default App;
