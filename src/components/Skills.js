
// icons --------------------------------------------
import bs from '../styles/icon/bs.png'
import CSS3 from '../styles/icon/CSS3.png'
import Django from '../styles/icon/Django.png'
import Express from '../styles/icon/Express.png'
import Github from '../styles/icon/Github2.png'
import Heroku from '../styles/icon/Heroku.png'
import HTML5 from '../styles/icon/HTML5.png'
import Insomnia from '../styles/icon/Insomnia.png'
import JavaScript from '../styles/icon/JavaScript.png'
import MongoDB from '../styles/icon/MongoDB.png'
import Mongoose from '../styles/icon/Mongoose.png'
import Netlify from '../styles/icon/Netlify.png'
import Nodejs from '../styles/icon/Nodejs.png'
import npm from '../styles/icon/npm.png'
import PostgreSQL from '../styles/icon/Postgresql.png'
import Python from '../styles/icon/Python.png'
import react from '../styles/icon/react.png'
import SASS from '../styles/icon/SASS.png'
import VSCode from '../styles/icon/VSCode.png'
import Yarn from '../styles/icon/Yarn2.png'

const icons = [
  {
    name: 'Bootstrap',
    imageSrc: bs,
  },
  {
    name: 'CSS3',
    imageSrc: CSS3,
  },
  {
    name: 'Django',
    imageSrc: Django,
  },
  {
    name: 'Express',
    imageSrc: Express,
  },
  {
    name: 'Github',
    imageSrc: Github,
  },
  {
    name: 'Heroku',
    imageSrc: Heroku,
  },
  {
    name: 'HTML5',
    imageSrc: HTML5,
  },
  {
    name: 'Insomnia',
    imageSrc: Insomnia,
  },
  {
    name: 'JavaScript',
    imageSrc: JavaScript,
  },
  {
    name: 'MongoDB',
    imageSrc: MongoDB,
  },
  {
    name: 'Mongoose',
    imageSrc: Mongoose,
  },
  {
    name: 'Netlify',
    imageSrc: Netlify,
  },
  {
    name: 'NodeJS',
    imageSrc: Nodejs,
  },
  {
    name: 'NPM',
    imageSrc: npm,
  },
  {
    name: 'PostgreSQL',
    imageSrc: PostgreSQL,
  },
  {
    name: 'Python',
    imageSrc: Python,
  },
  {
    name: 'React',
    imageSrc: react,
  },
  {
    name: 'SASS',
    imageSrc: SASS,
  },
  {
    name: 'VSCode',
    imageSrc: VSCode,
  },
  {
    name: 'Yarn',
    imageSrc: Yarn,
  }
]


const Skills = () => {
  return (
    <div className="main">
      <div className="skills-main">
        <div className="icon-container">
          <h1 className="skills-title">Technologies and Skills</h1>
          <div className="icons">
            {icons.map((icon, idx) => (
              <div className="icon-div" key={idx}>
                <img className="icon-image"  src={icon.imageSrc} alt={`${icon.name} icon`} title={icon.name}></img>
                <p className="tag-title">{icon.name}</p>
              </div>
            ))}
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skills