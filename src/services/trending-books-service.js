import axios from "axios";

const http = axios.create({
  baseURL: "/api-openlibrary",
});

export async function listTrendingBooks(query, fields, limit) {
  const { data } = await http.get("/search.json", {
    params: {
      q: query,
      fields: fields,
      limit: limit,
    },
  });

  data.docs.map((element) => {
    let newElement = element;

    if(element.cover_i){
      newElement.imgURL =`https://covers.openlibrary.org/b/id/${element.cover_i}.jpg`;
    } else {
      newElement.imgURL = "";
    }
    return newElement;

  })

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
