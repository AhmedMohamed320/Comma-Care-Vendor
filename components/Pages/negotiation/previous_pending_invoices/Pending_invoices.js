import React from "react";
import classes from "./Style_Previous_Pending_invoices.module.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const Pending_invoices = () => {
    const router = useSearchParams();
    const contentVendorDataToggle = router.get("invoicesId") || "";
    const handleNavigation = () => {
        const queryParams = new URLSearchParams(router.query);
        queryParams.append("invoicesId", invoicesId);
        router.push({
            pathname: "/negotiation",
            query: queryParams.toString(),
        });
    };

    return (
        <main className={classes.main}>
            <ul>
                <li>
                    <Link
                        className={true ? classes.active : ""}
                        href={{
                            pathname: "/negotiation",
                            query: {
                                vendorData: "Pending_invoices",
                                invoicesId: "45781",
                            },
                        }}
                    >
                        <div className="text-xl flex items-center justify-between pb-3">
                            <p>
                                رقم الفاتوره /{" "}
                                <span className="font-semibold">45781</span>
                            </p>
                            <p>
                                القيمه :{" "}
                                <span className="font-semibold">4570 ر.س</span>
                            </p>
                        </div>
                        <p className="text-xl">
                            تم الطلب بتوقيت : 2023/12/21 - 07:01 م
                        </p>
                    </Link>
                </li>
                <li>
                    <Link
                        className={
                            contentVendorDataToggle == "Pending_invoices"
                                ? classes.active
                                : ""
                        }
                        href={{
                            pathname: "/negotiation",
                            query: {
                                vendorData: "Pending_invoices",
                                invoicesId: "45781",
                            },
                        }}
                    >
                        <div
                            className={`text-xl flex items-center justify-between pb-3`}
                        >
                            <p>
                                رقم الفاتوره /{" "}
                                <span className="font-semibold">45781</span>
                            </p>
                            <p>
                                القيمه :{" "}
                                <span className="font-semibold">4570 ر.س</span>
                            </p>
                        </div>
                        <p className="text-xl">
                            تم الطلب بتوقيت : 2023/12/21 - 07:01 م
                        </p>
                    </Link>
                </li>
                <li>
                    <Link
                        className={
                            contentVendorDataToggle == "Pending_invoices"
                                ? classes.active
                                : ""
                        }
                        href={{
                            pathname: "/negotiation",
                            query: {
                                vendorData: "Pending_invoices",
                                invoicesId: "45781",
                            },
                        }}
                    >
                        <div className="text-xl flex items-center justify-between pb-3">
                            <p>
                                رقم الفاتوره /{" "}
                                <span className="font-semibold">45781</span>
                            </p>
                            <p>
                                القيمه :{" "}
                                <span className="font-semibold">4570 ر.س</span>
                            </p>
                        </div>
                        <p className="text-xl">
                            تم الطلب بتوقيت : 2023/12/21 - 07:01 م
                        </p>
                    </Link>
                </li>
                <li>
                    <Link
                        className={
                            contentVendorDataToggle == "Pending_invoices"
                                ? classes.active
                                : ""
                        }
                        href={{
                            pathname: "/negotiation",
                            query: {
                                vendorData: "Pending_invoices",
                                invoicesId: "45781",
                            },
                        }}
                    >
                        <div className="text-xl flex items-center justify-between pb-3">
                            <p>
                                رقم الفاتوره /{" "}
                                <span className="font-semibold">45781</span>
                            </p>
                            <p>
                                القيمه :{" "}
                                <span className="font-semibold">4570 ر.س</span>
                            </p>
                        </div>
                        <p className="text-xl">
                            تم الطلب بتوقيت : 2023/12/21 - 07:01 م
                        </p>
                    </Link>
                </li>
            </ul>
        </main>
    );
};

export default Pending_invoices;
