import ButtonNumber from "../../common_components/ButtonNumber";
import classes from "../../style/pages.module.scss";
import ButtonSubmit from "../../common_components/ButtonSubmit";
import {useNavigate, useParams} from "react-router-dom";
import {ContainerGame} from "../../common_components/ContainerGame";

export const Win = () => {
    const { number } = useParams();
    const navigate = useNavigate();
    const buttonHandler = () => {
        navigate('../start');
    }

    return (
        <ContainerGame>
            <h2 className={classes.header}>Congratulations! You found the secret number!</h2>
            <div className={classes.wrapper}>
                {number.split('').map((num, idx) => <ButtonNumber key={idx} style={"win"} disabled={true}>{num}</ButtonNumber>)}
            </div>
            <ButtonSubmit onClick={buttonHandler}>Start new game</ButtonSubmit>
        </ContainerGame>
    );
};