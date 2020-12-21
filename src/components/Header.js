import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header({ toggleSidebar }) {
  return (
    <div className='navbar'>
      <Link to='#' className='menu-bars'>
        <FaIcons.FaBars onClick={toggleSidebar} />
      </Link>
      <div className='logo'>
        Savolus
      </div>
    </div>
  )
}

export default Header