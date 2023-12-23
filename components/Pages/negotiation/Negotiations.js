"use client";
import React, { useState } from "react";
import classes from "./Negotiations.module.css";
import { IoMdSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import VendorChat from "./vendorChat/VendorChat";
import Pending_invoices from "./previous_pending_invoices/Pending_invoices";
import Previous_invoices from "./previous_pending_invoices/Previous_invoices";
import {
    MdKeyboardDoubleArrowRight,
    MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
const Negotiations = () => {
    const router = useSearchParams();
    const router2 = useRouter();
    const contentVendorDataToggle = router.get("vendorData") || "chat";
    const [showPart3, setShowPart3] = useState(false);
    const classPart3 = `${classes.part3} ${showPart3 ? classes.active : ""}`;
    return (
        <div className="py-4 h-full">
            <main className={`mainContainer ${classes.main}`}>
                <section className={classes.part1}>
                    <div className={classes.head}>
                        <div className={classes.search}>
                            <IoMdSearch className={classes.icon} />
                            <input
                                type="text"
                                placeholder="ابحث عن احدى عمليات التفاوض"
                            />
                        </div>
                        <div className="flex items-center justify-center text-4xl cursor-pointer text-gray-700">
                            <IoFilter className={classes.icon} />
                        </div>
                    </div>
                    <div className="w-11/12 m-auto overflow-hidden">
                        <hr />
                    </div>
                    <div className={classes.allNegotiation}>
                        <div className={classes.vendors}>
                            <p>الموردين</p>
                            <ul>
                                <li>
                                    <div className={classes.image}>
                                        <img
                                            src="/images/comma.jpg"
                                            alt="image"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className={classes.image}>
                                        <img
                                            src="/images/comma.jpg"
                                            alt="image"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className={classes.image}>
                                        <img
                                            src="/images/comma.jpg"
                                            alt="image"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className={classes.image}>
                                        <img
                                            src="/images/comma.jpg"
                                            alt="image"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className={classes.image}>
                                        <img
                                            src="/images/comma.jpg"
                                            alt="image"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className={classes.image}>
                                        <img
                                            src="/images/comma.jpg"
                                            alt="image"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div className={classes.image}>
                                        <img
                                            src="/images/comma.jpg"
                                            alt="image"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <hr />
                        </div>
                        <section className={classes.containerVendorData}>
                            <div className={classes.vendorData}>
                                <div className={classes.head}>
                                    <div className={classes.image}>
                                        <img
                                            src="/images/comma.jpg"
                                            alt="image"
                                        />
                                    </div>
                                    <div>
                                        <p className="flex flex-col gap-2">
                                            <span className="text-3xl font-medium">
                                                شركه عالم الدواء
                                            </span>
                                            <span className="text-xl">
                                                تجرى محادثات التفاوض بدايه من
                                                الساعه 9 صباحا حتى ال9 مساء
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.view}>
                                <ul className={classes.toggleVendorData}>
                                    <li>
                                        <Link
                                            className={
                                                contentVendorDataToggle ==
                                                "chat"
                                                    ? classes.active
                                                    : ""
                                            }
                                            href={{
                                                pathname: "/negotiation",
                                                query: { vendorData: "chat" },
                                            }}
                                        >
                                            <p>المحادثه</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={
                                                contentVendorDataToggle ==
                                                "Pending_invoices"
                                                    ? classes.active
                                                    : ""
                                            }
                                            href={{
                                                pathname: "/negotiation",
                                                query: {
                                                    vendorData:
                                                        "Pending_invoices",
                                                },
                                            }}
                                        >
                                            <p>الفواتير المعلقه</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={
                                                contentVendorDataToggle ==
                                                "Previous_invoices"
                                                    ? classes.active
                                                    : ""
                                            }
                                            href={{
                                                pathname: "/negotiation",
                                                query: {
                                                    vendorData:
                                                        "Previous_invoices",
                                                },
                                            }}
                                        >
                                            <p>الفواتير السابقه</p>
                                        </Link>
                                    </li>
                                </ul>
                                <div>
                                    {contentVendorDataToggle === "chat" && (
                                        <>
                                            <VendorChat />
                                        </>
                                    )}
                                    {contentVendorDataToggle ===
                                        "Previous_invoices" && (
                                        <>
                                            <Previous_invoices />
                                        </>
                                    )}
                                    {contentVendorDataToggle ===
                                        "Pending_invoices" && (
                                        <>
                                            <Pending_invoices />
                                        </>
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <section className={classes.part2}>
                    <div className={classes.head}>
                        <div className="flex items-center gap-4">
                            <div className={classes.image}>
                                <img src="/images/comma.jpg" alt="image" />
                            </div>
                            <div>
                                <div>
                                    <p className="text-3xl pb-1">
                                        شركه عالم الدواء
                                    </p>
                                    <p className="text-xl text-gray-400">
                                        فاتوره رقم :{" "}
                                        <span className="font-semibold pl-4">
                                            45781
                                        </span>
                                        <span>معلقه</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={classes.iconActivePart3}
                            onClick={() => {
                                setShowPart3(true);
                            }}
                        >
                            <MdKeyboardDoubleArrowRight />
                        </div>
                    </div>
                    <div className="overflow-y-auto">
                        <div className={classes.products}>
                            <div>
                                <div className="flex justify-between items-center">
                                    <p className="text-3xl font-medium">
                                        اسم البراند
                                    </p>
                                    <p className="flex flex-col text-gray-300">
                                        <span className="text-xl ">
                                            عدد المنتجات : 2
                                        </span>
                                        <span className="text-xl">
                                            الاجمالى : 4500 ر.س
                                        </span>
                                    </p>
                                </div>
                                <div className={classes.data}>
                                    <ul className="font-medium text-2xl">
                                        <li>المنتج</li>
                                        <li>الكميه</li>
                                        <li>السعر</li>
                                    </ul>
                                    <ul className="text-2xl">
                                        <li>بكر رسم قلب</li>
                                        <li>50</li>
                                        <li>10</li>
                                    </ul>
                                    <ul className="text-2xl">
                                        <li>قسطرة رايل - التراميد</li>
                                        <li>10</li>
                                        <li>50</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <p className="text-3xl font-medium">
                                        اسم البراند
                                    </p>
                                    <p className="flex flex-col text-gray-300">
                                        <span className="text-xl ">
                                            عدد المنتجات : 2
                                        </span>
                                        <span className="text-xl">
                                            الاجمالى : 4500 ر.س
                                        </span>
                                    </p>
                                </div>
                                <div className={classes.data}>
                                    <ul className="font-medium text-2xl">
                                        <li>المنتج</li>
                                        <li>الكميه</li>
                                        <li>السعر</li>
                                    </ul>
                                    <ul className="text-2xl">
                                        <li>بكر رسم قلب</li>
                                        <li>50</li>
                                        <li>10</li>
                                    </ul>
                                    <ul className="text-2xl">
                                        <li>قسطرة رايل - التراميد</li>
                                        <li>10</li>
                                        <li>50</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <p className="text-3xl font-medium">
                                        اسم البراند
                                    </p>
                                    <p className="flex flex-col text-gray-300">
                                        <span className="text-xl ">
                                            عدد المنتجات : 2
                                        </span>
                                        <span className="text-xl">
                                            الاجمالى : 4500 ر.س
                                        </span>
                                    </p>
                                </div>
                                <div className={classes.data}>
                                    <ul className="font-medium text-2xl">
                                        <li>المنتج</li>
                                        <li>الكميه</li>
                                        <li>السعر</li>
                                    </ul>
                                    <ul className="text-2xl">
                                        <li>بكر رسم قلب</li>
                                        <li>50</li>
                                        <li>10</li>
                                    </ul>
                                    <ul className="text-2xl">
                                        <li>قسطرة رايل - التراميد</li>
                                        <li>10</li>
                                        <li>50</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <p className="text-3xl font-medium">
                                        اسم البراند
                                    </p>
                                    <p className="flex flex-col text-gray-300">
                                        <span className="text-xl ">
                                            عدد المنتجات : 2
                                        </span>
                                        <span className="text-xl">
                                            الاجمالى : 4500 ر.س
                                        </span>
                                    </p>
                                </div>
                                <div className={classes.data}>
                                    <ul className="font-medium text-2xl">
                                        <li>المنتج</li>
                                        <li>الكميه</li>
                                        <li>السعر</li>
                                    </ul>
                                    <ul className="text-2xl">
                                        <li>بكر رسم قلب</li>
                                        <li>50</li>
                                        <li>10</li>
                                    </ul>
                                    <ul className="text-2xl">
                                        <li>قسطرة رايل - التراميد</li>
                                        <li>10</li>
                                        <li>50</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={classPart3}>
                    <div className={classes.head}>
                        <p className="text-4xl font-medium">الفواتير</p>
                        <div
                            className={classes.iconUnActivePart3}
                            onClick={() => {
                                setShowPart3(false);
                            }}
                        >
                            <MdOutlineKeyboardDoubleArrowLeft />
                        </div>
                    </div>
                    <div>
                        <ul className={classes.allData}>
                            <li>
                                <p>فواتير معلقه</p>
                                <p>7</p>
                            </li>
                            <li>
                                <p>موردين معلقين</p>
                                <p>7</p>
                            </li>
                            <li>
                                <p>انتظار التأكيد</p>
                                <p>7</p>
                            </li>
                        </ul>
                    </div>
                    <div className="py-2">
                        <hr />
                    </div>
                    <div></div>
                </section>
            </main>
        </div>
    );
};

export default Negotiations;
