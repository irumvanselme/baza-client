import { Services } from "./services";
import { HttpCommon as http } from "./http";

class UsersService extends Services {
    get_all() {
        return http.get("/users");
    }

    get(topic) {
        return http.get(`/users/${topic}`);
    }

    delete(user) {
        return http.get("");
    }
}

export default new UsersService();
