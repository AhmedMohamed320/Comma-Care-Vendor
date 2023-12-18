import React from "react";
import classes from "./Button.module.css";
import { GrFormClose } from "react-icons/gr";

const ButtonClose = (props) => {
    return (
        <div className={classes.close} onClick={props.click}>
            <GrFormClose />
        </div>
    );
};

export default ButtonClose;
