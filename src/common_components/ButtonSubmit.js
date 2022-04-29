
import classes from "./ButtonSubmit.module.css";

const ButtonSubmit = (props) => {
    return <button className={classes.button} onClick={props.onClick}>{props.children}</button>
}

export default ButtonSubmit;