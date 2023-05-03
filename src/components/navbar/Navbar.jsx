// style
import './Navbar.css'

function Navbar({userslength}) {
  return (
    <div className='navbar'>
      <div className="navbar-container container">
        <h1 className='navbar-logo'>CUser</h1>
        <h3 className='navbar-counter'>{userslength > 0 ? `You have: ${userslength}` : `No user :(`}</h3>
      </div>
    </div>
  )
}


export default Navbar