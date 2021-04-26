import React, { useEffect, useState } from "react";
import Link from "next/link";
import QuestionsService from "../services/questions.service";
import Footer from "./Footer";
import Skeleton from "react-loading-skeleton";

export function RightSidebar() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            let { data } = await QuestionsService.trending();
            setQuestions(data);
            setLoading(false);
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
                        {loading &&
                            [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13].map(
                                (ele) => (
                                    <>
                                        <Skeleton
                                            key={ele}
                                            width={
                                                (Math.ceil(Math.random() * 4) +
                                                    6) *
                                                    10 +
                                                "%"
                                            }
                                        />
                                    </>
                                )
                            )}
                        {!loading &&
                            questions.map((question, i) => (
                                <div className="py-1" key={i}>
                                    <Link
                                        href={`/questions/${question.slug}`}
                                        passHref
                                    >
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
