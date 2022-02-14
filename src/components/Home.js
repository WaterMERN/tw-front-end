import React, { useState } from "react";
import { InputGroup, InputGroupText, Input, Button, Collapse} from 'reactstrap'
import '../css/home.css'
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ authToken, setAuthToken }) => {
    

    let newUser = {
        email: '',
        password: ''
    }
    let userLogin = {
        email: '',
        password: ''
    }
    const [user, setUser] = useState(newUser)
    const [login, setLogin] = useState(userLogin)
    const [toggleCreate, setToggleCreate] = useState(false)
    const toggleCreateAccount = () => setToggleCreate(!toggleCreate) 
    const [toggleLogin, setToggleLogin] = useState(false)
    const toggleLoginAccount = () => setToggleLogin(!toggleLogin) 

    const handleChange = (event) => {
        event.preventDefault()
        setUser({ ...user, [event.target.id]: event.target.value,});
        setLogin({ ...login, [event.target.id]: event.target.value,})
        console.log(user)
        console.log(login);
    }
    
    const createURL = 'http://localhost:8000/createaccount'
    const loginURL = 'http://localhost:8000/login'
    const createAccount = async (event) => {
        //axios post 
        event.preventDefault()
        try {
            await axios({
            method: 'post',
            url: createURL,
            data: user
            })
            .then(res => console.log(res))
        } catch (error) {
            
        }
          
    }
    const loginAccount = async (event) => {
        //axios post
        event.preventDefault()
        try {
            await axios({
            method: 'post',
            url: loginURL,
            data: user
            })
            .then(res => setAuthToken(res.data.token))
            //take res.data.token and assign it to a state that can be used in context
            .then(console.log(authToken))
            
        } catch (error) {
            
        }
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
           <Link to= "/mytrips" > <Button onClick={loginAccount}> Login into Account</Button></Link>
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
            <Button onClick={createAccount}> Create New Account</Button>
            </Collapse>
        
        </div>
    )
}

export default Home