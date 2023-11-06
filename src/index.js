import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Banner from './components/banner'
import reportWebVitals from './reportWebVitals';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import COMPcurriculum from "./pages/COMPcurriculum.jsx";
import Gitgraph from "./pages/Gitgraph.jsx"
import MyDay from  "./pages/MyDay.jsx"
import ClassPieChart from './pages/ClassPieChart.jsx';
import ClassQuadrant from './pages/ClassQuadrant.jsx';
import GameSankey from './pages/GameSankey.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline>
    <Banner>
    </Banner>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="COMPcurriculum" element={<COMPcurriculum />}></Route>
        <Route path="Gitgraph" element={<Gitgraph />}></Route>
        <Route path="MyDay" element={<MyDay />}></Route>
        <Route path="ClassPieChart" element={<ClassPieChart />}></Route>
        <Route path='ClassQuadrant' element={<ClassQuadrant />}></Route>
        <Route path='GameSankey' element={<GameSankey />}></Route>

      </Routes>
    </BrowserRouter>
    </CssBaseline>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
