import React, { useState, useEffect, useRef } from "react";
import { DefaultLayout } from "../../layouts/Default";
import { authService } from "../../services";
import { isAuthed } from "../../middlewares/auth";
import { useRouter } from "next/router";
import Validator from "validatorjs";
import { Snackbar } from "../../components/Reusable/Snackbar";

const initialErrors = {
    full_name: [],
    username: [],
    email: [],
    title: [],
    bio: [],
    location: [],
    profile_pic: [],
};

export default function ProfilePage() {
    const fullNamesContainer = useRef(null);
    const userNameContainer = useRef(null);
    const emailContainer = useRef(null);

    const titleContainer = useRef(null);
    const bioContainer = useRef(null);
    const locationContainer = useRef(null);

    const currentPasswordContainer = useRef(null);
    const newPasswordContainer = useRef(null);
    const confirmPasswordContainer = useRef(null);

    const [profile, setProfile] = useState({
        _id: "",
        email: "",
        full_name: "",
        questionsDoc: 8,
        username: "",
        profile: {
            _id: "",
            user_id: "",
            title: "",
            bio: "",
            location: "",
            created_at: "",
        },
    });

    const [errors, setErrors] = useState(initialErrors);

    const [snackBar, setSnackbar] = useState({
        open: false,
        success: false,
        message: "Invalid email or password",
    });

    const handleClose = () => {
        setSnackbar({ ...snackBar, open: false });
    };

    const router = useRouter();

    const changePassword = () => {
        try {
        } catch (e) {}
    };

    const updateProfile = async () => {
        try {
            const user = {
                full_name: get_value(fullNamesContainer),
                username: get_value(userNameContainer),
                email: get_value(emailContainer),
                title: get_value(titleContainer),
                bio: get_value(bioContainer),
                location: get_value(locationContainer),
                profile_pic: "https://www.w3schools.com/w3images/avatar5.png",
            };

            let valid = new Validator(user, {
                full_name: "required|string|max:255|min:3",
                username: "required|string|max:255|min:3",
                email: "required|string|email|max:255|min:8",
                title: "required|string|min:3|max:100",
                bio: "required|string|min:3|max:500",
                location: "required|string|min:3|max:255",
                profile_pic: "required|url|min:3|max:255",
            });

            if (valid.fails(undefined)) {
                return setErrors({ ...initialErrors, ...valid.errors.all() });
            }

            if (valid.passes(undefined)) {
                setErrors(initialErrors);
                let { status } = await authService.edit_profile(user);
                if (status === 200) {
                    setSnackbar({
                        message: "Successfully updated the profile",
                        open: true,
                        success: true,
                    });
                }
            }
        } catch (e) {
            if (e.response.status === 400) {
                return setErrors({ ...initialErrors, ...e.response.data });
            }
        }
    };

    const get_value = (container) => container.current.value;

    useEffect(() => {
        const fetchData = async () => {
            let is_auth = await isAuthed();
            if (is_auth) {
                let { data } = await authService.profile();
                setProfile(data);
            } else await router.push("/auth/login");
        };
        fetchData().then();
    }, []);

    return (
        <DefaultLayout meta={{ title: "Profile Settings ... " }}>
            <div className="container">
                <form onSubmit={(event) => event.preventDefault()}>
                    <div className="row">
                        <div className="card col-9 px-0 mb-5">
                            <div className="card-header pt-4">
                                <h4>Update Your Profile</h4>
                            </div>
                            <div className="card-body">
                                <h5 className="py-3">Basic information</h5>
                                <div className="form-group row align-items-baseline">
                                    <label
                                        htmlFor="full_names"
                                        className="col-4"
                                    >
                                        Full names
                                    </label>
                                    <input
                                        type="text"
                                        id="full_names"
                                        className={`col-7 w-50 form-control ${
                                            errors.full_name.length > 0 &&
                                            "is-invalid"
                                        }`}
                                        defaultValue={profile.full_name}
                                        ref={fullNamesContainer}
                                    />
                                    <div className="invalid-feedback offset-4">
                                        {errors.full_name[0]}
                                    </div>
                                </div>
                                <div className="form-group row align-items-baseline">
                                    <label
                                        htmlFor="usernames"
                                        className="col-4"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        id="usernames"
                                        className={`col-7 w-50 form-control ${
                                            errors.username.length > 0 &&
                                            "is-invalid"
                                        }`}
                                        defaultValue={profile.username}
                                        ref={userNameContainer}
                                    />
                                    <div className="invalid-feedback offset-4">
                                        {errors.username[0]}
                                    </div>
                                </div>
                                <div className="form-group row align-items-baseline">
                                    <label htmlFor="email" className="col-4">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        className={`col-7 w-50 form-control ${
                                            errors.email.length > 0 &&
                                            "is-invalid"
                                        }`}
                                        defaultValue={profile.email}
                                        ref={emailContainer}
                                    />
                                    <div className="invalid-feedback offset-4">
                                        {errors.email[0]}
                                    </div>
                                </div>
                                <hr />
                                <h5 className="py-3">Profile information</h5>
                                <div className="form-group row align-items-baseline">
                                    <label htmlFor="title" className="col-4">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        className={`col-7 w-50 form-control ${
                                            errors.title.length > 0 &&
                                            "is-invalid"
                                        }`}
                                        defaultValue={profile.profile.title}
                                        ref={titleContainer}
                                    />
                                    <div className="invalid-feedback offset-4">
                                        {errors.title[0]}
                                    </div>
                                </div>
                                <div className="form-group row align-items-baseline">
                                    <label
                                        htmlFor="usernames"
                                        className="col-4"
                                    >
                                        Bio
                                    </label>
                                    <textarea
                                        rows={5}
                                        id="usernames"
                                        className={`col-7 w-50 form-control ${
                                            errors.bio.length > 0 &&
                                            "is-invalid"
                                        }`}
                                        defaultValue={profile.profile.bio}
                                        ref={bioContainer}
                                    />
                                    <div className="invalid-feedback offset-4">
                                        {errors.bio[0]}
                                    </div>
                                </div>
                                <div className="form-group row align-items-baseline">
                                    <label htmlFor="location" className="col-4">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        className={`col-7 w-50 form-control ${
                                            errors.location.length > 0 &&
                                            "is-invalid"
                                        }`}
                                        defaultValue={profile.profile.location}
                                        ref={locationContainer}
                                    />
                                    <div className="invalid-feedback offset-4">
                                        {errors.location[0]}
                                    </div>
                                </div>
                                <hr />
                                <h5 className="py-3">Update Password</h5>
                                <div className="form-group row align-items-baseline">
                                    <div className="col-4">
                                        <label htmlFor="current_password">
                                            Current password
                                        </label>
                                        <input
                                            type="text"
                                            id="current_password"
                                            className="form-control"
                                            ref={currentPasswordContainer}
                                        />
                                    </div>
                                    <div className="col-4">
                                        <label htmlFor="new_password">
                                            New password
                                        </label>
                                        <input
                                            type="text"
                                            id="new_password"
                                            className="form-control"
                                            ref={newPasswordContainer}
                                        />
                                    </div>
                                    <div className="col-4">
                                        <label htmlFor="confirm_password">
                                            Confirm password
                                        </label>
                                        <input
                                            type="text"
                                            id="confirm_password"
                                            className="form-control"
                                            ref={confirmPasswordContainer}
                                        />
                                    </div>
                                    <button
                                        disabled
                                        type="submit"
                                        className="btn btn-info px-5 ml-3 mt-4"
                                        onClick={changePassword}
                                    >
                                        Change password
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card _profile-actions">
                                <div className="d-flex justify-content-between p-3">
                                    <button
                                        type="submit"
                                        className="btn btn-info px-4"
                                        onClick={updateProfile}
                                    >
                                        SAVE
                                    </button>
                                    <button
                                        type="reset"
                                        className="btn btn-outline-danger px-4"
                                        data-dismiss="modal"
                                    >
                                        RESET
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <Snackbar
                    open={snackBar.open}
                    success={snackBar.success}
                    counts={3000}
                    message={snackBar.message}
                    handleClose={handleClose}
                />
            </div>
        </DefaultLayout>
    );
}
