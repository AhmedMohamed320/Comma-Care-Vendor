import React from "react";
import classes from "./Negotiations.module.css";
import { IoMdSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
const Negotiations = () => {
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
                        <p>لم يبدأ التفاوض</p>
                        <ul>
                            <li>
                                <div className={classes.image}>
                                    <img src="/images/comma.jpg" alt="image" />
                                </div>
                                <div className={classes.details}>
                                    <p className="flex items-center justify-between pb-2">
                                        <span className="text-2xl font-medium">
                                            شركه عالم الدواء
                                        </span>
                                        <span className="text-xl">
                                            20/12/2023
                                        </span>
                                    </p>
                                    <p className="text-xl">
                                        قيمه الفاتوره :{" "}
                                        <span className="font-semibold">
                                            5480
                                        </span>{" "}
                                        ر.س
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className={classes.image}>
                                    <img src="/images/comma.jpg" alt="image" />
                                </div>
                                <div className={classes.details}>
                                    <p className="flex items-center justify-between pb-2">
                                        <span className="text-2xl font-medium">
                                            شركه عالم الدواء
                                        </span>
                                        <span className="text-xl">
                                            20/12/2023
                                        </span>
                                    </p>
                                    <p className="text-xl">
                                        قيمه الفاتوره :{" "}
                                        <span className="font-semibold">
                                            5480
                                        </span>{" "}
                                        ر.س
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <p> جاري التفاوض</p>
                        <ul>
                            <li>
                                <div className={classes.image}>
                                    <img src="/images/comma.jpg" alt="image" />
                                </div>
                                <div className={classes.details}>
                                    <p className="flex items-center justify-between pb-2">
                                        <span className="text-2xl font-medium">
                                            شركه عالم الدواء
                                        </span>
                                        <span className="text-xl">
                                            20/12/2023
                                        </span>
                                    </p>
                                    <p className="text-xl">
                                        قيمه الفاتوره :{" "}
                                        <span className="font-semibold">
                                            5480
                                        </span>{" "}
                                        ر.س
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className={classes.image}>
                                    <img src="/images/comma.jpg" alt="image" />
                                </div>
                                <div className={classes.details}>
                                    <p className="flex items-center justify-between pb-2">
                                        <span className="text-2xl font-medium">
                                            شركه عالم الدواء
                                        </span>
                                        <span className="text-xl">
                                            20/12/2023
                                        </span>
                                    </p>
                                    <p className="text-xl">
                                        قيمه الفاتوره :{" "}
                                        <span className="font-semibold">
                                            5480
                                        </span>{" "}
                                        ر.س
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <p>انتهت عمليه التفاوض</p>
                        <ul>
                            <li>
                                <div className={classes.image}>
                                    <img src="/images/comma.jpg" alt="image" />
                                </div>
                                <div className={classes.details}>
                                    <p className="flex items-center justify-between pb-2">
                                        <span className="text-2xl font-medium">
                                            شركه عالم الدواء
                                        </span>
                                        <span className="text-xl">
                                            20/12/2023
                                        </span>
                                    </p>
                                    <p className="text-xl">
                                        قيمه الفاتوره :{" "}
                                        <span className="font-semibold">
                                            5480
                                        </span>{" "}
                                        ر.س
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className={classes.image}>
                                    <img src="/images/comma.jpg" alt="image" />
                                </div>
                                <div className={classes.details}>
                                    <p className="flex items-center justify-between pb-2">
                                        <span className="text-2xl font-medium">
                                            شركه عالم الدواء
                                        </span>
                                        <span className="text-xl">
                                            20/12/2023
                                        </span>
                                    </p>
                                    <p className="text-xl">
                                        قيمه الفاتوره :{" "}
                                        <span className="font-semibold">
                                            5480
                                        </span>{" "}
                                        ر.س
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className={classes.image}>
                                    <img src="/images/comma.jpg" alt="image" />
                                </div>
                                <div className={classes.details}>
                                    <p className="flex items-center justify-between pb-2">
                                        <span className="text-2xl font-medium">
                                            شركه عالم الدواء
                                        </span>
                                        <span className="text-xl">
                                            20/12/2023
                                        </span>
                                    </p>
                                    <p className="text-xl">
                                        قيمه الفاتوره :{" "}
                                        <span className="font-semibold">
                                            5480
                                        </span>{" "}
                                        ر.س
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className={classes.image}>
                                    <img src="/images/comma.jpg" alt="image" />
                                </div>
                                <div className={classes.details}>
                                    <p className="flex items-center justify-between pb-2">
                                        <span className="text-2xl font-medium">
                                            شركه عالم الدواء
                                        </span>
                                        <span className="text-xl">
                                            20/12/2023
                                        </span>
                                    </p>
                                    <p className="text-xl">
                                        قيمه الفاتوره :{" "}
                                        <span className="font-semibold">
                                            5480
                                        </span>{" "}
                                        ر.س
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={classes.part2}>
                    <div className={classes.head}>
                        <div className="flex items-center gap-4">
                            <div className={classes.image}>
                                <img src="/images/comma.jpg" alt="image" />
                            </div>
                            <div>
                                <p className="text-3xl pb-1">
                                    شركه عالم الدواء
                                </p>
                                <p className="text-xl text-gray-400">
                                    #4578415
                                </p>
                            </div>
                        </div>
                        <div className="text-xl text-gray-400">
                            <p>لم يبدأ التفاوض</p>
                        </div>
                    </div>
                    <div className={classes.content}></div>
                    <div className={classes.input}>
                        <p>أرسل طلب بدأ التفاوض وتحديد سعر مبدائي</p>
                    </div>
                </section>
                <section className={classes.part3}>
                    <div className={classes.head}>
                        <p className="text-4xl font-medium">الفاتوره</p>
                        <p className="flex flex-col text-xl text-center">
                            <span>حسب التحديث الاخير من الطرفين</span>
                            <span>بتوقيت : 20/12/2023 - 01:05 م</span>
                        </p>
                    </div>
                    <div className="w-11/12 m-auto overflow-hidden">
                        <hr />
                    </div>
                    <div className={classes.products}>
                        <div>
                            <p className="flex justify-between items-center px-4">
                                <span className="text-3xl">براند</span>
                                <span className="text-xl">
                                    عدد المنتجات : 2
                                </span>
                            </p>
                            <div className={classes.data}>
                                <ul className="font-medium text-2xl">
                                    <li>المنتج</li>
                                    <li>الكميه</li>
                                    <li>السعر</li>
                                </ul>
                                <ul className="text-xl">
                                    <li>بكر رسم قلب</li>
                                    <li>50</li>
                                    <li>10</li>
                                </ul>
                                <ul className="text-xl">
                                    <li>قسطرة رايل - التراميد</li>
                                    <li>10</li>
                                    <li>50</li>
                                </ul>
                            </div>
                            <div>
                                <p className="flex items-center justify-between p-2 text-2xl font-medium">
                                    <span>الاجمالى:</span>
                                    <span>4500 ر.س</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="flex justify-between items-center px-4">
                                <span className="text-3xl">براند</span>
                                <span className="text-xl">
                                    عدد المنتجات : 2
                                </span>
                            </p>
                            <div className={classes.data}>
                                <ul className="font-medium text-2xl">
                                    <li>المنتج</li>
                                    <li>الكميه</li>
                                    <li>السعر</li>
                                </ul>
                                <ul className="text-xl">
                                    <li>بكر رسم قلب</li>
                                    <li>50</li>
                                    <li>10</li>
                                </ul>
                                <ul className="text-xl">
                                    <li>قسطرة رايل - التراميد</li>
                                    <li>10</li>
                                    <li>50</li>
                                </ul>
                            </div>
                            <div>
                                <p className="flex items-center justify-between p-2 text-2xl font-medium">
                                    <span>الاجمالى:</span>
                                    <span>4500 ر.س</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="flex justify-between items-center px-4">
                                <span className="text-3xl">براند</span>
                                <span className="text-xl">
                                    عدد المنتجات : 2
                                </span>
                            </p>
                            <div className={classes.data}>
                                <ul className="font-medium text-2xl">
                                    <li>المنتج</li>
                                    <li>الكميه</li>
                                    <li>السعر</li>
                                </ul>
                                <ul className="text-xl">
                                    <li>بكر رسم قلب</li>
                                    <li>50</li>
                                    <li>10</li>
                                </ul>
                                <ul className="text-xl">
                                    <li>قسطرة رايل - التراميد</li>
                                    <li>10</li>
                                    <li>50</li>
                                </ul>
                            </div>
                            <div>
                                <p className="flex items-center justify-between p-2 text-2xl font-medium">
                                    <span>الاجمالى:</span>
                                    <span>4500 ر.س</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="flex justify-between items-center px-4">
                                <span className="text-3xl">براند</span>
                                <span className="text-xl">
                                    عدد المنتجات : 2
                                </span>
                            </p>
                            <div className={classes.data}>
                                <ul className="font-medium text-2xl">
                                    <li>المنتج</li>
                                    <li>الكميه</li>
                                    <li>السعر</li>
                                </ul>
                                <ul className="text-xl">
                                    <li>بكر رسم قلب</li>
                                    <li>50</li>
                                    <li>10</li>
                                </ul>
                                <ul className="text-xl">
                                    <li>قسطرة رايل - التراميد</li>
                                    <li>10</li>
                                    <li>50</li>
                                </ul>
                            </div>
                            <div>
                                <p className="flex items-center justify-between p-2 text-2xl font-medium">
                                    <span>الاجمالى:</span>
                                    <span>4500 ر.س</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="flex justify-between items-center px-4">
                                <span className="text-3xl">براند</span>
                                <span className="text-xl">
                                    عدد المنتجات : 2
                                </span>
                            </p>
                            <div className={classes.data}>
                                <ul className="font-medium text-2xl">
                                    <li>المنتج</li>
                                    <li>الكميه</li>
                                    <li>السعر</li>
                                </ul>
                                <ul className="text-xl">
                                    <li>بكر رسم قلب</li>
                                    <li>50</li>
                                    <li>10</li>
                                </ul>
                                <ul className="text-xl">
                                    <li>قسطرة رايل - التراميد</li>
                                    <li>10</li>
                                    <li>50</li>
                                </ul>
                            </div>
                            <div>
                                <p className="flex items-center justify-between p-2 text-2xl font-medium">
                                    <span>الاجمالى:</span>
                                    <span>4500 ر.س</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Negotiations;
