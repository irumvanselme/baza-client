import React, { useState, useEffect } from "react";

import { Question } from "../components/Question";
import QuestionsService from "../services/questions.service";
import { Welcome } from "../components/Welcome";
import PageLayout from "../layouts/Page";

export default function Home() {
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isOver, setIsOver] = useState(false);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching || isOver) return;
        loadNewPosts().then();
    }, [isFetching]);

    function handleScroll() {
        if (
            document.body.offsetHeight -
                (window.pageYOffset + window.innerHeight) >
            500
        )
            return;
        setIsFetching(true);
    }

    useEffect(() => {
        let result = {},
            paged = 1;
        (async () => {
            do {
                let { data } = await QuestionsService.feed(paged);
                if (data) {
                    result = data;
                    setQuestions((questions) => [...questions, ...data.data]);
                    paged++;
                    setPage(paged);
                }
                if (result.current_page === 4) return setIsLoading(false);
                if (data.current_page === data.last_page - 1) setIsOver(true);
            } while (result.current_page <= 3);
        })();
    }, []);

    // useEffect(() => {
    //     $(document).on("scroll", async () => {
    //         console.log(document.body.offsetHeight - (window.pageYOffset + window.innerHeight))
    //         setTimeout(() => {
    //
    //         }, 3000)
    //     })
    // }, [])

    const loadNewPosts = async () => {
        setIsFetching(true);
        let { data } = await QuestionsService.feed(page);
        setQuestions((questions) => [...questions, ...data.data]);
        setPage((page) => page + 1);
        if (data.current_page === data.last_page) {
            setIsOver(true);
            setIsLoading(false);
        } else {
            setIsLoading(true);
        }
        setIsFetching(false);
    };

    return (
        <PageLayout meta={{ title: "baza | home-page" }}>
            
            <Welcome />
            {questions.map((question) => (
                <Question key={question._id} question={question} />
            ))}
            <div className="text-center pb-5">
                {(isLoading || !isOver) && (
                    <>
                        <Question loading={true} />
                        <Question loading={true} />
                        <span>Loading some posts</span>
                    </>
                )}
                {isOver && !isLoading && <span>No more posts</span>}
            </div>
        </PageLayout>
    );
}
