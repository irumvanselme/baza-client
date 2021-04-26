import Link from "next/link";

import styles from "../styles/modules/app.module.scss";
import { useRouter } from "next/router";

export const Logo = () => {
    const router = useRouter();
    const toHome = async () => {
        await router.push("/");
    };
    return (
        <Link href="/" onClick={toHome}>
            <div className={`${styles.logo} text-left pl-2`}>Baza.com</div>
        </Link>
    );
};
