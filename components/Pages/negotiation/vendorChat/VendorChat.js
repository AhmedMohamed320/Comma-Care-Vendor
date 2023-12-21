import React from "react";
import classes from "./VendorChat.module.css";
import { IoSend } from "react-icons/io5";
const VendorChat = () => {
    return (
        <>
            <main className={classes.main}>
                <div>test</div>
                <div className={classes.containerInput}>
                    <input type="text" placeholder="اكتب رساله" />
                    <IoSend className={classes.icon}/>
                </div>
            </main>
        </>
    );
};

export default VendorChat;
