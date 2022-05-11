import {useState} from 'react';
import classes from "../../style/pages.module.scss";
import {ResponseFields} from "./ResponseFields";
import {ResponseHistory} from "./ResponseHistory";
import {useNavigate} from "react-router-dom";
import {ContainerGame} from "../../common_components/ContainerGame";

export const Game = (props) => {
    const secretNumber = props.secretNumber;
    const [answerHistory, setAnswerHistory] = useState([]);
    const navigate = useNavigate();

    const checkAnswerHandler = (userInput) => {
        if (secretNumber === userInput) {
            navigate(`../win/${secretNumber}`)
        }
        const checkResult = secretNumber.split('').map((secretNum, i) => {
            let digitResult = {digit: userInput[i]};
            if (secretNum === userInput[i]) {
                digitResult.status = 'correct';
            } else if (secretNumber.includes(userInput[i])) {
                digitResult.status = 'include';
            } else {
                digitResult.status = 'mistake';
            }
            return digitResult
        })
        setAnswerHistory(prevState => {
            return [...prevState, checkResult];
        })
    }

    return (
        <ContainerGame>
            <h2 className={classes.header}>Enter your guess</h2>
            <ResponseFields checkResponse={checkAnswerHandler}/>
            <ResponseHistory answers={answerHistory}/>
        </ContainerGame>
    );
};