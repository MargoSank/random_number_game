import classes from "./NumberInput.module.css";
import useFocus from "../hooks/useFocus";
import React, {useEffect} from "react";

export const NumberInput = (props) => {
    const [inputRef, setInputFocus] = useFocus();

    useEffect(() => {
        if(props.focus === true) setInputFocus();
    }, [props.focus])


    return <input ref={inputRef} className={classes.input} maxLength={1} onChange={props.onChange}
                  value={props.value}/>
}
