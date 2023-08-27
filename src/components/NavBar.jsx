import React, { Fragment, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Electronics from './Electronics';
import Jewelery from './Jewelery';
import Mens from './Mens';
import Women from './Women';
import './syles/home.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './syles/navbar.css'

export const Cart = React.createContext()

function NavBar() {
    const [toggel, settoggel]= useState(false)
    const [cartitem,setCartitem]=useState([])
    
        return (
            <Cart.Provider value={{toggel, cartitem}}>
            <Fragment className='bg-dark'>
                <Navbar expand="lg" style={{"backgroundColor":'#ff7582'}}>
            <Container fluid >
                <Navbar.Brand className='text-light display-1 fw-bolder ' href="/">REACT SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                <Nav
                    className="ms-auto me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link className='text-light fw-semibold' href="/">Home</Nav.Link>
                    <Nav.Link className='text-light fw-semibold' href="/elecronics">Electronics</Nav.Link>
                    <Nav.Link className='text-light fw-semibold' href="/jewelery">Jewellery</Nav.Link>
                    <Nav.Link className='text-light fw-semibold' href="/mens">Men's Clothing</Nav.Link>
                    <Nav.Link className='text-light fw-semibold' href="/women">Women's Clothing</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-light">Search</Button>
                </Form>
                <button className='btn ' onClick={()=>{
                    settoggel(!toggel);
                    console.log(toggel)
                }}>
                <AiOutlineShoppingCart  className='cart text-light '/>
                </button>
                
                
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='/elecronics' element={<Electronics />} />
                <Route path='/jewelery' element={<Jewelery />} />
                <Route path='/mens' element={<Mens />} />
                <Route path='/women' element={<Women />} />
            </Routes>
            </Fragment>
            </Cart.Provider>
            
        );
}

export default NavBar
