import React, { useRef, useState, useEffect } from "react";
import Validator from "validatorjs";

import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/modules/auth.module.scss";
import { authService } from "../../services";
import { isAuthed } from "../../middlewares/auth";
import { useRouter } from "next/router";
import { Snackbar } from "../../components/Reusable/Snackbar";

export default function Register() {
    const [snackBar, setSnackbar] = useState({
        open: false,
        success: false,
        message: "Invalid email or password",
    });
    const router = useRouter();

    const fullNameContainer = useRef(null);
    const emailContainer = useRef(null);
    const userNameContainer = useRef(null);
    const passWordContainer = useRef(null);

    const initialErrors = {
        full_name: [],
        email: [],
        username: [],
        password: [],
    };

    const [errors, setErrors] = useState(initialErrors);

    const handleClose = () => {
        setSnackbar({ ...snackBar, open: false });
    };

    useEffect(() => {
        const fetchData = async () => {
            let is_authed = await isAuthed();
            if (is_authed) return await router.push("/");
        };
        fetchData().then();
    }, []);

    const getValue = (container) => container.current.value;

    const submitForm = async (event) => {
        try {
            event.preventDefault();
            const user = {
                full_name: getValue(fullNameContainer),
                email: getValue(emailContainer),
                username: getValue(userNameContainer),
                password: getValue(passWordContainer),
            };

            let valid = new Validator(user, {
                full_name: "required|string|min:3",
                email: "required|email",
                username: "required|string|min:3",
                password: "required|string|min:8",
            });

            if (valid.fails(undefined))
                return setErrors((errors) => {
                    return { ...errors, ...valid.errors.all() };
                });

            if (valid.passes(undefined)) {
                setErrors((errors) => {
                    return { ...errors, ...valid.errors.all() };
                });
                let data = await authService.register(user);
                sessionStorage.setItem("token", data.data.token);
                setSnackbar({
                    open: true,
                    success: true,
                    message: "You have successfully Registered",
                });
                window.location.href = "/";
            }
        } catch (e) {
            console.log("A very big bug");
            setErrors({ ...initialErrors, ...e.response.data });
        }
    };

    return (
        <div>
            <Head>
                <title>Register - baza.com </title>
            </Head>
            <div className="row mx-0">
                <div className="col-4 _bg-primary px-0 font-weight-bolder text-white text-center">
                    <div
                        className={`${styles.right_bar} d-flex flex-column align-items-center justify-content-center`}
                    >
                        <h1 className="pb-4 font-weight-bolder">
                            Welcome back !
                        </h1>
                        <p className="font-weight-light">
                            To keep connected with us <br /> provide with us
                            your info
                        </p>
                        <Link href={`/auth/login`}>
                            <button className="btn btn-side border border-white text-white px-5 py-2 my-5 rounded-pill">
                                SIGN IN
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-8">
                    <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
                        <h1 className="font-weight-bolder _color-primary pb-4">
                            Create Account
                        </h1>
                        <form onSubmit={submitForm}>
                            <div className="form-group">
                                <label htmlFor="full_name">Full names</label>
                                <input
                                    type="text"
                                    id="full_name"
                                    ref={fullNameContainer}
                                    className={`form-control ${
                                        errors.full_name.length > 0 &&
                                        "is-invalid"
                                    } _input`}
                                />
                                <div className="invalid-feedback">
                                    {errors.full_name[0]}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    ref={emailContainer}
                                    className={`form-control ${
                                        errors.email.length > 0 && "is-invalid"
                                    } _input`}
                                />
                                <div className="invalid-feedback">
                                    {errors.email[0]}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_name">User name</label>
                                <input
                                    type="text"
                                    id="user_name"
                                    ref={userNameContainer}
                                    className={`form-control ${
                                        errors.username.length > 0 &&
                                        "is-invalid"
                                    } _input`}
                                />
                                <div className="invalid-feedback">
                                    {errors.username[0]}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    ref={passWordContainer}
                                    className={`form-control ${
                                        errors.password.length > 0 &&
                                        "is-invalid"
                                    } _input`}
                                />
                                <div className="invalid-feedback">
                                    {errors.password[0]}
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn _btn text-white px-5 py-2 my-4 rounded-pill"
                                >
                                    SIGN UP
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Snackbar
                open={snackBar.open}
                success={snackBar.success}
                counts={3000}
                message={snackBar.message}
                handleClose={handleClose}
            />
        </div>
    );
}
