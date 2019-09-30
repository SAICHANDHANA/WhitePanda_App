import React from 'react';
import './MainDivision.css';
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

const mainDivision = props => {

	return(
		
		<Card style={{ width: '340px', borderRadius:8}} className="cards row">
				
				<div className="col-3" style={{paddingTop:'25px'}}>
					<img id="image" />
				</div>
	  			<div className="col-9">
		  			<Card.Body>
		    			<Card.Title className="card_title">
		    				<p><span id="hover_effect">{props.Title}</span><br/>
		    				<span style={{fontWeight:'normal'}}>{props.SubTitle}</span><span style={{fontWeight:'normal'}}>&nbsp;&#8377;{props.Number}</span></p>
		    			</Card.Title>

			    		<Card.Text className="card_text">
			     	 		{props.Text}
			    		</Card.Text>
		    			<button className="button2" style={{color:'#20B2AA'}}> {props.Button} </button>
		  			</Card.Body>
	  			</div>
	  			
		</Card>
		
		);
	}

	export default mainDivision;