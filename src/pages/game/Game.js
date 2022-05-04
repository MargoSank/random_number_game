import {useState} from 'react';
import classes from "./Game.module.css";
import {ResponseFields} from "./ResponseFields";
import {ResponseHistory} from "./ResponseHistory";
import {useNavigate} from "react-router-dom";

export const Game = (props) => {
    const secretNumber = props.secretNumber.toString();
    const [answerHistory, setAnswerHistory] = useState([]);
    const navigate = useNavigate();

    const checkAnswerHandler = (userInput) => {
        if (secretNumber === userInput) {
            navigate(`../win/${secretNumber}`)
        }
        console.log({secretNumber}, {userInput})
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
        <div className={classes.prep}>
            <h2 className={classes.header}>Please enter potential number</h2>
            <ResponseFields checkResponse={checkAnswerHandler}/>
            <ResponseHistory answers={answerHistory}/>
        </div>
    );
};