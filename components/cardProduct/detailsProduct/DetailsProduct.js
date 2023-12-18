"use client";
import React, { Fragment } from "react";
import classes from "./DetailsProduct.module.css";

const DetailsProduct = (props) => {
    // --------------------------

    return (
        <Fragment>
            <section className={`mainContainer ${classes.section}`}>
                <div className={classes.part1}>
                    <div>
                        <img src="/images/test.webp" alt="test" />
                    </div>
                    <div>
                        <div className={classes.name}>
                            <p className={classes.brand}>test</p>
                            <p>قسطرة CVP -Amecath</p>
                        </div>

                        <div className={classes.price}>
                            <p>45 ر.س</p>{" "}
                        </div>

                        <div className={classes.part2}>
                            <p>وصف المنتج:</p>
                            <p>test</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default DetailsProduct;
