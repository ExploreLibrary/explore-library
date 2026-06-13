import Jumbotron from "../../ui/jumbotron/jumbotron";

function PageLayout({ children, jumbotron, className = '' }) {
  return (
    <>
       {jumbotron && (<Jumbotron {...jumbotron} />)}
      <div className={`container py-3 ${className}`}>
        {children}
      </div>
    </>
  )
}

export default PageLayout;