"use client";
import classes from "./Nav.module.css";
import { IoPersonOutline } from "react-icons/io5";
import { CgShoppingBag } from "react-icons/cg";
import { RxTextAlignJustify } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import {
    MdOutlineKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdLanguage,
} from "react-icons/md";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useCookies } from "react-cookie";
import axios from "axios";

const Nav = (props) => {
    const router = useRouter();
    // const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    // const token = cookies["token"];
    // const headers = {
    //     Authorization: `Bearer ${token}`,
    // };
    const [showComponent, setShowComponent] = useState(false);
    const handleMouseEnter = () => {
        setShowComponent(true);
    };
    const handleMouseLeave = () => {
        setShowComponent(false);
    };

    const [productData, setData] = useState([]);

    //--------------------
    // const handleLogout = () => {
    //     try {
    //         removeCookie("token");
    //         router.push("/");
    //     } catch (error) {
    //         console.error("Error occurred while logging out:", error);
    //     }
    // };

    // ---------------------------
    const [availableCookies, setAvailableCookies] = useState(false);
    return (
        <Fragment>
            <div className={classes.up}>
                <nav className={`mainContainer ${classes.nav}`}>
                    <Link href="/">
                        <div className={classes.logo}>
                            <img src="/images/mainLogo.png" alt="" />
                        </div>
                    </Link>
                    <ul>
                        <li>
                            {!availableCookies ? (
                                <Link href="/" className={classes.link}>
                                    <div>
                                        <p>تسجيل الدخول | التسجيل</p>
                                        <IoPersonOutline
                                            className={classes.iconEdit}
                                        />
                                    </div>
                                </Link>
                            ) : (
                                <div
                                    className={classes.userName}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className={classes.nameUp}>
                                        <IoPersonOutline
                                            className={classes.iconEdit}
                                        />
                                        <p>
                                            {props.userData &&
                                            props.userData.fullName
                                                ? props.userData.fullName
                                                : "nan"}
                                        </p>

                                        {showComponent ? (
                                            <MdKeyboardArrowUp
                                                className={classes.iconEdit}
                                            />
                                        ) : (
                                            <MdOutlineKeyboardArrowDown
                                                className={classes.iconEdit}
                                            />
                                        )}
                                    </div>
                                    {showComponent && (
                                        <div className={classes.pop}>
                                            <ul>
                                                <li>
                                                    <Link href="/user_dashboard">
                                                        لوحه التحكم{" "}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/user_dashboard/orders">
                                                        عرض الطلبات
                                                    </Link>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={handleLogout}
                                                    >
                                                        تسجيل الخروج
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </li>
                        <li>
                            <span></span>
                        </li>
                        <li>
                            <Link href="/">
                                <div>
                                    <p>عن خدماتنا</p>
                                    <AiOutlineHeart
                                        className={classes.iconEdit}
                                    />
                                </div>
                            </Link>
                        </li>
                        <li>
                            <span></span>
                        </li>
                        <li>
                            <Link href="/">
                                <div>
                                    <p>اعرض منتجاتك</p>
                                    <div className={classes.cart}>
                                        <CgShoppingBag
                                            className={classes.iconEdit}
                                        />
                                    </div>
                                </div>
                            </Link>
                            <div
                                className={classes.iconShowAside}
                                onClick={props.onShowAside}
                            >
                                <RxTextAlignJustify />
                            </div>
                        </li>
                        <li>
                            <span></span>
                        </li>
                        <li>English</li>
                        <li>
                            <div
                                className={classes.iconShowAside}
                                onClick={props.onShowAside}
                            >
                                <RxTextAlignJustify />
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </Fragment>
    );
};

export default Nav;
