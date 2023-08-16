import "./App.css";
import Fitness from "./components/Fitness component/Fitness";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portal from "./components/Portal/Portal";
import Equipment from "./components/Fitness-Equipment/Equipment";
import Treadmill from "./components/TreadMill/Treadmill";
import CrossTrainer from "./components/Cross-Trainers/CrossTrainer";
import ExerciseBikes from "./components/ExerciseBikes/ExerciseBikes";
import Massager from "./components/Massager/Massager";
import ViewAllEquipment from "./components/ViewAllEquipment/ViewAllEquipment";
import CrossOutOfStock from "./components/Cross-Trainers/Cross-OutOfStock/CrossOutOfStock";
import TreadMillOutOfStock from "./components/TreadMill/TreadMill-OutOfStock/TreadMillOutOfStock";
import ViewAllOutOfStock from "./components/ViewAllEquipment/ViewAllOutOfStock/ViewAllOutOfStock";
import MassagerOutOfStock from "./components/Massager/MassagerOutOfStock/MassagerOutOfStock";
import Login from "./components/Authedication/Login";
import SignUp from "./components/Authedication/SignUp/SignUp";
// import { useEffect } from "react";
import React, { useEffect } from "react";
function App() {
  useEffect (() => {
      LoadOutOfStockImages();
    },
    []);
  const LoadOutOfStockImages = async () => {
    const loadimg = await fetch.get(
      "https://webcodetwo-server.onrender.com/treadmillimgsoutofstock"
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Fitness />} />
          <Route path="/portal" element={<Portal />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="fitness-equipment" element={<Equipment />} />
            <Route
              path="fitness-treadmill"
              element={<Treadmill loadimg={LoadOutOfStockImages} />}
            />
            <Route path="fitness-crosstrainer" element={<CrossTrainer />} />
            <Route path="fitness-exercisebikes" element={<ExerciseBikes />} />
            <Route path="fitness-massager" element={<Massager />} />
            <Route path="fitness-allEquipment" element={<ViewAllEquipment />} />
            <Route
              path="fitness-allEquipment-outofstock"
              element={<ViewAllOutOfStock />}
            />
            <Route
              path="cross-trainer-outofstock"
              element={<CrossOutOfStock />}
            />
            <Route
              path="cross-treadmill-outofstock"
              element={<TreadMillOutOfStock />}
            />
            <Route
              path="cross-massager-outofstock"
              element={<MassagerOutOfStock />}
            />
            <Route
              path="cross-trainer-outofstock"
              element={<CrossOutOfStock />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
