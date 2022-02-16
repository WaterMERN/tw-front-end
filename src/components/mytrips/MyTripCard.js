    import React, { useState } from 'react'
    import axios from 'axios'
    import { Col, CardColumns, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Collapse} from 'reactstrap'
    import '../../css/MyTripCardStyle.css'
    import TripCardExpenses from './TripCardExpenses'
    import AddExpenseItem from '../createtrip/AddExpenseItem'
    import ExpenseList from '../createtrip/ExpenseList'


    const MyTripCard = ({tripId, budget, expenses, name, length, cost }) => {
        const [toggle, setToggle] = useState(false)
        const toggleCard = () => setToggle(!toggle) 
        
        const [toggleUpdate, setToggleUpdate]= useState(false)
        const updateToggle = () => setToggleUpdate(!toggleUpdate)

        const [toggleDelete, setToggleDelete]= useState(false)
        const deleteToggle = () => setToggleDelete(!toggleDelete)

        const [tripExpenses, setTripExpenses] = useState(expenses)
        const [currentCost, setCurrentCost] = useState(cost)

        const authorizeURL = { Authorization:` Bearer ${localStorage.getItem('token')}`}   
  
        const deleteTrip = `https://limitless-stream-53863.herokuapp.com/trips/${tripId}`
        const handleTripDelete = async (event) => {
            event.preventDefault()
            await axios({
                method: 'DELETE',
                url: deleteTrip,
                data: null,
                headers: authorizeURL
            })
            .then(res => console.log(res))
            .then(window.location.reload(false))
        }

        const updateTrip = `https://limitless-stream-53863.herokuapp.com/trips/${tripId}`
        const handleTripUpdate = async (event) => {
            event.preventDefault();
            await axios({
                method: "PUT",
                url: updateTrip,
                data: {expenses: tripExpenses},
                headers: authorizeURL
            })
            .then((res) => console.log(res))
            
        }
        return ( 
            <Col className=" trip-card-container">
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
                        <span className="span-cost">Total Cost:</span> ${currentCost}
                    </CardSubtitle>
                    <CardSubtitle className="total-cost">
                        <span className="span-budget">Trip Length:</span> {length}
                    </CardSubtitle>
                    <Button className="more-details-button" color="primary" onClick={toggleCard} style={{ marginBottom: '1rem' }} >
                        More Details
                    </Button>
                    <Collapse isOpen={ toggle }>
                        <Card>
                        <CardText className="expenses"> <span className="current-expenses-span">Current Expenses:</span><br/> </CardText>
                        <CardText className="expenses-list">  <TripCardExpenses tripExpenses = {expenses} /> </CardText>
                        </Card>
                    </Collapse>
                    <Button className="update-expenses-button" color="primary" onClick={updateToggle} style={{ marginBottom: '1rem' }} >
                        Update Expenses
                    </Button>
                    <Collapse isOpen={ toggleUpdate }>
                        <Card>  
                            <AddExpenseItem expenseList= {tripExpenses} setExpenseList={setTripExpenses} totalCost={currentCost} setTotalCost={setCurrentCost}/>
                            <ExpenseList expenseList= {tripExpenses} setExpenseList={setTripExpenses}/>
                            <button className="update-trip-exepenses-button" onClick={handleTripUpdate}>Update Trip Expenses</button>
                        </Card>
                    </Collapse>
                    <Button className="delete-trip-button" color="primary" onClick={deleteToggle} style={{ marginBottom: '1rem' }} >
                    Delete Trip
                    </Button>
                    <Collapse isOpen={ toggleDelete }>
                        <Card>
                        <CardText className="delete-trip">
                            <span>Are you Sure You want to Delete this trip?</span><br/>
                        </CardText>
                        <Button onClick={handleTripDelete}>Delete Trip Forever</Button>
                        </Card>
                    </Collapse>
                </CardBody>
                </Card>
            </CardColumns>
            </Col>
        
                    );
            }
        
            export default MyTripCard;
        
