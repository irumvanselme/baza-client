import React, { useRef, useState, useEffect } from "react";
import Validator from "validatorjs";
import ReactDOMServer from "react-dom/server";
import $ from "jquery";

import { Comment } from "./Comment";
import { User } from "./User";
import AnswersService from "../services/answer.service";
import { isAuthed } from "../middlewares/auth";
import { answersService } from "../services";
import { useRouter } from "next/router";
import {displayDate} from "../utils/displayDate";

export function Answer({ top, answer }) {
    const [liked, setLiked] = useState(false);
    const [disLiked, setDisLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [disLikes, setDisLikes] = useState(0);
    const [details, setDetails] = useState(false);
    const [comments, setComments] = useState([]);

    const commentContainer = useRef(null);
    const [errors, setErrors] = useState({ comment: [] });
    const getValue = (container) => container.current.value;

    useEffect(() => {
        setLikes(answer.likes);
        setDisLikes(answer.dislikes);
    }, [answer]);

    const submitForm = async (event) => {
        event.preventDefault();
        const is_auth = await isAuthed();
        if (is_auth) {
            const comment = { body: getValue(commentContainer) };

            let valid = new Validator(comment, {
                body: "required|string|min:3",
            });

            if (valid.fails(null))
                return setErrors((errors) => {
                    return { ...errors, ...valid.errors.all() };
                });

            if (valid.passes(undefined)) {
                setErrors((errors) => {
                    return { ...errors, ...valid.errors.all() };
                });
                let { data } = await AnswersService.comment(
                    answer._id,
                    comment
                );
                commentContainer.current.value = "";
                setComments((cmts) => [data, ...cmts]);
            }
        } else {
            await router.push("/auth/login");
        }
    };

    const showUser = () => {
        $("#popover2" + answer._id).popover({
            trigger: "hover",
            template: ReactDOMServer.renderToStaticMarkup(
                <User names={answer.user.full_name} />
            ),
        });
    };

    const get_comments = async () => {
        setDetails(!details);
        let { data } = await AnswersService.comments(answer._id);
        setComments(data);
    };

    const router = useRouter();

    const like = async () => {
        let is_authed = await isAuthed();
        if (is_authed) {
            if (liked) {
                setLiked(false);
                setLikes(likes - 1);
            } else if (disLiked) {
                setDisLiked(false);
                setDisLikes(disLikes - 1);
                setLiked(true);
                setLikes(likes + 1);
            } else {
                setLiked(true);
                setLikes(likes + 1);
            }
            await answersService.like(answer._id);
        } else await router.push("/auth/login");
    };

    const dislike = async () => {
        let is_authed = await isAuthed();
        if (is_authed) {
            if (disLiked) {
                setDisLiked(false);
                setDisLikes(disLikes - 1);
            } else if (liked) {
                setLiked(false);
                setLikes(likes - 1);
                setDisLiked(true);
                setDisLikes(disLikes + 1);
            } else {
                setDisLiked(true);
                setDisLikes(disLikes + 1);
            }
            await answersService.dislike(answer._id);
        } else await router.push("/auth/login");
    };

    return (
        <div className="card mb-4">
            {top && (
                <div className="card-header _bg-primary py-2 text-white font-weight-bolder">
                    Top answer
                </div>
            )}
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-baseline">
                    <div className="question">
                        <img
                            src="https://www.w3schools.com/w3images/avatar5.png"
                            className="_avatar mr-3"
                            alt="Avatar"
                        />
                        <a
                            className="pr-2"
                            onMouseEnter={showUser}
                            id={"popover2" + answer._id}
                            data-toggle="popover"
                            title="IRUMVA HABUMUGISHA Anselme"
                            data-placement="right"
                            data-content="Student at Rwanda Coding Academy"
                        >
                            {answer.user.username}
                        </a>{" "}
                        answered
                    </div>
                    <div className="_date"> Answerd {displayDate(answer.created_at)} </div>
                </div>
                <div className="body py-3"> {answer.body} </div>
                <div className="d-flex justify-content-between pt-3">
                    <div className="d-flex align-items-center">
                        <div
                            onClick={like}
                            className={`button ${
                                liked ? "text-primary" : "text-secondary"
                            } d-flex align-items-center`}
                            title="Up vote"
                        >
                            <div>
                                <i
                                    className={`fa ${
                                        liked
                                            ? "fa-thumbs-up"
                                            : "fa-thumbs-o-up"
                                    } pr-2`}
                                />
                            </div>
                            <div>{likes}</div>
                        </div>
                        <div
                            onClick={dislike}
                            className={`button ${
                                disLiked ? "text-danger" : "text-secondary"
                            } d-flex align-items-center ml-5`}
                            title="Up vote"
                        >
                            <div>
                                <i
                                    className={`fa ${
                                        disLiked
                                            ? "fa-thumbs-down"
                                            : "fa-thumbs-o-down"
                                    } pr-2`}
                                />
                            </div>
                            <div>{disLikes}</div>
                        </div>
                    </div>
                    <div>
                        <a className="text-info" onClick={get_comments}>
                            {details ? "Hide" : "View"} all comments (
                            {answer.commentsDoc}){" "}
                        </a>
                    </div>
                </div>
                {details && (
                    <div className="comments border-top pt-3 mt-2">
                        <form
                            className="form-group row mx-0"
                            onSubmit={submitForm}
                        >
                            <div className="col-10 px-0">
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.comment.length > 0 &&
                                        "is-invalid"
                                    }`}
                                    ref={commentContainer}
                                    placeholder="Add a comment"
                                />
                                <div className="invalid-feedback">
                                    {errors.comment[0]}
                                </div>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-info">
                                    <i className="fa fa-send mx-2" />
                                </button>
                            </div>
                        </form>
                        <div className="coments-body">
                            <div className="comments">
                                {comments.map((comment, i) => (
                                    <Comment key={i} comment={comment} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
