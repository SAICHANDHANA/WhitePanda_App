import React from 'react';
import './Footer.css';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import {Footer} from 'react-materialize'

const footer = props => (
	<div>
		<Footer className="footer">
		   <ul id="icons">
              <li id="list_space" style={{color:'rgb(128,128,128,0.7)'}}><FaTwitter size={36}/></li>              
              <li id="list_space" style={{color:'rgb(128,128,128,0.7)'}}><FaLinkedinIn size={36}/></li>
              <li id="list_space" style={{color:'rgb(128,128,128,0.7)'}}><FaInstagram size={36}/></li>
              <li id="list_space" style={{color:'rgb(128,128,128,0.7)'}}><FaFacebookF size={36}/></li>
            </ul>
			<ul id="copy">Copyright @ 2019 White Panda Media Pvt. Ltd.<br/>All rights reserved</ul>
            <u><ul id="last_row">
              <li>Privacy policy</li>
              <li>|</li>
              <li>Terms of Service</li>
              <li>|</li>
              <li>Service Agreement</li>
              <li>|</li>
              <li>Contact Us</li>
            </ul></u>

            
          
		</Footer>
	</div>
	);

	export default footer;