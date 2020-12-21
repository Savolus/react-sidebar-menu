import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import Header from './Header'
import Sidebar from './Sidebar'
import './Navbar.css'

function Navbar() {
	const [sidebar, setSidebar] = useState(false)

	const toggleSidebar = () => setSidebar(sidebar => !sidebar)

	return (
		<>
			<IconContext.Provider value={{color: '#fff'}}>
				<Header toggleSidebar={toggleSidebar} />
				<Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
			</IconContext.Provider>
		</>
	)
}

export default Navbar