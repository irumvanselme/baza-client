import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import Link from "next/link";
import $ from "jquery";
import { useRouter } from "next/router";

import { User } from "./User";
import { AnswerAQuestion } from "./Question/Answer";
import { isAuthed } from "../middlewares/auth";
import { questionsService } from "../services";
import Skeleton from "react-loading-skeleton";

export function Question({ question, loading = false }) {
    const router = useRouter();
    const [liked, setLiked] = useState(false);
    const [disLiked, setDisLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [disLikes, setDisLikes] = useState(0);
    const [_id, setId] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            if (!loading) {
                setLiked(question.likes_this);
                setDisLiked(question.dislikes_this);
                setId(question._id);
                setLikes(question.likes);
                setDisLikes(question.disLikes);
                $("#popover" + question._id).popover({
                    trigger: "hover",
                    template: ReactDOMServer.renderToStaticMarkup(
                        <User names={question.user.full_name} />
                    ),
                });
            }
        };
        fetchData().then();
    }, [question]);

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
            await questionsService.like(question._id);
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
            await questionsService.dislike(question._id);
        } else await router.push("/auth/login");
    };

    if (loading)
        return (
            <div>
                <div className="card py-4 px-4 mb-4">
                    <div className="header">
                        <div className="d-flex justify-content-between align-items-start">
                            <div className="question">
                                <h4 className="text-left">
                                    <Skeleton width={300} />
                                </h4>
                                <div>
                                    <Skeleton width={100} />
                                    <a>
                                        {" "}
                                        <Skeleton width={100} />{" "}
                                    </a>
                                    <span className="font-weight-bolder">
                                        {" "}
                                        <Skeleton width={100} />{" "}
                                    </span>
                                </div>
                            </div>
                            <div className="answer text-right">
                                <div className="text-right">
                                    <button
                                        className="btn btn-sm btn-success px-4 d-none d-sm-inline"
                                        data-toggle="modal"
                                        disabled
                                    >
                                        Answer
                                    </button>
                                </div>
                                <div className="text-right">
                                    <i className="fa fa-bookmark-o pr-2 mt-2" />
                                    <b>
                                        <Skeleton width={13} />
                                    </b>{" "}
                                    <Skeleton width={60} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body py-3 text-left">
                        <Skeleton width={"80%"} />
                        <Skeleton width={"60%"} />
                    </div>
                    <div className="actions d-flex justify-content-between pt-3">
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <div>
                                    <Skeleton width={30} height={30} />
                                </div>
                                <div className="ml-1">
                                    <Skeleton width={13} />
                                </div>
                            </div>
                            <div className="d-flex ml-3 align-items-center">
                                <div>
                                    <Skeleton width={30} height={30} />
                                </div>
                                <div className="ml-1">
                                    <Skeleton width={13} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Skeleton width={100} />
                        </div>
                    </div>
                </div>
            </div>
        );

    return (
        <div>
            <div className="card py-4 px-4 mb-4">
                <div className="header">
                    <div className="d-flex justify-content-between align-items-start">
                        <div className="question">
                            <h4>{question.title} ?</h4>
                            <div>
                                asked by{" "}
                                <a
                                    className="text-primary"
                                    id={"popover" + question._id}
                                    data-toggle="popover"
                                    title="IRUMVA HABUMUGISHA Anselme"
                                    data-content="Student at Rwanda Coding Academy"
                                >
                                    {question.user.username}
                                </a>{" "}
                                in{" "}
                                <span className="font-weight-bolder">
                                    {question.topic_names[0] || ""}
                                </span>{" "}
                            </div>
                        </div>
                        <div className="answer">
                            <div>
                                <button
                                    className="btn btn-sm btn-success px-4 d-none d-sm-block"
                                    data-toggle="modal"
                                    data-target={"#answerQuestion" + _id}
                                >
                                    Answer
                                </button>
                            </div>
                            <div className="text-right">
                                <i className="fa fa-bookmark-o pr-2 mt-2" />
                                <b>{question.answersDoc}</b> answers
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body py-3">{question.body}</div>
                <div className="actions d-flex justify-content-between pt-3">
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
                            title="Down vote"
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
                        <Link href={`/questions/${question.slug}`} passHref>
                            <a className="text-primary">Read more</a>
                        </Link>
                    </div>
                </div>
            </div>

            <AnswerAQuestion question={_id} />
        </div>
    );
}
