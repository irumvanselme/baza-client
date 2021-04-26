import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { AskAQuestion } from "../components/Question/Ask";
import AuthService from "../services/auth.service";

export function DefaultLayout({ children, meta, append_questions }) {
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            let data = await AuthService.profile();
            if (data.data._id) setAuth(true);
        };
        fetchData().then();
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>{meta.title}</title>
            </Head>
            <div>
                <header>
                    <Navbar auth={auth} />
                </header>
                <main className="pt-3 container-md">
                    {children}
                    <AskAQuestion askNewQuestion={append_questions} />
                </main>
            </div>
        </React.Fragment>
    );
}
