import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./component/user/Index.jsx";
import User from "./component/Admin/Conten/User.jsx";
import store from "../src/redux/store.jsx";
import { Provider } from "react-redux";
import QuizManagement from "./component/Admin/Conten/QuizManagement.jsx"; //
import QuestionManagement from "./component/Admin/Conten/QuestionManagement.jsx";
// import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Playground } from "./storybook/Playground.tsx";
import Dangnhap from "./component/user/Dangnhap.jsx";
import Dangkys from "./component/user/Dangky.jsx";
// import Admin from "./component/Admin/Admin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="dangnhap" element={<Dangnhap />} />
            <Route path="dangky" element={<Dangkys />} />
          </Route>
          <Route path="/admin" element={<Playground />}>
            <Route path="quan-ly-user" element={<User />} />
            <Route path="quan-ly-quiz" element={<QuizManagement />} />
            <Route path="quan-ly-cau-hoi" element={<QuestionManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Playground></Playground> */}
    </React.StrictMode>
  </Provider>
);
