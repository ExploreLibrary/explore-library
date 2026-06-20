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
    // attach a primary ISBN (first one) when available for linking to details
    newElement.isbn = element.isbn && element.isbn.length > 0 ? element.isbn[0] : null;
    return newElement;

  })
  return data.docs;
}


export async function getBook(isbn) {
  const { data } = await http.get(`/api/books`,{
    params:{
      bibkeys:`ISBN:${isbn}`,
      format:"json",
      jscmd:"details"

    }
  } 

  );
  const receivedBookData = data[`ISBN:${isbn}`]
  const bookData = {
    title: receivedBookData.details.title,
    description: receivedBookData.details.title,
    cover: receivedBookData.details.covers[0],
    numberOfPages: receivedBookData.details.number_of_pages
  }
  return bookData;
}
//8702113996
