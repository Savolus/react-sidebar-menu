import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css'

function Navbar() {
	const [sidebar, setSidebar] = useState(false)

	const toggleSidebar = () => setSidebar(sidebar => !sidebar)

	return (
		<>
			<IconContext.Provider value={{color: '#fff'}}>
				<div className='navbar'>
					<Link to='#' className='menu-bars'>
						<FaIcons.FaBars onClick={toggleSidebar} />
					</Link>
					<div className='logo'>
						Savolus
					</div>
				</div>
				<nav className={`nav-menu ${ sidebar && `active` }`}>
					<ul className='nav-menu-items' onClick={toggleSidebar}>
						<li className='navbar-toggle'>
							<Link to='#' className='menu-bars'>
								<AiIcons.AiOutlineClose />
							</Link>
						</li>
						{
							SidebarData.map((item, index) => {
								return (
									<li key={index} className='nav-text'>
										<Link to={item.path}>
											{item.icon}
											<span>
												{item.title}
											</span>
										</Link>
									</li>
								)
							})
						}
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	)
}

export default Navbar