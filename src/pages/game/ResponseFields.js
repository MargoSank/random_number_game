import classes from "./ResponseFields.module.css";
import {NumberInput} from "../../common_components/NumberInput";
import {useEffect, useReducer, useState} from "react";
import {useParams} from "react-router-dom";

export const ResponseFields = props => {
    const { level } = useParams();
    const responseLength = /^[3456]{1}$/.test(level) ? level : 3;
    const emptyInputs = " ".repeat(responseLength);
    const [inputs, setInputs] = useState(emptyInputs);
    const [focus, setFocus] = useState(0)
    const [shakeAction, setShakeAction] = useState([]);
    const [ignored, forceUpdate] = useReducer(x => x + 1, 1);

    useEffect(() => {
        window.addEventListener('keydown', submitHandler);
        return () => {
            window.removeEventListener("keydown", submitHandler);
        }
    })
    useEffect(() => {
        if(shakeAction.length === 0){
            return
        }
        const actionClean = setTimeout(() => {
            setShakeAction([]);
        }, 500)
        return () => {
            window.clearTimeout(actionClean);
        }
    }, [shakeAction])

    const submitHandler = (e) => {
        if (e.code === 'Enter' || e.code === 'NumpadEnter') {
            if (!/\s/.test(inputs)) {
                props.checkResponse(inputs);
                setInputs(emptyInputs);
                setFocus(0);
            } else {
                emptyInputsHandler(inputs);
            }
        }
    }

    const emptyInputsHandler = inputValue => {
        const emptyFields = inputValue.split('')
            .map((el, idx) => {
                if (el === " ") {
                    return idx;
                }
            })
            .filter(el => el !== undefined);
        setShakeAction(emptyFields.length === 0 ? [] : emptyFields);
        forceUpdate();
    }

    const inputHandler = (e, idx) => {
        const userInput = e.target.value;
        if (/^[0-9]$/.test(userInput)) {
            setInputs(prevState => {
                const newState = prevState.split('');
                newState[idx] = userInput;
                return newState.join('');
            });
            setFocus(idx + 1);
        }
    }

    return (
        <div className={classes.wrapper}>
            {inputs.split('').map((el, idx) => {
                return (
                    <NumberInput
                        key={idx}
                        onChange={(e) => inputHandler(e, idx)}
                        value={inputs[idx].trim()}
                        focus={focus === idx}
                        shakeAction={shakeAction.includes(idx) ? ignored : false}
                    />);
            })}
        </div>
    );
}