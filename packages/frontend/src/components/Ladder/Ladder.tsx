import { Bracket, RoundProps } from "react-brackets";

function Ladder({ rounds }: { rounds: RoundProps[] }) {
  return (
    <div className="Ladder center-content max-screen">
      <Bracket rounds={rounds} />
    </div>
  );
}

export default Ladder;
