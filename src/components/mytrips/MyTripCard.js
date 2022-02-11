import React, { useState } from 'react'
import { Col, CardColumns, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Collapse} from 'reactstrap'
import '../../css/MyTripCardStyle.css'
import TripCardExpenses from './TripCardExpenses'


// NEEDS Totals, expenseList, add expense components and save trip button all nested inside of trip details drop down button

const MyTripCard = ({tripId, budget, expenses, name, length, cost}) => {
    const [toggle, setToggle] = useState(false)
    const toggleCard = () => setToggle(!toggle)  //setting toggle to whatever it is not 
    
    const [toggleUpdate, setToggleUpdate]= useState(false)
    const updateToggle = () => setToggleUpdate(!toggleUpdate)

    return ( 
    <Col>
    <CardColumns>
        <Card className="main-card">
        <CardTitle className="trip-title">
                Trip Name: {name}
            </CardTitle>
            <CardImg
                alt="Card image cap"
                src="https://i.imgur.com/QaSKTBv.jpg"
                top
                width="100%"
                />
            <CardBody>
            <CardSubtitle className="total-budget">
                <span className="span-budget">Total Budget:</span> ${budget}
            </CardSubtitle>
            <CardSubtitle className="total-cost" >
                <span className="span-cost">Total Cost:</span> ${cost}
            </CardSubtitle>
            <CardSubtitle className="total-cost">
                <span className="span-budget">Trip Length:</span> {length}
            </CardSubtitle>
            <Button className="more-details" color="primary" onClick={toggleCard} style={{ marginBottom: '1rem' }} >
                More Details
            </Button>
            <Collapse isOpen={ toggle }>
                <Card>
                {/* <CardBody>
                    Details about this trip: 
                </CardBody> */}
                <CardText className="expenses"> <span>Expenses:</span><br/> </CardText>
                <CardText className="expenses-list">  <TripCardExpenses tripExpenses = {expenses} /> </CardText>
                </Card>
            </Collapse>
            <Button className="more-details" color="primary" onClick={updateToggle} style={{ marginBottom: '1rem' }} >
            Delete Trip
            </Button>
            <Collapse isOpen={ toggleUpdate }>
                <Card>
                {/* <CardBody>
                    Details about this trip: //CHANGE TO DELETE BUTTON 
                </CardBody> */}
                <CardText className="delete-trip">
                    <span>Are you Sure You want to Delete this trip?</span><br/>
                </CardText>
                <Button>Delete Trip Forever</Button>
                </Card>
            </Collapse>
        </CardBody>
        </Card>
    </CardColumns>
    </Col>

        );
}

export default MyTripCard;


//info for trip card : 
//photo ? 
//Name 
//Total budget 
//Total cost 
//trip length
// link to trip / expand trip 
