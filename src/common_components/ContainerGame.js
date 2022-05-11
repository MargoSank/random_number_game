import classes from "../style/container.module.scss";

export const ContainerGame = (props) => {
    return <div className={classes.game_container}>{props.children}</div>
}