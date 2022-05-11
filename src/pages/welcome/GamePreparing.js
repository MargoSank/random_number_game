import classes from "../../style/pages.module.scss";
import ButtonSubmit from "../../common_components/ButtonSubmit";
import ButtonNumber from "../../common_components/ButtonNumber";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ContainerGame} from "../../common_components/ContainerGame";

export const GamePreparing = (props) => {
    const [numberLength, setNumberLength] = useState();
    const [error, setError] = useState('')
    const buttons = [3, 4, 5, 6];
    const navigate = useNavigate();


    const levelHandler = (enteredNum) => {
        setNumberLength(enteredNum);
        setError('')
    }

    const buttonHandler = () => {
        if (numberLength) {
            props.setGameLevel(numberLength);
            navigate(`../level/${numberLength}`)
        } else {
            setError("Please select one of the level options before starting the game!")
        }
    }

    return (
        <ContainerGame>
            <h2 className={classes.header}>Please choose a game level</h2>
            <div className={classes.wrapper}>
                {buttons.map(el => {
                    //FixMe useCallback
                    return <ButtonNumber key={el} onClick={() => levelHandler(el)}
                                         style={numberLength === el ? 'active' : ''}>{el}</ButtonNumber>
                })}
            </div>
            {error && <p className={classes.error}>{error}</p>}
            <ButtonSubmit onClick={buttonHandler}>
                Start game
            </ButtonSubmit>
        </ContainerGame>
    );
}