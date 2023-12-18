"use client";
import React, { Fragment, useState, useEffect } from "react";
import classes from "./ProductsPage.module.css";
import Filter from "@/components/subProductPage/fillter/Filter";
import AllProduct from "@/components/subProductPage/allProduct/AllProduct";
import MobileFilter from "@/components/subProductPage/fillter/MobileFilter";

const ProductsPage = (props) => {
    const [showComponent, setShowComponent] = useState(false);
    function handleShowComponent() {
        setShowComponent(!showComponent);
    }

    // -------------------

    return (
        <Fragment>
            <section className={`mainContainer ${classes.section}`}>
                {showComponent && <MobileFilter hide={handleShowComponent} />}
                <div className={classes.part2}>
                    <div className={classes.filterDiv}>
                        <Filter className={classes.filter} />
                    </div>
                    <AllProduct show={handleShowComponent} />
                </div>
            </section>
        </Fragment>
    );
};

export default ProductsPage;
