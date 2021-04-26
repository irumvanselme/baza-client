import React, { useEffect, useState } from "react";
import Link from "next/link";
import QuestionsService from "../services/questions.service";
import Footer from "./Footer";

export function RightSidebar() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let { data } = await QuestionsService.trending();
            setQuestions(data);
        };
        fetchData().then();
    }, []);

    return (
        <React.Fragment>
            <div className="text-sm right_bar position-sticky">
                <div className="card">
                    <h5 className="border-bottom pb-2 font-weight-bold card-header">
                        Trending questions
                    </h5>
                    <div className="card-body">
                        {questions.map((question, i) => (
                            <div className="py-1" key={i}>
                                <Link href={`/questions/${question.slug}`} passHref>
                                    <a>{question.title} ?</a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="card mt-3 p-2">
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    );
}
