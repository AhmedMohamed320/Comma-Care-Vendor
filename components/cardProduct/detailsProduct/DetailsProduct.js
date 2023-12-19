"use client";
import React, { Fragment, useState } from "react";
import classes from "./DetailsProduct.module.css";
import { LiaShoppingCartSolid } from "react-icons/lia";

const DetailsProduct = (props) => {
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
            <section className={`mainContainer ${classes.section}`}>
                <div className={classes.part1}>
                    <div>
                        <img src="/images/test.webp" alt="test" />
                    </div>
                    <div>
                        <div className={classes.name}>
                            <p className={classes.brand}>تابع لقسم</p>
                            <p>قسطرة CVP -Amecath</p>
                        </div>

                        <hr />
                        <div className={classes.details}>
                            <p>
                                المورد : <span>شركه ---</span>
                            </p>
                            <p>
                                بلد المنشأ : <span>الصين</span>
                            </p>
                            <p>
                                العلامة تجارية : <span>Dolphin</span>
                            </p>
                            <p>
                                اقل كميه يمكن طلبها : <span>10</span>
                            </p>
                        </div>
                        <hr />

                        <div>
                            <p>وصف المنتج:</p>
                            <p className={classes.description}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quos nostrum quaerat quia
                                atque doloribus! Quos quasi dolorum sunt harum
                                nam aperiam. Quas quasi nulla repellendus fugiat
                                nostrum magnam quo illum.
                            </p>
                        </div>
                        <div
                            className={`py-2 flex flex-col gap-2 ${classes.makeOrder}`}
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
                </div>
            </section>
        </Fragment>
    );
};

export default DetailsProduct;
