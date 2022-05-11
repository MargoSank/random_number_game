import classes from "../style/input.module.scss";
import {useFocus} from "../hooks/useFocus";
import {useEffect} from "react";

export const InputNumber = (props) => {
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
