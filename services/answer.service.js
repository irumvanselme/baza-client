import { Services } from "./services";
import { HttpCommon as http } from "./http";

class AnswerService extends Services {
    comments(answer) {
        return http.get(`/answers/${answer}/comments`);
    }

    comment(answer, comment) {
        return http.post(`/answers/${answer}/comments`, comment);
    }

    like(answer) {
        return http.post(`answers/${answer}/like`);
    }

    dislike(answer) {
        return http.post(`answers/${answer}/dislike`);
    }
}

export default new AnswerService();
