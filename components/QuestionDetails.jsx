import React, { useEffect, useState } from "react";
import $ from "jquery";
import ReactDOMServer from "react-dom/server";

import { User } from "./User";
import { AnswerAQuestion } from "./Question/Answer";
import { questionsService } from "../services";
import { isAuthed } from "../middlewares/auth";
import {displayDate} from "../utils/displayDate";

export function QuestionDetails({ question, answered }) {
    const [liked, setLiked] = useState(false);
    const [disLiked, setDisLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [disLikes, setDisLikes] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLikes(question.likes);
                setDisLikes(question.disLikes);
                let is_auth = await isAuthed();
                if (is_auth && question._id) {
                    let { data } = await questionsService.check_for_me(
                        question._id,
                        1
                    );
                    setLiked(data);
                    let data1 = await questionsService.check_for_me(
                        question._id,
                        0
                    );
                    setDisLiked(data1.data);
                }
            } catch (e) {
                console.log(e.response.data);
            }
        };
        fetchData().then();
    }, [question]);

    const showUser = () => {
        $("#popover1").popover({
            trigger: "hover",
            template: ReactDOMServer.renderToStaticMarkup(
                <User names={question.user.full_name} />
            ),
        });
    };

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

    return (
        <div>
            <div className="card py-4 px-4 mb-4">
                <div className="header">
                    <div className="d-flex justify-content-between align-items-start">
                        <div className="question">
                            <img
                                src="https://www.w3schools.com/w3images/avatar5.png"
                                className="_avatar mr-3"
                                alt="Avatar"
                            />
                            <a
                                onMouseEnter={showUser}
                                className="pr-2"
                                id="popover1"
                                data-toggle="popover"
                                title="IRUMVA HABUMUGISHA Anselme"
                                data-placement="right"
                                data-content="Student at Rwanda Coding Academy"
                            >
                                {question.user.username}
                            </a>{" "}
                            asked
                        </div>
                        <div className="_date">Asked { displayDate(question.created_at) }</div>
                    </div>
                    <h4 className="pt-4">{question.title}</h4>
                </div>
                <div className="body py-3 w-75">{question.body}</div>
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
                        <div className="button d-flex align-items-center ml-2 ml-md-5">
                            <div>
                                <i className="fa fa-bookmark pr-md-2" />
                            </div>
                            <div>{question.answersDoc} answers</div>
                        </div>
                    </div>
                    <div>
                        <button
                            className="btn btn-success px-4 "
                            data-toggle="modal"
                            data-target={"#answerQuestion" + question._id}
                        >
                            Answer
                        </button>
                    </div>
                </div>
                <AnswerAQuestion question={question._id} answered={answered} />
            </div>
        </div>
    );
}
