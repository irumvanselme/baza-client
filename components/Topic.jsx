import styles from "../styles/modules/app.module.scss";

export function Topic({ topic }) {
    return (
        <div className={`${styles.topic} card mb-3 text-white py-3 px-4`}>
            <h1>{topic.name}</h1>
            <p>{topic.description}</p>
            <h5>{topic.questionsDoc} Questions</h5>
        </div>
    );
}
