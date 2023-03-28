import './index.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import JobView from './Pages/JobView';
import Register from './Pages/Register';
const app = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/jobview" element={<JobView />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </Router>
  );
}
 
export default app;