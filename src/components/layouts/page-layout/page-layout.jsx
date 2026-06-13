import Jumbotron from "../../ui/jumbotron/jumbotron";
import JumbotronImage from "../../../assets/images/backgrounds/library-pic.jpg";

function PageLayout({ children }) {
  return (
    <>
      <Jumbotron backgroundImage={JumbotronImage}/>
      
      <div className={`container py-3`}>
        {children}
      </div>
    </>
  )
}

export default PageLayout;