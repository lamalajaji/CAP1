import { Route } from "react-router";
import "./App.css";
import Home from "./components/home";
import Easygame from "./components/easyGame";
import Instructions from "./components/instructionPage";
import Gamelevel from "./components/levels";
import HardGame from "./components/hardGame";
import MediumGame from "./components/midGame";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/Cards" component={Cards}/> */}
      <Route exact path="/Instruction" component={Instructions} />
      <Route exact path="/Gamelevel" component={Gamelevel} />
      <Route exact path="/Gamelevel/Easy" component={Easygame} />
      <Route exact path="/Gamelevel/Medium" component={MediumGame} />
      <Route exact path="/Gamelevel/Hard" component={HardGame} />
    </div>
  );
}

export default App;
