import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/modules/auth.module.scss";
import Validator from "validatorjs";
import { authService } from "../../services";
import { Snackbar } from "../../components/Reusable/Snackbar";
import { useRouter } from "next/router";
import { isAuthed } from "../../middlewares/auth";

export default function Login() {
    const router = useRouter();

    const emailOrUsernameContainer = useRef(null);
    const passWordContainer = useRef(null);

    const initialErrors = {
        email: [],
        password: [],
    };

    const [errors, setErrors] = useState(initialErrors);

    const [snackBar, setSnackbar] = useState({
        open: false,
        success: false,
        message: "Invalid email or password",
    });

    const getValue = (container) => container.current.value;

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

    const submitForm = async (event) => {
        try {
            event.preventDefault();
            const user = {
                email: getValue(emailOrUsernameContainer),
                password: getValue(passWordContainer),
            };

            let valid = new Validator(user, {
                email: "required|min:4",
                password: "required|string|min:8",
            });

            if (valid.fails(undefined))
                return setErrors({ ...initialErrors, ...valid.errors.all() });

            if (valid.passes(undefined)) {
                setErrors(initialErrors);
                let data = await authService.login(user);
                if (data.data.token) {
                    sessionStorage.setItem("token", data.data.token);
                    setSnackbar({
                        open: true,
                        success: true,
                        message: "You have successfully logged in",
                    });
                    window.location.href = "/";
                }
            }
        } catch (e) {
            console.log(e);
            if (e.response.status === 400)
                return setErrors({ ...initialErrors, ...e.response.data });
            if (e.response.status === 404)
                return setSnackbar({
                    ...snackBar,
                    open: true,
                    success: false,
                    message: e.response.data.message,
                });
        }
    };

    return (
        <div>
            <Head>
                <title>Log in - baza.com </title>
            </Head>
            <div className="row mx-0">
                <div className="col-8">
                    <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
                        <h1 className="font-weight-bolder _color-primary pb-5">
                            Log in into your account
                        </h1>
                        <form action="" onSubmit={submitForm}>
                            <div className="form-group">
                                <label htmlFor="email">Email or username</label>
                                <input
                                    type="text"
                                    ref={emailOrUsernameContainer}
                                    id="email"
                                    className={`form-control ${
                                        errors.email.length > 0 && "is-invalid"
                                    } _input`}
                                />
                                <div className="invalid-feedback">
                                    {errors.email[0]}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    ref={passWordContainer}
                                    id="password"
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
                                    SIGN IN
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-4 _bg-primary px-0 font-weight-bolder text-white text-center">
                    <div
                        className={`${styles.right_bar} d-flex flex-column align-items-center justify-content-center`}
                    >
                        <h1 className="pb-4 font-weight-bolder">
                            Hello, Friend !
                        </h1>
                        <p className="font-weight-light">
                            Enter your personal details to start <br /> journey
                            with us
                        </p>
                        <Link href={"/auth/register"}>
                            <button className="btn btn-side border border-white text-white px-5 py-2 my-5 rounded-pill">
                                SIGN UP
                            </button>
                        </Link>
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
        </div>
    );
}
