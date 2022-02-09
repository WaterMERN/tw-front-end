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
    <Card className="main-card">
    <CardTitle className="trip-title">
            Trip Name: Arizona
        </CardTitle>
        <CardImg
            alt="Card image cap"
            src="https://i.imgur.com/QaSKTBv.jpg"
            top
            width="100%"
            />
        <CardBody>
        <CardSubtitle
            className="total-budget"
        >
            <span className="span-budget">Total Budget:</span> $2000
        </CardSubtitle>
        <CardSubtitle
            className="total-cost"
        >
            <span className="span-cost">Total Cost:</span> $1800
        </CardSubtitle>
        <Button className="more-details"
        color="primary"
        onClick={toggleCard}
        style={{
            marginBottom: '1rem'
            }}
        >
            More Details
        </Button>
        <Collapse isOpen={ toggle }>
            <Card>
            {/* <CardBody>
                Details about this trip: 
            </CardBody> */}
            <CardText className="expenses">
                <span>Expenses:</span><br/>
            </CardText>
            <CardText className="expenses-list">
                <span className="category">Food:</span> $300 <br/>
                <span className="category">Transportation:</span> $800<br/>
                <span className="category">Lodging:</span> $700 <br/>
                <span className="category">Other:</span> $150 <br/>
                <span className="span-cost">Total Cost:</span> $1800
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
