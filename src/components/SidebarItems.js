import { SidebarData } from './SidebarData'
import SidebarItem from './SidebarItem'

function SidebarItems() {
  return (
    <>
      {
        SidebarData.map((item, index) => {
          return (
            <SidebarItem 
              item={item} 
              index={index} 
            />
          )
        })
      }
    </>
  )
}

export default SidebarItems