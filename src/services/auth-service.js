import axios from "axios";

const http = axios.create({
    baseURL: "https://api.openlibrary.mock.org",
});

export async function register(user) {
    const { data } = await http.post("/users", user);
    return data;    
}

export async function login(credentials) {
    const { data } = await http.post("/sessions", credentials);
    return data;
}

export async function updateUser(user) {
    const { data } = await http.patch(`/users/${user.id}`, user);
    return data;
}