"use client";
import React, { Fragment, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import classes from "./Filter.module.css";

const Filter = (props) => {
    const [showFilters, setShowFilters] = useState({});

    function handleFilterClick(filter) {
        setShowFilters((prevShowFilters) => ({
            ...prevShowFilters,
            [filter]: !prevShowFilters[filter],
        }));
    }
    const [showBtn, setShowBtn] = useState(false);
    function handleChangeForm(e) {
        setShowBtn(true);
    }
    return (
        <Fragment>
            <section className={classes.section}>
                <p className="pb-4 pt-2 text-3xl text-center font-medium">
                    فلتر المنتجات
                </p>
                <ul>
                    <li>
                        <div
                            onClick={() => handleFilterClick("showPriceFilter")}
                        >
                            <p className={classes.headFiltering}>السعر</p>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                        {showFilters.showPriceFilter && (
                            <div>
                                <p>من</p>
                                <input type="number" name="priceFrom" />
                                <p>الى</p>
                                <input
                                    type="number"
                                    name="priceTo"
                                    onChange={(e) => {
                                        handleChangeForm(e);
                                    }}
                                />
                            </div>
                        )}
                    </li>
                    <li>
                        <div
                            onClick={() => handleFilterClick("showBrandFilter")}
                        >
                            <p className={classes.headFiltering}>
                                العلامات التجاريه
                            </p>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                        {showFilters.showBrandFilter && (
                            <div>
                                <ul>
                                    <li>
                                        <label>test</label>
                                        <input
                                            type="radio"
                                            onChange={(e) => {
                                                handleChangeForm(e);
                                            }}
                                        />
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <div
                            onClick={() =>
                                handleFilterClick("showCountryFilter")
                            }
                        >
                            <p className={classes.headFiltering}>بلد المنشأ</p>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                        {showFilters.showCountryFilter && (
                            <div>
                                <ul>
                                    <li>
                                        <label>test</label>
                                        <input
                                            type="radio"
                                            onChange={(e) => {
                                                handleChangeForm(e);
                                            }}
                                        />
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <div onClick={() => handleFilterClick("showSubFilter")}>
                            <p className={classes.headFiltering}>الصنف</p>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                        {showFilters.showSubFilter && (
                            <div>
                                <ul>
                                    <li>
                                        <label>test</label>
                                        <input
                                            type="radio"
                                            onChange={(e) => {
                                                handleChangeForm(e);
                                            }}
                                        />
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <div
                            onClick={() =>
                                handleFilterClick("showVendorsFilter")
                            }
                        >
                            <p className={classes.headFiltering}>المورد</p>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                        {showFilters.showVendorsFilter && (
                            <div>
                                <ul>
                                    <li>
                                        <label>test</label>
                                        <input
                                            type="radio"
                                            onChange={(e) => {
                                                handleChangeForm(e);
                                            }}
                                        />
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                </ul>
                {showBtn && (
                    <div className={classes.btn}>
                        <button className={classes.confirm}>
                            تاكيد التغير
                        </button>
                    </div>
                )}
            </section>
        </Fragment>
    );
};

export default Filter;
