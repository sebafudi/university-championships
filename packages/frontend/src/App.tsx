import { Routes, Route, Link, Navigate } from "react-router-dom";

import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Twitch from "./components/Twitch/Twitch";
import Register from "./components/Register/Register";
import Ladder from "./components/Ladder/Ladder";
import Teams from "./components/Teams/Teams";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={[
            <Hero key="hero" />,
            <Twitch key="twitch" />,
            <Ladder key="ladder" />,
            <Teams key="teams" />,
          ]}
        />
        <Route path="register" element={<Register key="register" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
