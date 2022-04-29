import classes from "./ButtonNumber.module.css";

const ButtonNumber = (props) => {

    return <button className={`${classes[props.style]} ${classes.button}`} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
}

export default ButtonNumber;