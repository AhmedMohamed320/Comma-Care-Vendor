import React from 'react'
import classes from "./Button.module.css"

const ButtonRed = (props) => {
  return (
    <button className={`${classes.delete} ${classes.button}`}>{props.text}</button>
  )
}

export default ButtonRed