import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


const PageNavbar = () => {

  return (
    <Navbar className='navbar' expand="md">
      <Container className="navbar-main">      
        <Navbar.Toggle className="navbar-dark" aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav.Link className="navbar-link" as={Link} to="/"><h3>Home</h3></Nav.Link>
          <Nav.Link className="navbar-link" as={Link} to="/about"><h3>About</h3></Nav.Link>
          <Nav.Link className="navbar-link" as={Link} to="/projects"><h3>Projects</h3></Nav.Link>  
          <Nav.Link className="navbar-link" as={Link} to="/trains"><h3>trains?</h3></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )


}

export default PageNavbar