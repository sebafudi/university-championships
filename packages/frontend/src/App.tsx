/* eslint-disable import/no-anonymous-default-export */
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Live from "./components/Live/Live";
import Register from "./components/Register/Register";
import Ladder from "./components/Ladder/Ladder";
import Teams from "./components/Teams/Teams";

import teamsContext from "./contexts/teams.ctx";
import "./App.scss";

type member = {
  nick: string;
  fullname: string;
  pfp: string;
};

export type team = {
  name: string;
  logo: string;
  members: member[];
};

export type teams = { [name: string]: team };
//

const defaultmember = {
    nick: "mathias",
    fullname: "Mateusz Pstrucha",
    pfp: "/favicon.ico",
  },
  defaultteam = {
    name: "Nazwa Drużyny",
    logo: "/favicon.ico",
    members: Array(5)
      .fill(5)
      .map(() => defaultmember),
  };

const teams: teams = {
  PlatynosKurwos: defaultteam,
  LubieZjescKebsa: defaultteam,
  WMMME: defaultteam,
  okitopa: defaultteam,
  piwnicazule: defaultteam,
  sdfgsdf: defaultteam,
  asdfasdf: defaultteam,
  zxcvzxcb: defaultteam,
  wefasdfhasdf: defaultteam,
};

function shortDate(str: string) {
  return new Date(str).toLocaleDateString();
}

const rounds = [
  {
    title: "#1",
    seeds: [
      {
        date: shortDate("4/3/2022"),
        teams: [teams.PlatynosKurwos, teams.LubieZjescKebsa],
      },
      {
        date: shortDate("4/3/2022"),
        teams: [teams.WMMME, teams.okitopa],
      },
    ],
  },
  {
    title: "Finałowa",
    seeds: [
      {
        date: shortDate("4/3/2022"),
        teams: [teams.LubieZjescKebsa, teams.WMMME],
      },
    ],
  },
].map((round) => {
  round.title = "Runda " + round.title;
  return round;
});

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={[
            <div id="hero" className="fullscreen page">
              <Hero key="hero" />
            </div>,
            <div id="live" className="half page">
              <div className="spacer">
                <div className="spacer-top-purple"></div>
              </div>
              <Live key="live" />
              <div className="spacer">
                <div className="spacer-bottom-purple"></div>
              </div>
            </div>,
            <div id="ladder" className="fullscreen page bg-concrete">
              <Ladder key="ladder" rounds={rounds} />
            </div>,
            <div id="teams" className="fullscreen page">
              <div className="spacer">
                <div className="spacer-top-purple"></div>
              </div>
              <Teams key="teams" />
            </div>,
          ]}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default () => (
  <BrowserRouter>
    <teamsContext.Provider value={teams}>
      <App />
    </teamsContext.Provider>
  </BrowserRouter>
);
