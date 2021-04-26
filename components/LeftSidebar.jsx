import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "../styles/modules/app.module.scss";
import TopicService from "../services/topic.service";
import Skeleton from "react-loading-skeleton";

export function LeftSider() {
    const [topics, setTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            let data = await TopicService.get_all();
            setTopics(data.data);
            setLoading(false);
        };
        fetchData().then();
    }, []);

    return (
        <div className={styles.list}>
            <ul>
                <li>
                    <Link href="/">HOME</Link>
                </li>
                <li>
                    TOPICS
                    <ul>
                        {loading &&
                            [1, 2, 3, 4, 5, 6, 7, 8].map((ele) => (
                                <Skeleton
                                    key={ele}
                                    width={
                                        (Math.ceil(Math.random() * 4) + 6) *
                                            10 +
                                        "%"
                                    }
                                />
                            ))}
                        {!loading &&
                            topics.map((topic, i) => (
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
