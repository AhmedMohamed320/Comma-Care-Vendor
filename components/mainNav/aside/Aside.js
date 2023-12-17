"use client";
import React, { Fragment, useState } from "react";
import classes from "./Aside.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineClose,
    MdLogout,
    MdLanguage,
    MdOutlineDeliveryDining,
} from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useCookies } from "react-cookie";
import { IoPersonOutline } from "react-icons/io5";
import { CgShoppingBag } from "react-icons/cg";

const Aside = (props) => {
    const router = useRouter();
    // const [cookies, setCookie, removeCookie] = useCookies(["token"]);

    const [showSubCategories, setShowSubCategories] = useState({});
    const handleShowSubCategory = (categoryID) => {
        setShowSubCategories((prevState) => ({
            ...prevState,
            [categoryID]: !prevState[categoryID],
        }));
    };

    function handleOutSide() {
        // try {
        //     removeCookie("token");
        //     router.push("/sign_in");
        // } catch (error) {
        //     console.error("Error occurred while logging out:", error);
        // }
    }

    // --------------------------------

    return (
        <Fragment>
            <section className={classes.section}>
                <aside className={classes.aside}>
                    <div className={classes.close} onClick={props.onHideAside}>
                        <MdOutlineClose />
                    </div>
                    <div className={classes.head}>
                        <div>
                            <img
                                src="/images/mainLogo-2.png"
                                alt="comma care logo"
                            />
                            <p>
                                مرحبا
                                محمد
                                {/* {cookies.token && (
                                    <span> {props.userData.fullName}</span>
                                )} */}
                            </p>
                        </div>

                        <div>
                            <ul>
                                <li onClick={props.onHideAside}>
                                    <Link href="/">
                                        <CgShoppingBag
                                            className={classes.iconEdit}
                                        />
                                        <p>السله</p>
                                    </Link>
                                </li>
                                <li onClick={props.onHideAside}>
                                    <Link href="/">
                                        <MdOutlineDeliveryDining
                                            className={classes.iconEdit}
                                        />
                                        <p>الطلبات</p>
                                    </Link>
                                </li>
                                <li onClick={props.onHideAside}>
                                    <Link href="/">
                                        <AiOutlineHeart
                                            className={classes.iconEdit}
                                        />
                                        <p>المفضله</p>
                                    </Link>
                                </li>
                                <li onClick={props.onHideAside}>
                                    <Link href="/">
                                        <IoPersonOutline
                                            className={classes.iconEdit}
                                        />
                                        <p>حسابي</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.baseDetails}>
                        <div>
                            <div className="font-semibold mb-2">تغير اللغه</div>
                            <div
                                onClick={() => {
                                    props.onChangeLang();
                                }}
                            >
                                {props.lang === "en" ? (
                                    <p>عربي</p>
                                ) : (
                                    <p>English</p>
                                )}
                                <MdLanguage className={classes.iconEdit} />
                            </div>
                        </div>
                    </div>
                    <ul>
                        {props.data?.data.map((category) => {
                            const categoryID = `showSubCategory_${category.id}`;
                            const isSubCategoriesVisible =
                                showSubCategories[categoryID];
                            return (
                                <li
                                    key={category.id}
                                    onClick={() =>
                                        handleShowSubCategory(categoryID)
                                    }
                                >
                                    <div>
                                        <Link href="">
                                            <p>{category.nameAr}</p>
                                        </Link>
                                        <MdOutlineKeyboardArrowDown
                                            className={classes.iconEdit}
                                        />
                                    </div>
                                    {isSubCategoriesVisible && (
                                        <ul>
                                            {category.subcategories.map(
                                                (sub) => {
                                                    return (
                                                        <li
                                                            key={sub.id}
                                                            onClick={
                                                                props.onHideAside
                                                            }
                                                            className="px-8"
                                                        >
                                                            {/* <img
                                                                src="/images/icons8-chevron-left-48.png"
                                                                alt=""
                                                            /> */}

                                                            <Link
                                                                href={`/category/${category.name}/${sub.id}/2`}
                                                            >
                                                                <p>
                                                                    {sub.nameAr}
                                                                </p>
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                    <div>
                        <div onClick={handleOutSide}>
                            {true ? (
                                <p>تسجيل الخروج</p>
                            ) : (
                                <p>تسجيل الدخول</p>
                            )}
                            <MdLogout />
                        </div>
                    </div>
                </aside>
            </section>
        </Fragment>
    );
};

export default Aside;
