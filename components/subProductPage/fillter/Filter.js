"use client";
import React, { Fragment, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import classes from "./Filter.module.css";
import axios from "axios";

const Filter = (props) => {
    const [showFilters, setShowFilters] = useState({
    });

    function handleFilterClick(filter) {
        setShowFilters((prevShowFilters) => ({
            ...prevShowFilters,
            [filter]: !prevShowFilters[filter],
        }));
    }

    const [form, setForm] = useState({
        priceFrom: 0,
        priceTo: 0,
        brandId: 0,
    });

    const [showBtn, setShowBtn] = useState(false);

    // function handleChangeForm(e) {
    //     let num = +e.target.value;
    //     setForm({ ...form, [e.target.name]: num });
    //     setShowBtn(true);
    // }

    // // -------------------------

    // const [allBrand, setAllBrand] = useState([]);
    // useEffect(() => {
    //     axios
    //         .get(`${process.env.NEXT_PUBLIC_BASEURL}/comma/brand/getAllBrands`)
    //         .then((res) => {
    //             setAllBrand(res.data.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    // // -------------------------

    // function handleBrandChange(event) {
    //     const selectedId = +event.target.id;
    //     form.brandId = selectedId;
    //     setShowBtn(true);
    // }

    return (
        <Fragment>
            <section className={classes.section}>
                <p className="pb-4 font-semibold">فلتر المنتجات</p>
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
                                <input type="number" name="priceTo" />
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
                                        <input type="radio" name="brand" />
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <div
                            onClick={() => handleFilterClick("showCountryFilter")}
                        >
                            <p className={classes.headFiltering}>
                                بلد المنشأ
                            </p>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                        {showFilters.showCountryFilter && (
                            <div>
                                <ul>
                                    <li>
                                        <label>test</label>
                                        <input type="radio" name="brand" />
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <div
                            onClick={() => handleFilterClick("showSubFilter")}
                        >
                            <p className={classes.headFiltering}>
                                الصنف
                            </p>
                            <MdOutlineKeyboardArrowDown />
                        </div>
                        {showFilters.showSubFilter && (
                            <div>
                                <ul>
                                    <li>
                                        <label>test</label>
                                        <input type="radio" name="brand" />
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
