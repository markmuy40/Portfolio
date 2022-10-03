import email from '../styles/footerLogos/email-white.png'
import linkedIn from '../styles/footerLogos/linkedIn.png'
import github from '../styles/footerLogos/github-white.png'


const PageFooter = () => {

  return (
    <div className="footer">
      <h3 className="footer-title">Contact me:</h3>
      <div className="footer-icons">
        <div className="Logo"><a href="mailto:mark.muyuela81@gmail.com?subject=Hi there!" target="_blank" rel="noreferrer"><img className="email" src={email}></img></a></div>
        <div className="Logo"><a href="https://www.linkedin.com/in/mark-muyuela/" target="_blank" rel="noreferrer"><img className="linkedIn" src={linkedIn}></img></a></div>
        <div className="Logo"><a href="https://www.linkedin.com/in/mark-muyuela/" target="_blank" rel="noreferrer"><img className="github" src={github}></img></a></div>
      </div>
    </div>
    
  )


}

export default PageFooter