import { Link } from 'react-router-dom'

const NotFound = () => {

  return (
    <div className="main">
      <div className="notFound-container">
        <h3 className="notFound-header">Oops! You hit hyperdrive and missed the exit!</h3>
        <Link className="notFound-nav" to='/'>Click here to head back home</Link>
        
      </div>
    </div>
  )
}

export default NotFound