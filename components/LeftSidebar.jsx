import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "../styles/modules/app.module.scss";
import TopicService from "../services/topic.service";

export function LeftSider() {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let data = await TopicService.get_all();
            setTopics(data.data)
        }
        fetchData().then()
    }, [])

    return (
        <div className={styles.list}>
            <ul>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    TOPICS
                    <ul>
                        {topics.map((topic, i) => (
                            <li key={i}>
                                <Link href={`/topic/${topic.name}`}>
                                    {topic.name}
                                </Link>{" "}
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <Link href={"/users"}>USERS</Link>
                </li>
                <li>
                    <Link href="/">QUESTIONS</Link>
                </li>
            </ul>
        </div>
    );
}
