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
  const { data } = await http.get('/api/books', {
    params: {
      bibkeys: `ISBN:${isbn}`,
      format: 'json',
      jscmd: 'details',
    },
  });

  const receivedBookData = data?.[`ISBN:${isbn}`];

  if (!receivedBookData?.details) {
    throw new Error('Book not found');
  }

  const details = receivedBookData.details;
  const authors = details.authors?.map((author) => author.name).join(', ') || 'Autor no disponible';
  const publishers = details.publishers?.join(', ') || 'Editorial no disponible';
  const publishDate = details.publish_date || 'Fecha no disponible';

  const bookData = {
    title: details.title || 'Sin título',
    description: `Autor(es): ${authors}. Editorial: ${publishers}. Publicado: ${publishDate}.`,
    cover: details.covers?.[0] ?? null,
    numberOfPages: details.number_of_pages ?? null,
    authors,
    publishDate,
  };

  return bookData;
}
//8702113996
export async function searchBooks(query, limit) {
   const { data } = await http.get("/search.json", {
    params: {
      q: query,
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