import Player from "./components/Player.jsx";
import ChallengeTimer from "./components/ChallengeTimer.jsx";

export default function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <ChallengeTimer title="Easy" targetTime={1} />
        <ChallengeTimer title="Getting tough" targetTime={10} />
        <ChallengeTimer title="Pros only" targetTime={15} />
      </div>
    </>
  );
}
