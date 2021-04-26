import React, { useState, useEffect } from "react";

import { DefaultLayout } from "../../layouts/Default";
import { RightSidebar } from "../../components/RightSidebar";
import { QuestionDetails } from "../../components/QuestionDetails";
import { Answer } from "../../components/Answer";
import QuestionsService from "../../services/questions.service";
import { isAuthed } from "../../middlewares/auth";
import { questionsService } from "../../services";
import NotFound from "../404";
import { questionInterface } from "../../store/utils/question";

export default function Question({ question }) {
    const [answers, setAnswers] = useState([]);

    if (!question) return <NotFound />;

    useEffect(() => {
        (async () => {
            try {
                let is_auth = await isAuthed();
                if (is_auth) {
                    const answers = await QuestionsService.answers_with_auth(
                        question._id
                    );
                    setAnswers(answers.data);
                } else {
                    const answers = await QuestionsService.answers(
                        question._id
                    );
                    setAnswers(answers.data);
                }
            } catch (e) {
                console.log(e);
            }
        })();
    }, [question]);

    const answered = (answer) => {
        setAnswers((answers) => [answer, ...answers]);
    };

    return (
        <DefaultLayout meta={{ title: `${question.title} - baza.com` }}>
            <div className="row">
                <div className="col-12 col-lg-8 offset-md-1 px-2">
                    <QuestionDetails question={question} answered={answered} />
                    {answers.length > 0 ? (
                        <>
                            <div className="col-lg-10 mx-0 px-0">
                                <Answer answer={answers[0]} top />
                            </div>
                            {answers.map((answer, i) => {
                                if (i !== 0)
                                    return (
                                        <div
                                            className="col-lg-10 mx-0 col-md-12 px-0"
                                            key={i}
                                        >
                                            <Answer answer={answer} />
                                        </div>
                                    );
                            })}
                        </>
                    ) : (
                        <div className="text-center">
                            {" "}
                            No answers yet, be the first to answer
                        </div>
                    )}
                </div>
                <div className="d-none d-lg-block col-3">
                    <RightSidebar />
                </div>
            </div>
        </DefaultLayout>
    );
}

const getQuestion = async (id) => {
    let { data } = await questionsService.get(id);
    return data ? data : questionInterface;
};

Question.getInitialProps = async ({ query }) => {
    let question = await getQuestion(query.id);
    return {
        question,
    };
};
