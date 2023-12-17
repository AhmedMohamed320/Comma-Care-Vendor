import React, { Fragment } from 'react'
import classes from "./Button.module.css"
const Button2 = (props) => {
  return (
    <Fragment>
        <button className={classes.button2}>
            {props.text}
        </button>
    </Fragment>
  )
}

export default Button2