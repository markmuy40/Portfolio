import placeholder from '../styles/about/jk-placeholder-image.jpeg'

const About = () => {

  return (
    <div className="main">
      <div className="about-container">
        <div className="about">
          <h1>About</h1>
          <img className="about-image" src={placeholder}></img>
          <div className="about-text">
            <p>Hello again!</p>
          </div>
        </div>
        <h1>Interests</h1>
        <div className="interests">
          
          <div className="print">
            <h1>3d print</h1>
            <img className="print-image" src={placeholder}></img>
            <div className="print-text">
              <p>Hello again!</p>
            </div>
          </div>
          <div className="tabletop">
            <h1>tabletop gaming</h1>
            <img className="tabletop-image" src={placeholder}></img>
            <div className="tabletop-text">
              <p>Hello again!</p>
            </div>
          </div>
          <div className="bikepacking">
            <h1>Bikepacking</h1>
            <img className="bikepacking-image" src={placeholder}></img>
            <div className="bikepacking-text">
              <p>Hello again!</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )


}

export default About