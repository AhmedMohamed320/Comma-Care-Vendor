"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useCookies } from "react-cookie";
// import { useRouter } from "next/navigation";
import Nav from "./nav/Nav";
import Aside from "./aside/Aside";

const MainNav = (props) => {
    // const [cookies] = useCookies(["token"]);
    // const token = cookies["token"];
    const [showAside, setShowAside] = useState(false);

    // useEffect(() => {
    //     if (token) {
    //         const headers = {
    //             Authorization: `Bearer ${token}`,
    //         };

    //         axios
    //             .get(
    //                 `${process.env.NEXT_PUBLIC_BASEURL}/comma/authentication/current-user`,
    //                 { headers }
    //             )
    //             .then((response) => {
    //                 setUserData(response.data.data);
    //             })
    //             .catch((error) => {
    //                 console.error(error);
    //             });
    //     }
    // }, [token]);

    return (
        <>
            <div>
                <Nav
                    onShowAside={() => setShowAside(true)}
                    // userData={userData}
                />
                {showAside && (
                    <Aside
                        onHideAside={() => setShowAside(false)}
                        // data={props.data}
                        // userData={userData}
                    />
                )}
            </div>
        </>
    );
};

export default MainNav;
