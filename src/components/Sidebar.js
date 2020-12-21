import SidebarClose from './SidebarClose'
import SidebarItems from './SidebarItems'

function Sidebar({ sidebar, toggleSidebar }) {
  return (
    <nav className={`nav-menu ${ sidebar && `active` }`}>
      <ul className='nav-menu-items' onClick={toggleSidebar}>
        <SidebarClose />
        <SidebarItems />
      </ul>
    </nav>
  )
}

export default Sidebar