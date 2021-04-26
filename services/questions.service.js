import { Services } from "./services";
import { HttpCommon } from "./http";

class QuestionsService extends Services {
    create(question) {
        return HttpCommon.post("/questions", question);
    }

    search(query){
        return HttpCommon.get("/questions/search?query="+query)
    }

    feed(page) {
        return HttpCommon.get("/questions/feed?page=" + page);
    }

    get(question) {
        return HttpCommon.get(`/questions/${question}`);
    }

    with_likes() {
        return HttpCommon.get("/questions/authed");
    }

    get_all() {
        return HttpCommon.get("/questions");
    }

    answer(question, answer) {
        return HttpCommon.post(`/questions/${question}/answers`, answer);
    }

    answers(question) {
        return HttpCommon.get(`/questions/${question}/answers`);
    }

    answers_with_auth(question) {
        return HttpCommon.get(`/questions/${question}/answers/authed`);
    }

    like(question) {
        return HttpCommon.post(`/questions/${question}/like`);
    }

    dislike(question) {
        return HttpCommon.post(`/questions/${question}/dislike`);
    }

    check_for_me(question, type) {
        return HttpCommon.get(`/check-likes/q/${question}/${type}`);
    }

    trending() {
        return HttpCommon.get("/questions/trending");
    }
}

export default new QuestionsService();
