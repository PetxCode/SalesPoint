import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminScreen from "./components/AdminScreen";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import CartScreen from "./components/Cart";
import HeaderScreen from "./components/HeaderScreen";
import HomeScreen from "./components/HomeScreen";
import LandingScreen from "./components/LandingScreen";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderScreen />
      <Routes>
        <Route path="/landing" element={<LandingScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<AdminScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
