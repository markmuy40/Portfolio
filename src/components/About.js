import instagram from '../styles/footerLogos/instagram.png'

import coffee from '../styles/about/coffee.jpg'
import print from '../styles/about/print.jpg'
import tabletop from '../styles/about/tabletop.JPG'
import bikepacked from '../styles/about/bikepacked.jpeg'

const About = () => {

  return (
    <div className="main">
      <div className="about-container">
        <div id="top"></div>
        <h1 className="about-header">About</h1>
        <div className="about-link-container">
          <div className="about-link">
            <a className="about-link" href="#print">3D Printing</a>
          </div>
          <div className="about-link">
            <a className="about-link" href="#tabletop">Tabletop Gaming</a>
          </div>
          <div className="about-link">
            <a className="about-link" href="#bikepacking">Bikepacking</a>
          </div>
        </div>
        <div className="about">
          
          <img className="about-image" src={coffee}></img>
          <div className="about-text">
            <div className="about-title">
              <h4 className="about-title">Hi! I&#39;m a recently trained Software Engineer / Web Developer looking for my first junior role.</h4>
            </div>
            <p>Previously as a bike retail industry professional, I found huge personal reward through finding solutions to mechanical and technical problems. I&#39;ve learnt to approach problems in a methodical and practical way and get excited about building solutions. This has inspired my pivot towards Software Engineering.</p>
            <p> From my managerial experience, I understand the need for good team players, having people that can add value which contribute towards a team goal and ultimately feed the business objectives of the company. I look forward to bringing my previous experiences with me and utilising this skill set in a team where I can develop further as an engineer. Completing an immersive course has solidified my passion to progress in this field.</p>
            <p>But first, coffee!</p>
          </div>
        </div>
        <h1 className="interest-header">Interests</h1>
        <div className="interests">
          
          <div className="print">
            <div id="print"></div>
            <h1 className="interest-header">3D Print</h1>
            <img className="print-image" src={print}></img>
            <div className="about-text">
              <p>I&#39;ve owned a couple of 3d printers over the past 5 years, the most recent one being my Ender 3 S1 as it was a lot quieter and printed in higher definition than the Cel Robox RB01 that it replaced.</p>
              <p>I use it mostly to print practical items to help with tabletop gaming, or simple solutions for everyday objects.</p>
            </div>
          </div>
          <div className="tabletop">
            <div id="tabletop"></div>
            <h1 className="interest-header">Tabletop Gaming</h1>
            <img className="tabletop-image" src={tabletop}></img>
            <div className="about-text">
              <p>Tabletop gaming is a great way of socialising, working on strategy and working through practical problems.  It&#39;s a great way of letting off steam and being creative.</p>
              <p>The gaming system I currently play is Blood Bowl, both for fun and at tournament level.  In the past I have also played Warhammer 40k, Infinity and X-wing the miniatures game.</p>
              <p>I&#39;m currently trying to set up a Gorkamorka campaign with a couple of friends which should be fun.</p>
            </div>
          </div>
          <div className="bikepacking">
            <div id="bikepacking"></div>
            <h1 className="interest-header">Bikepacking</h1>
            <img className="bikepacking-image" src={bikepacked}></img>
            <div className="about-text">
              <p>Cycling has always been one my favourite pastimes.  As a youngster it symbolised freedom to travel, and as an adult that hasn&#39;t changed much!</p>
              <p>I started by getting into mountain biking, then progressing onto road and gravel.  Whilst still dabbling with those disciplines, bikepacking has become a real passion.  The ability to ride out into the wilderness, fully self-sufficient, and being able to cover distance gives the same sense of freedom I had as a kid.  Not forgetting the great views to wake up to if you can find a great spot to camp in!</p>
            </div>
          </div>
          <div className="blurb">
            <p>I have other hobbies such as weight training, socialising, travel, films, snowboarding.  Those are pretty vanilla, so i thought i would highlight the more interesting ones.</p>
            <div className="insta">
              <p className="insta-text">Add me on Instagram and give me a like and follow!</p>
              <a href="https://www.instagram.com/trukkster/?hl=en" target="_blank" rel="noreferrer"><img className="instagram" src={instagram}></img></a>
            </div>
          </div>
          <a className="back-to-top" href="#top">Back to the top</a>
        </div>
        
      </div>
    </div>
  )


}

export default About