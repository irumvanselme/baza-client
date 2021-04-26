import { Services } from "./services";
import { HttpCommon } from "./http";

class AuthService extends Services {
    login(user) {
        return HttpCommon.post("/auth/login", user);
    }

    register(user) {
        return HttpCommon.post("/auth/register", user);
    }

    questions(){
        return HttpCommon.get("/profile/questions")
    }

    profile() {
        return HttpCommon.get("/profile");
    }

    edit_profile(profile) {
        return HttpCommon.put("/profile", profile);
    }
}

export default new AuthService();
