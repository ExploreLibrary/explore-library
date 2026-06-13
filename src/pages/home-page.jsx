import { PageLayout } from "../components/layouts/page-layout/page-layout";

import jumboBg from "../assets/images/backgrounds/library-pic.jpg";
import { BooksController } from "../components/books/books-controller/books-controller";
import { Gallery} from "../components/ui/gallery";

function HomePage() {
  return (
    <PageLayout
    >
      <Gallery/>
      
    </PageLayout>
  );
}

export default HomePage;