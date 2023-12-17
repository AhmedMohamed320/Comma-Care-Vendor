import { Fragment } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import classes from "./CategoryAndSub.module.css";
import Link from "next/link";

const CategoryAndSub = (props) => {
    return (
        <Fragment>
            <section className={classes.section}>
                <ul>
                    <li>
                        <Link href="">
                            <p>قسم</p>
                            <MdOutlineKeyboardArrowLeft />
                        </Link>
                        <ul>
                            <li>
                                <Link href="">قسم</Link>
                            </li>
                        </ul>
                    </li>
                    {/* {props.data&&props.data.data.map((category) => {
                        return (
                            <li key={category.id}>
                                <Link href="">
                                    <p>{category.nameAr}</p>
                                    <MdOutlineKeyboardArrowLeft />
                                </Link>
                                <ul>
                                    {category.subcategories.map((sub) => {
                                        return (
                                            <li key={sub.id}>
                                                <Link href={`/category/${category.name}/${sub.id}/2`}>
                                                    {sub.nameAr}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </li>
                        );
                    })} */}
                </ul>
            </section>
        </Fragment>
    );
};

export default CategoryAndSub;
