import classes from "../style/button.module.scss";

const ButtonSubmit = (props) => {
    return <button className={`${classes.button__submit} ${classes.button}`}
                   onClick={props.onClick}>{props.children}</button>
}

export default ButtonSubmit;