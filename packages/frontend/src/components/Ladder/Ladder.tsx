import { Bracket, RoundProps } from "react-brackets";

import "./Ladder.scss";

function Ladder({ rounds }: { rounds: RoundProps[] }) {
  return (
    <div className="Ladder max-screen">
      <Bracket rounds={rounds} />
    </div>
  );
}

export default Ladder;
