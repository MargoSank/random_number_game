import './App.css';
import Container from "./common_components/Container";
import Game from "./pages/game/Game";
import GamePreparing from "./pages/welcome/GamePreparing";
import {useState} from "react";

function App() {
  const [secretNumber, setSecretNumber] = useState(123);

  const gameLevelHandler = (level) => {
      setSecretNumber(Math.floor(Math.random() * Math.pow(10, level)))
  };


  return (
    <Container>
      {/*<GamePreparing setGameLevel={gameLevelHandler}/>*/}
      <Game secretNumber={secretNumber}/>
    </Container>
  );
}

export default App;

