"use client";
import React, { Fragment, useEffect, useState } from "react";
import classes from "./Card.module.css";
import Link from "next/link";
import { LiaShoppingCartSolid } from "react-icons/lia";
const Card = () => {
    const [showCart, setShowCart] = useState(false);
    function handleShowCart(e) {
        const value = e.target.value;
        if (value != " ") {
            setShowCart(true);
        }
    }

    let cartClass = `${classes.iconEdit}  ${showCart ? `${classes.show}` : ""}`;

    return (
        <Fragment>
            <section className={classes.section}>
                <Link href="/test/test/1">
                    <div className={classes.img}>
                        <img
                            src="/images/test.webp"
                            alt="test"
                            loading="lazy"
                        />
                    </div>
                </Link>
                <div className={classes.details}>
                    <div>
                        <Link href="/test/test/1">
                            <p className="font-semibold text-2xl">
                                قسطرة CVP -Amecath
                            </p>
                        </Link>
                        <p className={classes.sub}>
                            <span>تابع لقسم </span>
                        </p>
                    </div>
                    <hr />
                    <p>
                        اقل كميه يمكن طلبها : <span>10</span>
                    </p>
                    <hr />
                    <div
                        className={`flex flex-col gap-2 ${classes.makeOrder}`}
                    >
                        <p>ادخل الكميه المطلوبه</p>
                        <div>
                            <input
                                type="number"
                                min="1"
                                placeholder="الكميه المطلوبه"
                                onChange={handleShowCart}
                            />
                            <LiaShoppingCartSolid className={cartClass} />
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Card;
