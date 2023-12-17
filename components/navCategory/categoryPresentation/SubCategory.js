import React, { Fragment } from "react";
import classes from "./SubCategory.module.css";
import Link from "next/link";
const SubCategory = (props) => {
    return (
        <Fragment>
            <section className={classes.section}>
                <p>{props.title}</p>
                <div>
                    {props.subCategoryArr.map((item, index) => {
                        return (
                            <Link href="" className={classes.subCategory} key={index}>
                                <div className={classes.img}>
                                    <img src={item.imgSrc} alt={item.title} />
                                </div>
                                <p>{item.title}</p>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </Fragment>
    );
};

export default SubCategory;
