import React, { Fragment } from "react";
import Filter from "./Filter";
import classes from "./MobileFilter.module.css";
import ButtonClose from "@/components/UI/ButtonClose";
import { BiFilterAlt } from "react-icons/bi";

const MobileFilter = (props) => {
    return (
        <Fragment>
            <section className={` ${classes.section}`}>
                <div>
                    <ButtonClose click={props.hide} />
                </div>
                <div className="w-full">
                    <Filter onFilter={props.onFilter} />
                </div>
            </section>
        </Fragment>
    );
};

export default MobileFilter;
