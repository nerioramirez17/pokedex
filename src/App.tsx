// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import { Provider } from "react-redux";
import store from "./store/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<Detail />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
