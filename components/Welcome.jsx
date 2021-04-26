import styles from "../styles/modules/app.module.scss";

export function Welcome() {
    return (
        <div className={`${styles.topic} card mb-3 text-white py-3 px-4`}>
            <h1>What is Baza.com</h1>
            <p className="font-weight-bolder">
                Baza.com is a platform to ask and answer questions. The
                questions of users from different parts of the world are being
                answered from proffessionals of different parts of the world
            </p>
            <h5>Share this platform to other users</h5>
        </div>
    );
}
