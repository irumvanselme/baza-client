import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import styles from "../styles/modules/app.module.scss";

import { Logo } from "./Logo";
import { useRouter } from "next/router";
import { authService } from "../services";

export const Navbar = ({ auth }) => {
    const [username, setUsername] = useState("...");
    const searchContainer = useRef(null)
    const router = useRouter();
    const search = async (event) => {
        event.preventDefault();
        await router.push({ pathname: "/search", query: { query:  searchContainer.current.value}});
    };

    useEffect(() => {
        const fetchData = async () => {
            let { data } = await authService.profile();
            setUsername(data.username);
        };

        if (auth) {
            fetchData().then();
        }
    }, [auth]);

    const logOut = async () => {
        sessionStorage.removeItem("token");
        await router.push("/auth/login");
    };

    return (
        <div className={styles.navbar}>
            <div className="d-flex justify-content-between align-items-center h-100 px-2 px-lg-5 mx-lg-5">
                <div>
                    <Logo />
                </div>
                <div className="d-none d-md-block">
                    <form onSubmit={search}>
                        <input
                            type="search"
                            className="form-control font-weight-normal"
                            placeholder="Search ... "
                            ref={searchContainer}
                        />
                    </form>
                </div>
                <div>
                    {!auth ? (
                        <React.Fragment>
                            <Link href={"/auth/login"}>Login</Link>
                            <Link href={"/auth/register"}>Register</Link>
                            <button
                                className="btn btn-success"
                                data-toggle="modal"
                                data-target="#askQuestion"
                            >
                                Ask a question
                            </button>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <img
                                src="https://www.w3schools.com/w3images/avatar5.png"
                                className="_navbar-avatar mr-3"
                                alt="Avatar"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            />
                            <div
                                className="dropdown-menu dropdown-menu-right shadow"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <span className="dropdown-item-text font-weight-bolder">
                                    {username}
                                </span>
                                <Link href={"/profile"} passHref>
                                    <a className="dropdown-item">
                                        Account
                                    </a>
                                </Link>
                                <Link href={"/profile/settings"} passHref>
                                    <a className="dropdown-item">
                                        Profile Settings
                                    </a>
                                </Link>
                                <a className="dropdown-item" onClick={logOut}>
                                    Log out
                                </a>
                            </div>
                            <button
                                className="btn btn-success"
                                data-toggle="modal"
                                data-target="#askQuestion"
                            >
                                Ask a question
                            </button>
                        </React.Fragment>
                    )}
                </div>
            </div>
        </div>
    );
};
