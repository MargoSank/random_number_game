import './App.css';
import {Container} from "./common_components/Container";
import {Game} from "./pages/game/Game";
import {GamePreparing} from "./pages/welcome/GamePreparing";
import {useState} from "react";
import {Win} from "./pages/results/Win";
import gitLogo from './img/github.svg'
import {Routes, Route} from "react-router-dom";

function App() {
    const [secretNumber, setSecretNumber] = useState();

    const gameLevelHandler = (level) => {
        setSecretNumber(Math.floor(Math.random() * Math.pow(10, level)))
    };

    return (
        <>
            <a href="https://github.com/MargoSank/random_number_game" target="_blank" rel="noreferrer">
                <img src={gitLogo} alt="github"/>
            </a>
            <Container>
                <Routes>
                    <Route path="*" element={<GamePreparing setGameLevel={gameLevelHandler}/>}/>
                    {secretNumber && <Route path="/level/:level" element={<Game secretNumber={secretNumber}/>}/>}
                    <Route path="/win/:number" element={<Win/>}/>
                </Routes>
            </Container>
        </>

    );
}

export default App;

