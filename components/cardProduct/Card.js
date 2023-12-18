"use client";
import React, { Fragment } from "react";
import classes from "./Card.module.css";
import Link from "next/link";
const Card = () => {
    // -----------------------

    return (
        <Fragment>
            <section className={classes.section}>
                <Link href="">
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
                        <Link href="">
                            <p className="font-semibold text-2xl">قسطرة CVP -Amecath</p>
                        </Link>
                        <p className={classes.sub}>
                            <span>تابع لقسم </span>
                        </p>
                    </div>
                    <hr />
                    <p>
                        المورد : <span>شركه ---</span>
                    </p>
                    <p>
                        بلد المنشأ : <span>الصين</span>
                    </p>
                    <p>العلامة تجارية : <span>Dolphin</span></p>
                    <hr />
                    <div className={`py-2 flex flex-col gap-2 ${classes.makeOrder}`}> 
                        <p>
                            ادخل الكميه المطلوبه
                        </p>
                        <input type="number" min="1"placeholder="الكميه المطلوبه"/>
                        <button>
                            ارسال الطلب للمورد
                        </button>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Card;
