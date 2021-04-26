import React, { useEffect, useState } from "react"
import { Search } from "../components/Search";
import PageLayout from "../layouts/Page";
import { questionsService } from "../services";
import { Question } from "../components/Question";

export default function SearchPage({ search }) {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        (async () => {
            console.log(search)
            const { data } = await questionsService.search(search)
            setQuestions(data)
        })()
    }, [search])
    return (
        <PageLayout meta={{ title: "baza | home-page" }}>
            <Search search={search} count={questions.length}/>
            {
                questions.map(question => (
                    <Question question={question} key={question._id}/>
                ))
            }
            <div className="text-center">
                No more posts
            </div>
        </PageLayout>
    );
}

SearchPage.getInitialProps = async ({ res, query }) => {
    if(res && !query.query) res.statusCode = 404
    return {
        search: query.query
    };
}
