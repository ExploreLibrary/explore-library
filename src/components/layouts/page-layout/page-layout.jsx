import Jumbotron from "../../ui/jumbotron/jumbotron";
import JumbotronImage from "../../../assets/images/backgrounds/library-pic.jpg";
import Navbar from "../../ui/navbar/navbar";
import Footer from "../../ui/footer/footer";

function PageLayout({ children }) {
  return (
    <>
      <div className="container u-mb-30">
        <Navbar />
      </div>

      <div className="container">
        <Jumbotron backgroundImage={JumbotronImage} title="Explore Library" subtitle="Discover your favourite books!" />
      </div>

      <div className="container u-mb-30">{children}</div>

      <div className="container">
        <Footer />
      </div>
    </>
  );
}

export default PageLayout;
