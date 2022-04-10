import { useContext } from "react";
import teamsContext from "../../contexts/teams.ctx";

import "./Teams.scss";

function Teams() {
  const teams = useContext(teamsContext);

  return (
    <div id="teams" className="Teams">
      {/* <h1>Drużyny</h1> */}
      {teams.map((team) => {
        let { name, logo, members } = team;

        return (
          <div className="team">
            <div className="team-bg"></div>
            <img className="team-logo" src={logo} alt={name} />
            <div className="members">
              <div className="team-name">{name}</div>
              {members.map(({ nick }) => (
                <div className="team-member">
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
