import classes from "./GamePreparing.module.css";
import ButtonSubmit from "../../common_components/ButtonSubmit";
import ButtonNumber from "../../common_components/ButtonNumber";
import {useState} from "react";

const GamePreparing = (props) => {
    const [level , setLevel] = useState();
    const [error, setError] = useState('')
    const buttons = [3, 4, 5];

    const levelHandler = (enteredNum) => {
        setLevel(enteredNum);
        setError('')
    }

    const buttonHandler = () => {
        level ? props.setGameLevel(level) : setError("Please choose game level!");
    }

    return (
        <div className={classes.prep}>
            <h2 className={classes.header}>Please select the length of the secret number</h2>
            <div className={classes.wrapper}>
                {buttons.map(el => {
                    //FixMe useCallback
                    return <ButtonNumber key={el} onClick={() => levelHandler(el)} style={level===el ? 'active' : ''}>{el}</ButtonNumber>
                })}
            </div>
            {error && <p>{error}</p>}
            <ButtonSubmit onClick={buttonHandler}>Start game</ButtonSubmit>
        </div>
    );
}

export default GamePreparing;