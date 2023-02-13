import React, { useEffect, useRef, useState } from "react";
import Validator from "validatorjs";
import { useRouter } from "next/router";
import TopicService from "../../services/topic.service";
import QuestionsService from "../../services/questions.service";
import { Snackbar } from "../Reusable/Snackbar";
import $ from "jquery";
import { isAuthed } from "../../middlewares/auth";

export function AskAQuestion({ askNewQuestion }) {
    const router = useRouter();
    const topicContainer = useRef(null);
    const titleContainer = useRef(null);
    const descriptionContainer = useRef(null);

    const [snackBar, setSnackbar] = useState({
        open: false,
        success: false,
        message: "You have successfully created an question",
    });

    const initalErrors = {
        topic: [],
        title: [],
        body: [],
    };

    const [errors, setErrors] = useState(initalErrors);

    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let data = await TopicService.get_all();
            setTopics(data.data);
        };
        fetchData().then();
    }, []);

    const getValue = (container) => container.current.value;

    const handleClose = () => {
        setSnackbar({ ...snackBar, open: false });
    };

    const submitForm = async (event) => {
        event.preventDefault();
        let is_authed = await isAuthed();
        if (!is_authed) {
            $("#askQuestion").modal("hide");
            return await router.push("/auth/login");
        }
        try {
            const question = {
                topics: [getValue(topicContainer)],
                title: getValue(titleContainer),
                body: getValue(descriptionContainer),
            };

            let valid = new Validator(question, {
                topics: "required|array",
                title: "required|string|min:4",
                body: "string|required|min:10",
                // tags: "string|min:8"
            });

            if (valid.fails(undefined))
                return setErrors({ ...initalErrors, ...valid.errors.all() });

            if (valid.passes(undefined)) {
                setErrors({ ...initalErrors, ...valid.errors.all() });
                let data = await QuestionsService.create(question);
                askNewQuestion(data.data);
                if (data.status === 201) {
                    $("#askQuestion").modal("hide");
                    setSnackbar({
                        open: true,
                        success: true,
                        message: "You have successfully created a question",
                    });
                }
            }
        } catch (e) {
            if (e.response.status === 400)
                return setErrors({ ...initalErrors, ...e.response.data });
        }
    };

    return (
        <div>
            <div
                className="modal fade"
                id="askQuestion"
                tabIndex="-1"
                role="dialog"
            >
                <div
                    className="modal-dialog modal-lg modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content card p-3 pt-4 px-sm-5">
                        <form action="" onSubmit={submitForm}>
                            <div className="pb-4">
                                <div className="d-flex justify-content-between align-items-start">
                                    <h4 className="font-weight-bold py-2 pb-4">
                                        Ask your question
                                    </h4>
                                    <div className="d-flex align-items-center">
                                        <div>In</div>
                                        <div>
                                            <select
                                                className="form-control font-weight-bolder border-0 "
                                                ref={topicContainer}
                                            >
                                                {topics.map((topic, i) => (
                                                    <option
                                                        value={topic._id}
                                                        key={i}
                                                    >
                                                        {topic.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.title.length > 0 && "is-invalid"
                                    }  _bg-light-gray`}
                                    placeholder="Eg: How much eggs can a hen lay at a time"
                                    ref={titleContainer}
                                />
                                <div className="invalid-feedback">
                                    {errors.title[0]}
                                </div>

                                <div className="form-group mt-3">
                                    <label
                                        htmlFor="description"
                                        className="font-weight-bold"
                                    >
                                        Explain your question (optional)
                                    </label>
                                    <textarea
                                        name=""
                                        id="description"
                                        rows={4}
                                        className={`form-control ${
                                            errors.body.length > 0 &&
                                            "is-invalid"
                                        }  _bg-light-gray`}
                                        ref={descriptionContainer}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.body[0]}
                                    </div>
                                </div>

                                {/*<div className="form-group">*/}
                                {/*    <label htmlFor="tags" className="font-weight-bold">Tags</label>*/}
                                {/*    <input name="" id="tags" className={`form-control ${ errors.tags.length > 0 && 'is-invalid' }  _bg-light-gray`} ref={ tagsContainer }/>*/}
                                {/*    <div className="invalid-feedback">{errors.tags[0]}</div>*/}
                                {/*</div>*/}
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="btn btn-outline-info mx-4 px-4"
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-danger px-4"
                                    data-dismiss="modal"
                                >
                                    Close
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
