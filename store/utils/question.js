export const questionInterface = {
    _id: "",
    title: "...",
    body: null,
    user_id: "",
    created_at: "",
    topic_names: [],
    likes: 0,
    dislikes: 0,
    answersDoc: 1,
    user: {
        _id: "",
        full_name: "",
        username: "",
        email: ""
    },
    topics: [
        {
            _id: "",
            name: "",
            description: ""
        }
    ],
    tags: []
}

const user = {
    _id: "",
    full_name: "",
    username: "",
    email: ""
}

const topic = {
    _id: "",
    name: "",
    description: ""
}
