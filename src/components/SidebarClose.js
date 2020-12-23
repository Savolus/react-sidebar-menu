import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'

function SidebarClose({ toggleSidebar }) {
  return (
    <li className='navbar-toggle'>
      <Link to='#' className='menu-bars'>
        <AiIcons.AiOutlineClose onClick={toggleSidebar} />
      </Link>
    </li>
  )
}

export default SidebarClose