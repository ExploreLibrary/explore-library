import Jumbotron from "../../ui/jumbotron/jumbotron";
import JumbotronImage from "../../../assets/images/backgrounds/library-pic.jpg";
import Navbar from "../../ui/navbar";

function PageLayout({ children }) {
  return (
    <>
      <Navbar />
      <Jumbotron backgroundImage={JumbotronImage}/>
      
      <div className={`container py-3`}>
        {children}
      </div>
    </>
  )
}

export default PageLayout;