import classes from "../../style/pages.module.scss";
import ButtonNumber from "../../common_components/ButtonNumber";

export const ResponseHistory = (props) => {

    const headerInstruction = <h4 className={classes.header}>After entering the number, press enter button to
        submit</h4>
    const headerHistory = <h3 className={classes.header}>Response history:</h3>
    const header = props.answers.length === 0 ? headerInstruction : headerHistory;

    return (
        <>
            {header}
            <div className={classes.reverse_wrapper}>
                <HistoryLines answers={props.answers}/>
            </div>

        </>
    );
}

const HistoryLines = (props) => {
    return props.answers.map((line, idx) => {
        return (
            <div key={idx}>
                {line.map((cell, idx2) => {
                    return <ButtonNumber key={idx2} style={cell.status} disabled={true}>{cell.digit}</ButtonNumber>
                })}
            </div>
        )
    })
}
