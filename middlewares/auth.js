import AuthService from "../services/auth.service";

export async function isAuthed() {
    const token = sessionStorage.getItem("token");
    if (!token) return false;
    let profile = await AuthService.profile();
    return profile.data._id;
}
