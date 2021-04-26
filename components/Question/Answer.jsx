import React, { useRef, useState } from "react";
import Validator from "validatorjs";
import { isAuthed } from "../../middlewares/auth";
import { useRouter } from "next/router";
import QuestionsService from "../../services/questions.service";
import $ from "jquery";
import { Snackbar } from "../Reusable/Snackbar";

export function AnswerAQuestion({ question, answered }) {
    const router = useRouter();
    const answerContainer = useRef(null);
    const [errors, setErrors] = useState({ answer: [] });
    const getValue = (container) => container.current.value;

    const [snackBar, setSnackbar] = useState({
        open: false,
        success: false,
        message: "You have successfully answered the question",
    });

    const handleClose = () => {
        setSnackbar({ ...snackBar, open: false });
    };

    const submitForm = async (event) => {
        event.preventDefault();

        let is_authed = await isAuthed();
        if (!is_authed) {
            $("#answerQuestion" + question).modal("hide");
            return await router.push("/auth/login");
        }

        const answer = { body: getValue(answerContainer) };
        answerContainer.current.value = "";

        let valid = new Validator(answer, { body: "required|string|min:4" });

        if (valid.fails(undefined))
            return setErrors((errors) => {
                return { ...errors, ...valid.errors.all() };
            });

        if (valid.passes(undefined)) {
            setErrors((errors) => {
                return { ...errors, ...valid.errors.all() };
            });
            let data = await QuestionsService.answer(question, answer);
            if (data.status === 201) {
                answered(data.data);
                $("#answerQuestion" + question).modal("hide");
                setSnackbar({
                    open: true,
                    success: true,
                    message: "You have successfully answered a question",
                });
            }
        }
    };

    return (
        <div>
            <div
                className="modal fade"
                id={"answerQuestion" + question}
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content py-4 px-lg-4">
                        <form action="" onSubmit={submitForm}>
                            <div>
                                <h5 className="font-weight-bolder">
                                    Write Your answer
                                </h5>
                                <div className="form-group mt-3">
                                    <textarea
                                        name="answer"
                                        id="description1"
                                        rows={5}
                                        ref={answerContainer}
                                        className={`form-control ${
                                            errors.answer.length > 0 &&
                                            "is-invalid"
                                        }  _bg-light-gray`}
                                    />
                                    <div className="invalid-feedback">
                                        {errors.answer[0]}
                                    </div>
                                </div>
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
