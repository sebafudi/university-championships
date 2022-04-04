import { Bracket, RoundProps } from "react-brackets";

function Ladder({ rounds }: { rounds: RoundProps[] }) {
  return (
    <div id="ladder" className="fullscreen Ladder">
      <Bracket rounds={rounds} />
    </div>
  );
}

export default Ladder;
