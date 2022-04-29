import classes from "./HistoryTable.module.css";
import ButtonNumber from "../../common_components/ButtonNumber";

const HistoryTable = (props) => {


    return (
        <>
            <h2 className={classes.header}>History:</h2>
            <HistoryLines answers={props.answers}/>
        </>
    );
}

export default HistoryTable;

const HistoryLines = (props) => {
    return props.answers.map((line, idx) => {
        return (
            <div key={idx}>
                {line.map((cell, idx2) => {
                    //Todo fix key
                    return <ButtonNumber key={cell.digit} style={cell.status} disabled={true}>{cell.digit}</ButtonNumber>
                })}
            </div>
        )
    })
}
