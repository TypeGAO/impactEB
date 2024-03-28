import React from 'react';
import ReactDOM from 'react-dom'; 
//import logo from './logo.svg';
import './App.css';
// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
//import ReactDOM from "react-dom/client";
//import createRoot from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import OrgDashboard from "./pages/org_dashboard";
import NoPage from "./pages/NoPage";
import ProgramDashboard from "./pages/program_dashboard";
import PipelineDashboard from './pages/pipeline_dashboard';
import ProjectDashboard from './pages/project_dashboard';

//imports needed for victory charts 

// const router = createBrowserRouter();

//referencing https://www.w3schools.com/react/react_router.asp, but I am also looking into https://www.youtube.com/watch?v=oTIJunBa6MA
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="org_dashboard" element={<OrgDashboard />} />
          <Route path="program_dashboard" element={<ProgramDashboard />} />
          <Route path="project_dashboard" element={<ProjectDashboard />} />
          <Route path="pipeline_dashboard" element={<PipelineDashboard />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
        
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

//const root = createRoot(document.getElementById('root'));
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
export default App;
