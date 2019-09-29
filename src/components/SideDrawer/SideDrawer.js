import React from 'react';
import './SideDrawer.css';
import { FaSearch,FaStore } from 'react-icons/fa';
import { Icon, InlineIcon } from '@iconify/react';
import thLarge from '@iconify/icons-el/th-large';

const sideDrawer = props => {

	return (
		<nav className="side_drawer">
			<div className="movable_side">
				<ul>
					<li><a href="#"> <Icon icon={thLarge}/></a></li>
					<li><a href="#"><FaSearch/></a></li>
					<li><a href="#"><FaStore/></a></li>
				</ul>
			</div>
		</nav>
	);
	}

	export default sideDrawer;