import React, { useState, useEffect } from "react";
import { Question } from "../../components/Question";
import { Topic } from "../../components/Topic";
import TopicService from "../../services/topic.service";
import PageLayout from "../../layouts/Page";

export default function TopicPage({ topic }) {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            let questions = await TopicService.questions(topic.name);
            setQuestions(questions.data);
            setLoading(false);
        };
        fetchData().then();
    }, [topic]);

    const meta = {
        title: "Questions about " + topic.name + " - baza.com",
    };

    return (
        <PageLayout meta={meta}>
            <Topic topic={topic} />
            {loading && (
                <>
                    <Question loading={true} />
                    <Question loading={true} />
                </>
            )}
            {questions.map((question, i) => (
                <Question key={i} question={question} />
            ))}
        </PageLayout>
    );
}

export async function getStaticPaths() {
    let paths = [];
    let { data } = await TopicService.get_all();
    data.map((topic) => {
        paths.push({
            params: {
                id: topic.name,
            },
        });
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    let { data } = await TopicService.get(params.id);
    return {
        props: {
            topic: data,
        },
    };
}
