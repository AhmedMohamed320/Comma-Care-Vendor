"use client";
import classes from "./Nav.module.css";
import { IoPersonOutline } from "react-icons/io5";
import { RxTextAlignJustify } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import {
    MdOutlineKeyboardArrowDown,
    MdKeyboardArrowUp
} from "react-icons/md";
import { PiChats } from "react-icons/pi";
import { Fragment ,useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useCookies } from "react-cookie";
import axios from "axios";
import { LiaShippingFastSolid } from "react-icons/lia";

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

    //--------------------
    const handleLogout = () => {
        // try {
        //     removeCookie("token");
        //     router.push("/");
        // } catch (error) {
        //     console.error("Error occurred while logging out:", error);
        // }
    };

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
                            {false ? (
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
                                                    <Link href="/">
                                                        لوحه التحكم{" "}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
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
                                    <p>خدماتنا</p>
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
                            <Link href="/negotiation">
                                <div>
                                    <p>المفاوضات</p>
                                    <PiChats
                                        className={classes.iconEdit}
                                    />
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
                        <li>
                            <Link href="/">
                                <div>
                                    <p>
                                        الطلبات
                                    </p>
                                    <div className={classes.cart}>
                                        <LiaShippingFastSolid
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
