import React from 'react';
import './MainDivision.css';
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

const mainDivision = props => {

	return(
		<body>
			<Card style={{ width: '340px', borderRadius:10}} className="cards">
					<Card.Img variant="top" className="image" src={require('./bird_logo.png')} roundedCircle/>
		  			<Card.Body>
		    			<Card.Title className="card_title">
		    				<p>{props.Title}<br/>
		    				<span style={{fontWeight:'normal'}}>{props.SubTitle}</span><span style={{fontWeight:'normal'}}>&nbsp;&#8377;{props.Number}</span></p>
		    			</Card.Title>
		    		
			    		<Card.Text className="card_text">
			     	 		{props.Text}
			    		</Card.Text>
		    			<button className="button2" style={{color:'#20B2AA'}}> {props.Button} </button>
		  			</Card.Body>
				</Card>
		</body>
		);
	}

	export default mainDivision;