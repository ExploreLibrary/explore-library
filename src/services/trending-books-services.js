import axios from "axios";

const http = axios.create({
  baseURL: "/api-openlibrary",
});

export async function listTrendingBooks() {
  const { data } = await http.get("/search.json", {
    params: {
      q: "harry%20potter",
      fields: "*,availability",
      limit: 6,
    },
  });
  console.log(data);
  return data.docs;
}
