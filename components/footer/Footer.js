"use client";
import React, { Fragment } from "react";
import classes from "./Footer.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return (
        <Fragment>
            <section className={classes.section}>
                <footer className={`mainContainer ${classes.footer}`}>
                    <div>
                        <p>اقسامنا</p>
                        <ul>
                           
                        </ul>
                    </div>
                    <div>
                        <p>خدمة العملاء</p>
                        <ul>
                            <li>
                                <Link href="/">
                                    <p>تواصل معانا</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <p>
                                        سياسية الخصوصيه
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <p>سياسة الاسترجاع</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <p>خدمة التوصيل  </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>تابعنا</p>
                        <ul className={classes.ulColRow}>
                            <li>
                                <a href="">
                                    <FiFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <BsWhatsapp />
                                </a>
                            </li>
                        </ul>
                        <p> Comma Care</p>
                        <ul>
                            <li>
                                <Link href="" className="ml-4">
                                    عن comma
                                </Link>
                                <Link href="">الاسئله الشائعه</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className={classes.logo}>
                            <img src="/images/mainLogo.png" alt="logo" />
                        </div>
                        <p>شهادات الاعتماد</p>
                        <ul className={classes.ulColRow}>
                            <li>
                                <img
                                    src="/images/VatIcon.webp"
                                    alt="ضريبه القيمه المضافه"
                                />
                            </li>
                            <li>
                                <img src="/images/LicensedSales.webp" alt="" />
                            </li>
                        </ul>

                        {/* <p>طرق الدفع لدينا</p>
                        <ul className={classes.ulColRow}>
                            <li>
                                <img
                                    src="/images/apple-pay_logo.png"
                                    alt="apple pay"
                                />
                            </li>
                            <li>
                                <img src="/images/Mada_Logo.png" alt="مدى" />
                            </li>
                            <li>
                                <img src="/images/Visa_logo.png" alt="visa" />
                            </li>
                            <li>
                                <img
                                    src="/images/master_logo.png"
                                    alt="master"
                                />
                            </li>
                        </ul> */}
                    </div>
                </footer>
                <p className={classes.copyright}>
                جميع الحقوق محفوظة لدى كوما &copy;
                </p>
            </section>
        </Fragment>
    );
};

export default Footer;
