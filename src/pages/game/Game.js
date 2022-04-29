import {useEffect, useState} from 'react';
import {NumberInput} from "../../common_components/NumberInput";
import classes from "./Game.module.css";
import HistoryTable from "./HistoryTable";

const Game = (props) => {

    const [inputs, setInputs] = useState('   ');
    const [answerHistory, setAnswerHistory] = useState([]);
    const [focus, setFocus] = useState(0)


    useEffect(() => {
        window.addEventListener('keydown', submitHandler);
        return () => {
            window.removeEventListener("keydown", submitHandler);
        }
    })

    const submitHandler = (e) => {
        if (e.code === 'Enter' && !/\s/.test(inputs)) {
            checkNumberFormHandler(inputs);
            setInputs('   ');
            setFocus(0);
        }
    }

    const inputHandler = (e, idx) => {
        const userInput = e.target.value;
        if (/[0-9]/.test(userInput)) {
            setInputs(prevState => {
                const newState = prevState.split('');
                newState[idx] = userInput;
                return newState.join('');
            });
            setFocus(idx + 1);
        }
    }


    const checkNumberFormHandler = userInput => {
        const secretNumber = props.secretNumber.toString();
        let result = [{}, {}, {}];

        for (let i = 0; i < 3; i++) {
            result[i].digit = userInput[i];
            if (secretNumber[i] === userInput[i]) {
                result[i].status = 'correct';
            } else if (secretNumber.includes(userInput[i])) {
                result[i].status = 'include';
            } else {
                result[i].status = 'mistake';
            }
        }

        setAnswerHistory(prevState => {
            return [...prevState, result];
        })
    }

    return (
        <div className={classes.prep}>
            <h2 className={classes.header}>Please enter potential number</h2>
            <div className={classes.wrapper}>
                <NumberInput key={0} onChange={(e) => inputHandler(e, 0)} value={inputs[0].trim()} focus={focus === 0}/>
                <NumberInput key={1} onChange={(e) => inputHandler(e, 1)} value={inputs[1].trim()} focus={focus === 1}/>
                <NumberInput key={2} onChange={(e) => inputHandler(e, 2)} value={inputs[2].trim()} focus={focus === 2}/>
            </div>

            <HistoryTable answers={answerHistory.reverse()}/>

        </div>
    );
};

export default Game;