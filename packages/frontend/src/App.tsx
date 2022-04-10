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

import faker from "@faker-js/faker";

type member = {
  nick: string;
};

export type team = {
  name: string;
  logo: string;
  members: member[];
};

export type teams = team[];

const teams: teams = Array(28)
  .fill(0)
  .map(() => generateRandomTeam());
console.log(teams);

// generate random team name by adjectuve and noun and capitalize first letter
function generateRandomTeamName(): string {
  const adjective = faker.word.adjective();
  const verb = faker.commerce.product();
  return `${adjective[0].toUpperCase()}${adjective.slice(
    1
  )} ${verb[0].toUpperCase()}${verb.slice(1)}`;
}

function generateRandomTeam() {
  return {
    name: generateRandomTeamName(),
    logo: faker.image.cats(128, 128, true),
    members: Array(5)
      .fill(0)
      .map(() => ({
        nick: faker.name.firstName(),
      })),
  };
}

function shortDate(str: string) {
  return new Date(str).toLocaleDateString();
}

//random item from teams array
function randomTeamName() {
  return teams[Math.floor(Math.random() * teams.length)].name;
}

const rounds = [
  {
    title: "#1",
    seeds: Array(8)
      .fill(0)
      .map(() => ({
        date: shortDate("4/3/2022"),
        teams: [{ name: randomTeamName() }, { name: randomTeamName() }],
      })),
  },
  {
    title: "#2",
    seeds: Array(4)
      .fill(0)
      .map(() => ({
        date: shortDate("4/3/2022"),
        teams: [{ name: randomTeamName() }, { name: randomTeamName() }],
      })),
  },
  {
    title: "#3",
    seeds: Array(2)
      .fill(0)
      .map(() => ({
        date: shortDate("4/3/2022"),
        teams: [{ name: randomTeamName() }, { name: randomTeamName() }],
      })),
  },
  {
    title: "Finałowa",
    seeds: Array(1)
      .fill(0)
      .map(() => ({
        date: shortDate("4/3/2022"),
        teams: [{ name: randomTeamName() }, { name: randomTeamName() }],
      })),
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
            <div id="ladder" className="page bg-color">
              <Ladder key="ladder" rounds={rounds} />
            </div>,
            <div id="teams" className="fullscreen page">
              {/* <div className="spacer">
                <div className="spacer-top-purple"></div>
              </div> */}
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
