"use client";
import { TbCategory } from "react-icons/tb";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Fragment, useEffect, useRef, useState } from "react";
import classes from "./NavCategory.module.css";
import CategoryAndSub from "./CategoryAndSub";
import Link from "next/link";
import axios from "axios";
import { IoSearch } from "react-icons/io5";

const NavCategory = (props) => {
    const [loading, setLoading] = useState(false);
    const [showComponent, setShowComponent] = useState(false);
    const handleMouseEnter = () => {
        setShowComponent(true);
    };
    const handleMouseLeave = () => {
        setShowComponent(false);
    };

    return (
        <Fragment>
            <div className={classes.up}>
                <section className={`mainContainer ${classes.section}`}>
                    <div
                        className={classes.allCategoryAndSub}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <TbCategory className={classes.iconEdit1} />
                        <p>جميع الأقسام</p>
                        <BsFillCaretDownFill className="text-2xl " />
                        {showComponent && <CategoryAndSub data={props.data} />}
                    </div>
                    <ul>
                        <li>قسم</li>
                        <li>قسم</li>
                        <li>قسم</li>
                        <li>قسم</li>
                    </ul>
                    <div className="w-full flex justify-end">
                        <div className={`${classes.upSearchDiv}`}>
                            <div className={classes.search}>
                                <input
                                    type="text"
                                    placeholder="ابحث عن ما تريده"
                                    // onChange={handleSearch}
                                    // value={searchValue}
                                />
                                {loading ? (
                                    <div className="w-6 h-6">
                                        <img
                                            src="/images/loading.gif"
                                            alt=""
                                            className="w-full h-full"
                                        />
                                    </div>
                                ) : (
                                    <IoSearch className={classes.iconEdit} />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    );
};

export default NavCategory;
