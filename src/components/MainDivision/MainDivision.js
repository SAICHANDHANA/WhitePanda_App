import React from 'react';
import './MainDivision.css';
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

const mainDivision = props => {

	return(
		<body>
			<Card style={{ width: '355px', borderRadius:10}} id="cards">
		  			<Card.Body>
		    			<Card.Title id="card_title">
		    				<img src={require('./bird_logo.png')} align="left"/>
		    				<span>{props.Title}</span>
		    			</Card.Title>
		    			<Card.Subtitle id="card_subtitle">
		    				{props.SubTitle}<span>&nbsp;&#8377;{props.Number}</span>
		    			</Card.Subtitle>
			    		<Card.Text id="card_text">
			     	 		{props.Text}
			    		</Card.Text>
		    			<button className="button2" style={{color:'#20B2AA'}}> {props.Button} </button>
		  			</Card.Body>
				</Card>
		</body>
		);
	}

	export default mainDivision;