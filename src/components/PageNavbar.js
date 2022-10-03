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
          <Nav.Link className="navbar-link" as={Link} to="/"><h4>Home</h4></Nav.Link>
          <Nav.Link className="navbar-link" as={Link} to="/about"><h4>About</h4></Nav.Link>
          <Nav.Link className="navbar-link" as={Link} to="/projects"><h4>Projects</h4></Nav.Link> 
          <Nav.Link className="navbar-link" as={Link} to="/skills"><h4>skills</h4></Nav.Link> 
          
          <Nav.Link className="navbar-link" as={Link} to="/trains"><h4>trains?</h4></Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )


}

export default PageNavbar