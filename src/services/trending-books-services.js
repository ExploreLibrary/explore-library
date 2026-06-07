import axios from "axios";

const http = axios.create({
    baseURL: "/api-openlibrary",
});

export async function listTrendingBooks () {
    const params = {}
    params.sort = "currently_reading_count";
    params.limit = 6;

    const { data } = await http.get('/search.json?q=harry%20potter&fields=*,availability&limit=6');
    console.log(data);
    return data.docs;
    
}