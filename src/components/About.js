import placeholder from '../styles/about/jk-placeholder-image.jpeg'
import coffee from '../styles/about/coffee.jpg'
const About = () => {

  return (
    <div className="main">
      <div className="about-container">
        <div className="about">
          <h1>About</h1>
          <img className="about-image" src={coffee}></img>
          <div className="about-text">
            <p>Lorem ipsum dolor sit amet. Sit iure atque qui enim quia qui porro consequatur sit perferendis odit et aperiam dolor. Non rerum error qui officiis tenetur non tempora maxime et pariatur explicabo ex nisi numquam cum galisum omnis? Cum enim galisum qui maiores rerum eum laboriosam sunt ut tempora optio At quod quisquam. Qui maiores iure cum consequatur corporis et beatae ducimus sed galisum perferendis est similique quia hic doloremque vero sit quis totam!</p>
            <p>Sit facilis reprehenderit aut dolorem adipisci ut doloremque laboriosam sit odio harum ut consequatur repellendus est quam asperiores qui ipsa harum! Eum error ducimus 33 error error eum animi officia At enim temporibus rem internos aliquam ad voluptatem atque est quisquam commodi?</p>
            <p>Aut dolor quia qui accusantium reprehenderit ab quibusdam laborum. Id maxime exercitationem sit omnis enim aut quod minus sit officiis esse. Quo excepturi voluptate aut odit perferendis sit molestiae voluptatem in itaque tempore sit harum exercitationem non unde vero id Quis debitis.</p>
          </div>
        </div>
        <h1>Interests</h1>
        <div className="interests">
          
          <div className="print">
            <h1>3d print</h1>
            <img className="print-image" src={placeholder}></img>
            <div className="about-text">
              <p>Hello again!</p>
            </div>
          </div>
          <div className="tabletop">
            <h1>tabletop gaming</h1>
            <img className="tabletop-image" src={placeholder}></img>
            <div className="about-text">
              <p>Hello again!</p>
            </div>
          </div>
          <div className="bikepacking">
            <h1>Bikepacking</h1>
            <img className="bikepacking-image" src={placeholder}></img>
            <div className="about-text">
              <p>Hello again!</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )


}

export default About