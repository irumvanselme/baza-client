import axios from "axios";

export const domain = "https://proxy.okavaa.com/api/baza-apis/";

let token = "";

if (typeof window !== "undefined") {
    token = sessionStorage.getItem("token");
}

export const HttpCommon = axios.create({
    baseURL: `${domain}api`,
    headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + token,
    },
});
