
// icons --------------------------------------------
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

// project images -----------------------------------
import project1 from '../styles/project-images/walking-dead-invaders.gif' 
import project2 from '../styles/project-images/crypto-app.gif' 
import project3 from '../styles/project-images/read-it.gif' 
import project4 from '../styles/project-images/bike-packed.gif' 

// project icons ------------------------------------
import projectLink from '../styles/icons/link-icon.png'
import readMe from '../styles/icons/readme-icon.png'

const icons = [
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

const projects = [
  {
    title: 'Walking Dead Invaders',
    description: 'A parody of the popular Space Invaders game, reimagined with The Walking Dead theme.',
    link: 'https://markmuy40.github.io/SEI-65-Projects/',
    readMe: 'https://github.com/markmuy40/SEI-65-Projects/blob/main/README.md',
    gitHubLink: 'https://github.com/markmuy40/SEI-65-Projects',
    imageSrc: project1,
    techStack: [
      {
        name: 'HTML5',
        imageSrc: HTML5,
      },
      {
        name: 'CSS3',
        imageSrc: CSS3, 
      },
      {
        name: 'JavaScript', 
        imageSrc: JavaScript,
      }
    ],    
  },
  {
    title: 'Crypto App',
    description: 'A mini-hackathon group project using an API and displaying data in a Front-end Application.',
    link: 'https://another-crypto-tracker.netlify.app/coins',
    readMe: 'https://github.com/markmuy40/SEI-65-Project-2/blob/main/READMEP2.md',
    gitHubLink: 'https://github.com/markmuy40/SEI-65-Project-2',
    imageSrc: project2,
    techStack: [
      {
        name: 'HTML5',
        imageSrc: HTML5,
      },
      {
        name: 'CSS3',
        imageSrc: CSS3, 
      },
      {
        name: 'JavaScript', 
        imageSrc: JavaScript,
      },      
      {
        name: 'ReactJS', 
        imageSrc: react,
      },
      {
        name: 'Bootstrap',
        imageSrc: Bootstrap,
      },
      {
        name: 'SASS',
        imageSrc: SASS,
      },
      {
        name: 'Yarn',
        imageSrc: Yarn,
      },
      {
        name: 'npm',
        imageSrc: npm,
      }
    ],
  },
  {
    title: 'Read it!',
    description: 'A Full Stack group project which parodies the well-known reddit forum. You can also view the API in my repository.',
    link: 'https://ga-read-it.netlify.app/',
    readMe: 'https://github.com/markmuy40/sei65-project-3-app/blob/main/README.md',
    gitHubLink: 'https://github.com/markmuy40/sei65-project-3-app',
    imageSrc: project3,
    techStack: [
      {
        name: 'HTML5',
        imageSrc: HTML5,
      },
      {
        name: 'CSS3',
        imageSrc: CSS3, 
      },
      {
        name: 'JavaScript', 
        imageSrc: JavaScript,
      },      
      {
        name: 'Bootstrap',
        imageSrc: Bootstrap,
      },
      {
        name: 'SASS',
        imageSrc: SASS,
      },
      {
        name: 'Yarn',
        imageSrc: Yarn,
      },
      {
        name: 'npm',
        imageSrc: npm,
      },
      {
        name: 'Mongoose',
        imageSrc: Mongoose,
      },
      {
        name: 'MongoDB',
        imageSrc: MongoDB,
      },
      {
        name: 'Express',
        imageSrc: Express,
      },
      {
        name: 'ReactJS',
        imageSrc: react,
      },
      {
        name: 'NodeJS',
        imageSrc: Nodejs,
      }
    ],
  },
  {
    title: 'Bike Packed?',
    description: 'A solo Full Stack application. Similar to a forum, users can leave a review of a product and comment on other reviews.',
    link: 'https://bike-packed.herokuapp.com/',
    readMe: 'https://github.com/markmuy40/SEI65-project-4/blob/main/readme.md',
    gitHubLink: 'https://github.com/markmuy40/SEI65-project-4',
    imageSrc: project4,
    techStack: [
      {
        name: 'HTML5',
        imageSrc: HTML5,
      },
      {
        name: 'CSS3',
        imageSrc: CSS3, 
      },
      {
        name: 'JavaScript', 
        imageSrc: JavaScript,
      },      
      {
        name: 'ReactJS', 
        imageSrc: react,
      },
      {
        name: 'Bootstrap',
        imageSrc: Bootstrap,
      },
      {
        name: 'SASS',
        imageSrc: SASS,
      },
      {
        name: 'npm',
        imageSrc: npm,
      },
      {
        name: 'Python',
        imageSrc: Python,
      },
      {
        name: 'Django',
        imageSrc: Django,
      }
    ],
  }
]





const Skills = () => {
  return (
    <div className="main">
      <div className="projects-main">
        <h1 id="top">Projects</h1>
        {projects.map((project, index) => ( 
          <div className="project-container" key={index}>
            <div className="project-content">
              <div className="project-text-container">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-icons-container">
                <div className="project-links-container">
                  <div className="project-logo">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img className="project-icon" src={projectLink} alt={projectLink} title="project link">
                      </img></a></div>
                  <div className="project-logo">
                    <a href={project.readMe} target="_blank" rel="noreferrer">
                      <img className="project-icon" src={readMe} title="Project readMe">
                      </img></a></div>
                  <div className="project-logo">
                    <a href={project.gitHubLink} target="_blank" rel="noreferrer">
                      <img className="project-icon" src={Github} title="GitHub project repo">
                      </img></a></div>
                </div>
                <div className="techStack-container">
                  { project.techStack.map((icon, index) => (
                    <div key={index} className="tech">
                      <div>
                        <img className="techStack-icon" src={icon.imageSrc} alt={icon.name} title={icon.name}></img>
                      </div>
                      <div>
                        <p>{icon.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-image-container">
              <img className="project-image" src={project.imageSrc}></img>
            </div>
          </div>
        ))}
        <div className="icon-container">
          <h1 id="skills">Technologies and Skills</h1>
          <div className="icons">
            {icons.map((icon, idx) => (
              <div className="icon-div" key={idx}>
                <img className="icon-image"  src={icon.imageSrc} alt={`${icon.name} icon`} title={icon.name}></img>
                <p className="tag-title">{icon.name}</p>
              </div>
            ))}
            
          </div>
          <a className=" back-to-top" href="#top">Back to top</a>
        </div>
      </div>
      
    </div>
  )
}

export default Skills