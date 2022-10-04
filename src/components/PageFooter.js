import { Link } from 'react-router-dom'

const PageFooter = () => {

  return (
    <div className="footer">
      <div className="footer-title">
        <h5>Back to top</h5>
      </div>
      <div className="footer-link-container">
        <Link className="footer-links" as={Link} to="/"><p>Home</p></Link>
        <Link className="footer-links" as={Link} to="/about"><p>About</p></Link>
        <Link className="footer-links" as={Link} to="/projects"><p>Projects</p></Link> 
        <Link className="footer-links" as={Link} to="/skills"><p>skills</p></Link> 
        <Link className="footer-links" as={Link} to="/trains"><p>trains?</p></Link>
      </div>
    </div>
    
  )


}

export default PageFooter