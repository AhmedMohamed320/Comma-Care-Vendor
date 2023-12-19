"use client";
import React, { Fragment } from "react";
import classes from "./AllProduct.module.css";
import { BiFilterAlt } from "react-icons/bi";
import Card from "@/components/cardProduct/Card";

const AllProduct = (props) => {
    return (
        <Fragment>
            <section className={classes.section}>
                <div className={classes.part1}>
                    <div>
                        <select name="" id="n1">
                            <option value="">رتب حسب</option>
                            <option value="DESC">
                                السعرمن الاعلى الى الاقل
                            </option>
                            <option value="ASC">
                                السعرمن الاقل الى الاعلى
                            </option>
                        </select>
                        <div
                            className={classes.iconFilter}
                            onClick={props.show}
                        >
                            <BiFilterAlt />
                        </div>
                    </div>
                    <p>
                        <span>0</span> من 0 نتائج
                    </p>
                </div>
                <div className={classes.part2}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </Fragment>
    );
};

export default AllProduct;
