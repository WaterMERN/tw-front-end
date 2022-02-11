import React, { useState } from "react";
import { InputGroup, InputGroupText, Input, Button, Collapse} from 'reactstrap'
import '../css/home.css'
import axios from "axios";

const Home = () => {
    

    let newUser = {
        email: '',
        password: ''
    }
    const [user, setUser] = useState(newUser)
    const [toggleCreate, setToggleCreate] = useState(false)
    const toggleCreateAccount = () => setToggleCreate(!toggleCreate) 
    const [toggleLogin, setToggleLogin] = useState(false)
    const toggleLoginAccount = () => setToggleLogin(!toggleLogin) 

    const handleChange = (event) => {
        event.preventDefault()
        setUser({ ...user, [event.target.id]: event.target.value,});
        console.log(user);
    }

    const createURL = 'http://localhost:8000/createaccount'
    const createAccount = async (event) => {
        //axios post 
        event.preventDefault()
        try {
            await axios({
            method: 'post',
            url: createURL,
            data: newUser
            })
            .then(res => console.log(res))
        } catch (error) {
            
        }
          
    }
    const loginAccount = () => {
        //axios post
    }
    return(
        <div className="account-page">
            <Button className="account-buttons" color="primary" onClick={toggleLoginAccount} style={{ marginBottom: '1rem' }} >
               Login 
            </Button>
            <Collapse isOpen= { toggleLogin }>
            <InputGroup>
                <InputGroupText >Username</InputGroupText>
                <Input id="email" onChange={handleChange} value={user.email} placeholder="email" />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText >Password</InputGroupText>
                <Input id="password" onChange={handleChange} value={user.password} placeholder="password" />
            </InputGroup>
            <Button> Login into Account</Button>
            </Collapse>
            <Button className="account-buttons" color="primary" onClick={toggleCreateAccount} style={{ marginBottom: '1rem' }} >
               Create Account
            </Button>
            <Collapse isOpen= { toggleCreate }>
            <InputGroup>
                <InputGroupText >Username</InputGroupText>
                <Input id="email" onChange={handleChange} value={user.email} placeholder="email" />
            </InputGroup>
            <br />
            <InputGroup>
                <InputGroupText >Password</InputGroupText>
                <Input id="password" onChange={handleChange} value={user.password} placeholder="password" />
            </InputGroup>
            <Button> Create New Account</Button>
            </Collapse>
        
        </div>
    )
}

export default Home