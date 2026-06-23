import './jumbotron.css';


function Jumbotron({ backgroundImage, title, subtitle }) {
  return (
    <div className="jumbotron" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div>
        {title && (<h2>{title}</h2>)}
        {subtitle && (<h5>{subtitle}</h5>)}
      </div>
    </div>
  )
}

export default Jumbotron;