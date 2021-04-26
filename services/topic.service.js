import { Services } from "./services";
import { HttpCommon as http } from "./http";

class TopicService extends Services {
    get_all() {
        return http.get("/topics");
    }

    get(topic) {
        return http.get(`/topics/${topic}`);
    }

    questions(topic) {
        return http.get(`/topics/${topic}/questions`);
    }
}

export default new TopicService();
