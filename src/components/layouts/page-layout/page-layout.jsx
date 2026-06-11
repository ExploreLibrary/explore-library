/*import { Jumbotron } from "../../ui";

const jumbrotron = {
  backgroundImage: '',
  title: 'Hola',
  subtitle: 'Mundo'
}*/

function PageLayout({ children, className = '' }) {
  return (
    <>

      <div className={`container py-3 ${className}`}>
        {children}
      </div>
    </>
  )
}

export default PageLayout;