import LoaderImage from "../../../assets/loading.gif";
import './loader.css';

function Loader() {
  return (
    <div className="loader">
      <img className="loader__img" src={LoaderImage} alt="Loading" />
    </div>
  )
}

export default Loader;