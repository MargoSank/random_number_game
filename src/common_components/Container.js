import classes from "../style/container.module.scss";

export const Container = (props) => {
    return <div className={classes.container}>{props.children}</div>
}