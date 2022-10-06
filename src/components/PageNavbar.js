import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import email from '../styles/footerLogos/email-white.png'
import linkedIn from '../styles/footerLogos/linkedIn.png'
import github from '../styles/footerLogos/github-white.png'


const PageNavbar = () => {

  return (
    <Navbar className='navbar' expand="md">
      <Container className="navbar-main">      
        <Link className="markmuyuela" to="/"><h1 className="markmuyuela">Mark Muyuela</h1></Link>
        <Navbar.Toggle className="navbar-dark" aria-controls="basic-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav.Link className="navbar-link" as={Link} to="/"><h5>Home</h5></Nav.Link>
          <Nav.Link className="navbar-link" as={Link} to="/about"><h5>About</h5></Nav.Link>
          <Nav.Link className="navbar-link" as={Link} to="/projects"><h5>Projects</h5></Nav.Link> 
          <Nav.Link className="navbar-link" as={Link} to="/skills"><h5>Skills</h5></Nav.Link> 
          <div className="header-icons">
            <div className="Logo"><a href="mailto:mark.muyuela81@gmail.com?subject=Hi there!" target="_blank" rel="noreferrer"><img className="email" src={email}></img></a></div>
            <div className="Logo"><a href="https://www.linkedin.com/in/mark-muyuela/" target="_blank" rel="noreferrer"><img className="linkedIn" src={linkedIn}></img></a></div>
            <div className="Logo"><a href="https://github.com/markmuy40" target="_blank" rel="noreferrer"><img className="github" src={github}></img></a></div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )


}

export default PageNavbar