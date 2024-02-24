import ChallengeTimer from "./components/ChallengeTimer.jsx";
import Player from "./components/Player.jsx";

function App() {
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
console.log("first")
export default App;
