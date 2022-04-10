import { Routes, Route, Navigate, BrowserRouter, Link } from "react-router-dom";
import Teams from "../Teams/Teams";
import "./Admin.scss";

function Admin() {
  return (
    <div className="Admin">
      <div className="admin-container">
        <div className="admin-teams">
          <Teams key="teams" />
        </div>
      </div>
    </div>
  );
}

export default Admin;
