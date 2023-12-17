
"use client";
import React, { useState } from "react";
import classes from "./Button.module.css";
const ButtonFav = (props) => {
    const [imageSrc, setImageSrc] = useState("/images/icons8-love-64.png");

    const handleMouseEnter = () => {
        setImageSrc("/images/icons8-add-50.png");
    };

    const handleMouseLeave = () => {
        setImageSrc("/images/icons8-love-64.png");
    };


    return (
        <div
        className={props.classesName ? classes[props.classesName] : ""}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={imageSrc} alt="Favorite" />
        </div>
    );
};

export default ButtonFav;
