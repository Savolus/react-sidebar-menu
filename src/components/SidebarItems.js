import { SidebarData } from './SidebarData'
import SidebarItem from './SidebarItem'

function SidebarItems({ toggleSidebar }) {
  return (
    <>
      {
        SidebarData.map((item, index) => {
          return (
            <SidebarItem 
              item={item} 
              index={index}
              toggleSidebar={toggleSidebar}
            />
          )
        })
      }
    </>
  )
}

export default SidebarItems