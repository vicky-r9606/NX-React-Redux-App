import React, { useState } from "react";
import Display from "./Display";
import Form from "./Form";
import { Provider } from "react-redux";
import store from "../../Store/Store";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";


const MainPage = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="Display" element={<Display />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default MainPage;