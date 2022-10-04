import Bootstrap from '../styles/icons/Bootstrap.png'
import CSS3 from '../styles/icons/CSS3.png'
import Django from '../styles/icons/Django.png'
import Express from '../styles/icons/Express.png'
import Github from '../styles/icons/Github2.png'
import Heroku from '../styles/icons/Heroku.png'
import HTML5 from '../styles/icons/HTML5.png'
import Insomnia from '../styles/icons/Insomnia.png'
import JavaScript from '../styles/icons/JavaScript.png'
import MongoDB from '../styles/icons/MongoDB.png'
import Mongoose from '../styles/icons/Mongoose.png'
import Netlify from '../styles/icons/Netlify.png'
import Nodejs from '../styles/icons/Nodejs.png'
import npm from '../styles/icons/npm.png'
import PostgreSQL from '../styles/icons/Postgresql.png'
import Python from '../styles/icons/Python.png'
import react from '../styles/icons/react.png'
import SASS from '../styles/icons/SASS.png'
import VSCode from '../styles/icons/VSCode.png'
import Yarn from '../styles/icons/Yarn2.png'

const tags = [
  {
    name: 'Bootstrap',
    imageSrc: Bootstrap,
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
      <div className="tag-container">
        <h1>Technologies and Skills</h1>
        <div className="tags">
          {tags.map((tag, idx) => (
            <div className="tag-div" key={idx}>
              <img className="tag-image"  src={tag.imageSrc} alt={tag.name} title={tag.name}></img>
              <p className="tag-title">{tag.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills