import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'

function SidebarClose() {
  return (
    <li className='navbar-toggle'>
      <Link to='#' className='menu-bars'>
        <AiIcons.AiOutlineClose />
      </Link>
    </li>
  )
}

export default SidebarClose