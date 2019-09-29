import React from 'react';
import './Toolbar.css';
import { FaBell } from 'react-icons/fa';


const toolbar = props => (
	<header className="toolbar">
		<nav className="toolbar_navigation">
			<div/>
			<div className="toolbar_logo"> <img className="toolbar_image" src={require('./white_panda_logo.png')}/></div>
			<div className="spacer"/>
			<div className="toolbar_navigation_items">
				<ul>
					<li><a href="/"><FaBell/></a></li>
					<li><a href="/">Users</a></li>
				</ul>
			</div>
		</nav>
	</header>

	);

	export default toolbar;