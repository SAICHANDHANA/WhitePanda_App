import React from 'react';
import './Toolbar.css';
import { FaBell } from 'react-icons/fa';


const toolbar = props => (
	<header className="toolbar">
		<nav className="toolbar_navigation">
			<div className="toolbar_logo"> <img className="toolbar_image" src={require('./white_panda_logo.png')}/></div>
			<div className="spacer"/>
			<div className="toolbar_navigation_items">
				<ul><div className="button_notif">
					<li style={{paddingTop:'12px'}}>
						<a href="/"><FaBell size={28}/></a>
						<span className="button_badge">	
							699
						</span>
					</li></div>
					<li><a href="/"><button id="button_icon">AB</button></a></li>
				</ul>
			</div>
		</nav>
	</header>

	);

	export default toolbar;