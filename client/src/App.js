import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster } from "react-hot-toast";
// import { Button } from 'antd';
function App() {
  return (
   <BrowserRouter>
   <Toaster position="top-center" reverseOrder={false} />
    <Routes>
      <Route path="/login" element={<Login/>} />;
      <Route path="/Register" element={<Register/>} />;
    </Routes>
   </BrowserRouter>
  );
}

export default App;
