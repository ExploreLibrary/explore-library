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

  return data.docs;
}


export async function getBook() {
  const { data } = await http.get("/search.json", {
    params: {
      q: "harry%20potter",
      fields: "*,availability",
      limit: 1,
    },
  });

  return data.docs;
}
