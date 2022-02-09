import {
    Col,
    CardColumns, 
    Card, 
    CardImg, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText, 
    Button, 
    Collapse
}
from 'reactstrap'
import '../css/MyTripCardStyle.css'
import { useState } from 'react'

const MyTripCard = () => {
    const [toggle, setToggle] = useState(false)
    const toggleCard = () => setToggle(!toggle)  //setting toggle to whatever it is not 
    
    return ( 
<Col>
<CardColumns>
    <Card>
    <CardTitle className="trip-title">
            Trip Name: Barcelona 
        </CardTitle>
        <CardImg
            alt="Card image cap"
            src="https://i.imgur.com/QaSKTBv.jpg"
            top
            width="100%"
            />
        <CardBody>
        <CardSubtitle
            className="subtitle"
        >
            Total Budget: $1200
        </CardSubtitle>
        <CardSubtitle
            className="subtitle"
        >
            Total Cost: $1350
        </CardSubtitle>
        <Button
        color="primary"
        onClick={toggleCard}
        style={{
            marginBottom: '1rem'
            }}
        >
            Details
        </Button>
        <Collapse isOpen={ toggle }>
            <Card>
            <CardBody>
                Details about this trip: 
            </CardBody>
            <CardText className="trip-card-expenses">
                Expenses: 
                
            </CardText>
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
