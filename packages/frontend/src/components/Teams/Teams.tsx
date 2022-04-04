import { useContext } from "react";
import teamsContext from "../../contexts/teams.ctx";

import "./Teams.scss";

function Teams() {
  const teams = useContext(teamsContext);

  return (
    <div id="teams" className="fullscreen Teams">
      {/* <h1>Drużyny</h1> */}
      {Object.keys(teams).map((key) => {
        let { name, logo, members } = teams[key];

        return (
          <div className="team">
            <img className="team-logo" src={logo} alt={key} />
            <div className="members">
              <div className="team-name">{key}</div>
              {members.map(({ nick, pfp }) => (
                <div className="team-member">
                  <img className="member-pfp" src={pfp} alt={nick} />
                  <div className="member-nick">{nick}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Teams;
