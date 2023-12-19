import React from "react";
import classes from "./Button.module.css";
import { TfiClose } from "react-icons/tfi";

const ButtonClose = (props) => {
    return (
        <div className={classes.close} onClick={props.click}>
            <TfiClose />
        </div>
    );
};

export default ButtonClose;
