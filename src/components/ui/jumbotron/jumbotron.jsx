import './jumbotron.css';


function Jumbotron({ backgroundImage, title, subtitle }) {
  return (
    <div className="jumbotron" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div>
        {title && (<h2 className="jumbotron__title">{title}</h2>)}
        {subtitle && (<h5 className="jumbotron__subtitle">{subtitle}</h5>)}
      </div>
    </div>
  )
}

export default Jumbotron;