import PageLayout from "../components/layouts/page-layout/page-layout";
import Gallery from "../components/ui/gallery";

function HomePage() {
  return (
    <PageLayout
    >
      <Gallery subject="science_fiction" title="Ciencia Ficcion"/>
      <Gallery subject="horror" title="Terror"/>
      <Gallery subject="humor" title="Comedia"/>
      <Gallery subject="thriller" title="Suspenso"/>
      <Gallery subject="poetry" title="Poesia"/>
      <Gallery subject="fantasy" title="Fantasia"/>
    </PageLayout>
  );
}

export default HomePage;