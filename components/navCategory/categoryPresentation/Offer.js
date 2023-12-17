import React, { Fragment } from "react";
import classes from "./Offer.module.css";
import Link from "next/link";
const Offer = (props) => {
    return (
        <Fragment>
            <section className={classes.section}>
                <p>اختيارتنا لك</p>
                <div>
                    {props.offersArr.map((item, index) => {
                        return (
                            <>
                                <Link
                                    href={item.href}
                                    key={index}
                                    className={classes.offer}
                                >
                                    <img src={item.imgSrc} alt="offer" />
                                </Link>
                            </>
                        );
                    })}
                </div>
            </section>
        </Fragment>
    );
};

export default Offer;
