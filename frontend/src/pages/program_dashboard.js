import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PipelineDashboard from "./pipeline_dashboard";
import ProjectDashboard from "./project_dashboard";
import Layout from "./Layout";
import NoPage from "./NoPage"
import { Outlet, Link } from "react-router-dom";

const program_dashboard = () =>{
    return(
        // <BrowserRouter>
        // /<Routes>
        // <Route path="/" element={<Layout />}>
        //   <Route index element={<program_dashboard />} />
        //   <Route path="project_dashboard" element={<ProjectDashboard />} />
        //   <Route path="pipeline_dashboard" element={<PipelineDashboard />} />
        //   <Route path="*" element={<NoPage />} />
        // </Route>
        //  </Routes>
        // </BrowserRouter>
        <nav>
        <ul>
          <li>
            <Link to="/project_dashboard">Project Dashboard</Link>
          </li>
          <li>
            <Link to="/pipeline_dashboard">Pipeline Dashboard</Link>
          </li>
        </ul>
      </nav>
    ) 
}

export default program_dashboard;