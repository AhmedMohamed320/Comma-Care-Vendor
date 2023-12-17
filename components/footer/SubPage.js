import React, { Fragment } from 'react'
import classes from "./SubPage.module.css"
const SubPage = (props) => {
  return (
    <Fragment>
        <section className={`mainContainer ${classes.section}`} >
            <p>{props.details.title}</p>
            <div>
                <p>{props.details.head}</p>
                {props.details.body.map((item)=>{
                    return(
                        <>
                        <p className={classes.title}>{item.title}</p>
                        <p>{item.paragraph}</p>
                        </>
                    )
                })}
            </div>
        </section>
    </Fragment>
  )
}

export default SubPage