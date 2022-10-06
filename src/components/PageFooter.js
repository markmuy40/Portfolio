import { Link } from 'react-router-dom'

const PageFooter = () => {

  return (
    <div className="footer">
      <Link className="footer-links" as={Link} to="/"><p>Home</p></Link>
      <Link className="footer-links" as={Link} to="/about"><p>About</p></Link>
      <Link className="footer-links" as={Link} to="/projects"><p>Projects</p></Link> 
      <Link className="footer-links" as={Link} to="/skills"><p>Skills</p></Link> 
    </div>

  )


}

export default PageFooter