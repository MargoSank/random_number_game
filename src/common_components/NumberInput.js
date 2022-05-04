import classes from "./NumberInput.module.css";
import {useFocus} from "../hooks/useFocus";
import {useEffect} from "react";

export const NumberInput = (props) => {
    const [inputRef, setInputFocus] = useFocus();

    useEffect(() => {
        if (props.focus === true) setInputFocus();
    }, [props.focus])

    const shakeStyle = props.shakeAction ? classes.shake : null;

    return (
        <input className={`${classes.input} ${shakeStyle}`} ref={inputRef} maxLength={1} onChange={props.onChange}
               value={props.value}/>
    )
};
