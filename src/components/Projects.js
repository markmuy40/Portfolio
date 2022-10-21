// icons --------------------------------------------
import bs from '../styles/icon/bs.png'
import CSS3 from '../styles/icon/CSS3.png'
import Django from '../styles/icon/Django.png'
import Express from '../styles/icon/Express.png'
import Excalidraw from '../styles/icon/Excalidraw.png' 
import Github from '../styles/icon/Github2.png'
import Heroku from '../styles/icon/Heroku.png'
import HTML5 from '../styles/icon/HTML5.png'
import Insomnia from '../styles/icon/Insomnia.png'
import JavaScript from '../styles/icon/JavaScript.png'
import JWT from '../styles/icon/JWT.png'
import MongoDB from '../styles/icon/MongoDB.png'
import Mongoose from '../styles/icon/Mongoose.png'
import Netlify from '../styles/icon/Netlify.png'
import Nodejs from '../styles/icon/Nodejs.png'
import npm from '../styles/icon/npm.png'
import PostgreSQL from '../styles/icon/Postgresql.png'
import Python from '../styles/icon/Python.png'
import react from '../styles/icon/react.png'
import SASS from '../styles/icon/SASS.png'
import Slack from '../styles/icon/slack.png'
import Tableplus from '../styles/icon/tableplus.png'
import Trello from '../styles/icon/trello.png'
import VSCode from '../styles/icon/VSCode.png'
import Yarn from '../styles/icon/Yarn2.png'

// project images -----------------------------------
import project1 from '../styles/project-images/walking-dead-invaders.gif' 
import project2 from '../styles/project-images/crypto-app.gif' 
import project3 from '../styles/project-images/read-it.gif' 
import project4 from '../styles/project-images/bike-packed.gif' 

// project icon ------------------------------------
import projectLink from '../styles/icon/link-icon.png'
import readMe from '../styles/icon/readme-icon.png'

const projects = [
  {
    title: 'Walking Dead Invaders',
    description: 'A parody of the popular Space Invaders game, reimagined with The Walking Dead theme.',
    link: 'https://markmuy40.github.io/SEI-65-Projects/',
    readMe: 'https://github.com/markmuy40/SEI-65-Projects/blob/main/README.md',
    gitHubLink: 'https://github.com/markmuy40/SEI-65-Project-1',
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
    readMe: 'https://github.com/markmuy40/SEI-65-Project-2/blob/main/README.md',
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
        imageSrc: bs,
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
        imageSrc: bs,
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
        name: 'JSON Web Token',
        imageSrc: JWT,
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
        imageSrc: bs,
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
        name: 'JSON Web Token',
        imageSrc: JWT,
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



const Projects = () => {

  return (
    <div className="main">
      <div className="projects-main">
        <div id="top"></div>
        <h1 className="projects-title">Projects</h1>
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
                      </img></a>
                    <p className="project-link-text">Project Link</p>
                  </div>
                  {/* <div className="project-logo">
                    <a href={project.readMe} target="_blank" rel="noreferrer">
                      <img className="project-icon" src={readMe} title="Project readMe">
                      </img></a>
                    <p className="project-link-text">readMe</p>
                  </div> */}
                  <div className="project-logo">
                    <a href={project.gitHubLink} target="_blank" rel="noreferrer">
                      <img className="project-icon" src={Github} title="GitHub project & readMe ">
                      </img></a>
                    <p className="project-link-text">GitHub & readMe</p>
                  </div>
                </div>
                <div className="techStack-container">
                  { project.techStack.map((icon, index) => (
                    <div key={index} className="tech">
                      <div>
                        <img className="techStack-icon" src={icon.imageSrc} alt={icon.name} title={icon.name}></img>
                      </div>
                      <div>
                        <p className="tag-title">{icon.name}</p>
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
        <a className="back-to-top" href="#top">Back to the top</a>
      </div>
      
    </div>
  )
}

export default Projects