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
import Login from "./components/Authedication/Login";
import SignUp from "./components/Authedication/SignUp/SignUp";

import React, { useEffect, useState } from "react";
import Viewdetails from "./components/TreadMill/viewPage/Viewdetails";
import Payment from "./components/payment/Payment";
import ViewBike from "./components/ExerciseBikes/ViewBike/ViewBike";
import ViewTrainers from "./components/Cross-Trainers/viewcross/ViewTrainers";
function App() {
  const [add, setCart] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Fitness />} />
          <Route path="/portal" element={<Portal add={add} />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="fitness-equipment" element={<Equipment />} />
            <Route
              path="fitness-treadmill"
              element={<Treadmill add={add} setcart={setCart} />}
            />

            <Route
              path="fitness-crosstrainer"
              element={<CrossTrainer add={add} setcart={setCart} />}
            />
            <Route path="fitness-exercisebikes" element={<ExerciseBikes add={add} setcart={setCart} />} />
            <Route path="fitness-massager" element={<Massager add={add} setcart={setCart} />} />
            <Route path="fitness-allEquipment" element={<ViewAllEquipment />} />
           <Route path="treadmillview/:id" element={<Viewdetails/>}/>
           <Route path="exercisebikes/:id" element={<ViewBike/>}/>
           <Route path="massager/:id" element={<Viewdetails/>}/>
           <Route path="trainers/:id" element={<ViewTrainers/>}/>
          
          </Route>
          <Route path="payment" element={<Payment/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
