import { PageLayout } from "../components/layouts";

//import jumboBg from '../assets/images/backgrounds/bg-movies.jpg';
//import { MoviesController } from "../components/movies";

function BookDetailPage({ spotGenres = ['Action', 'Drama', 'Horror'] }) {
  return (
    <PageLayout
    >

      {spotGenres.map((genre) => (
        <div key={genre} className="mb-2">
          <h3 className="fw-light">Best of {genre}</h3>
          <MoviesController genre={genre} limit={6} />
        </div>
      ))}
      
    </PageLayout>
  );
}

export default BookDetailPage;