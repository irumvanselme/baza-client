import React, { useEffect, useState } from "react"
import { DefaultLayout } from "../../layouts/Default";
import { authService } from "../../services";
import Link from "next/link"
import {isAuthed} from "../../middlewares/auth";
import {useRouter} from "next/router";
import {Question} from "../../components/Question";

export default function Profile(){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const [profile, setProfile] = useState({
        email: "",
        full_name: "",
        questions: [],
        length: 0,
        questionsDoc: 0,
        answersDoc: 0,
        username: "",
        _id: "",
        profile:{
            bio: "",
            created_at: "",
            location: "",
            profile_pic: "",
            title: "",
            user_id: "",
            _id: "",
        }
    })
    const [questions, setQuestions] = useState([])
    const router = useRouter();
    useEffect(() => {
        (async () => {
            const is_auth = await isAuthed();
            if(!is_auth) return await router.push("/auth/login")

            const { data } = await authService.profile();
            setProfile(data)

            const res = await authService.questions();
            setQuestions(res.data)
        })()
    }, [])
    return (
        <DefaultLayout meta={{ title: "Your profile"}}>
            <img src={profile.profile.profile_pic} alt={profile.full_name} className="_avatar mb-3"/>

            <div className="card p-4 shadow-sm">
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className="font-weight-bolder">{ profile.full_name }</h3>
                    <div>
                        <Link href={"/profile/settings"}>Edit profile</Link>
                    </div>
                </div>
                <h5>@{profile.username}</h5>

                <p className="text-secondary w-75">
                    { profile.profile.bio }
                </p>

                <div className="pt-4 d-flex justify-content-between">
                    <div>
                        <i className="fa fa-calendar pr-3 text-secondary"/> {months[new Date(profile.profile.created_at).getMonth()]+",  "+new Date(profile.profile.created_at).getFullYear()}
                    </div>
                    <div>
                        <i className="fa fa-map-marker pr-3 text-danger"/> <span className="text-secondary">{profile.profile.location}</span>
                    </div>
                </div>
            </div>

            <h5 className="font-weight-bolder text-success mt-3"> {profile.answersDoc} Answers and {profile.questionsDoc} Questions  </h5>

            <h3 className="my-5">Questions asked by { profile.username }</h3>
            <div className="mt-5">
                <div className="row">
                    {
                        questions.map(question => (
                            <div key={question._id} className="col-6">
                                <Question question={question}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </DefaultLayout>
    )
}
