import react,{Fragment, useState, useEffect, useContext} from 'react'
import './syles/home.css'
import Slider from './SliderCarousel'
import { Col } from 'react-bootstrap'
import {GrAdd,GrSubtract} from 'react-icons/gr'
import {Cart} from './NavBar'

function Jewelery() {
    const {toggel,cartitem} = useContext(Cart)
    const [data, setData]= useState([])
    const [count,setCount]=useState(0)
    const fetchUserData = ()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery').then(
        response => {return response.json()}
    ).then(data => {
        setData(data)
    })
    
    }
    useEffect(() => {
        fetchUserData();
    }, [count])
    return (
        <div className='container'>
            <div className={toggel ? 'cartpageactive  text-white' : 'cartpagehidden text-white'} >
                {
                    cartitem.map(
                        (item)=>{
                            return(
                                <div className='d-flex p-3 border align-self-center'>
                                    <img className='item-img img-fluid ' src={item.image} alt='' />
                                    <p className='p-1 m-1'>{item.title}</p>
                                    <p>
                                        <GrAdd className=' mt-2'/> 
                                        <GrSubtract className=' mt-2 ms-3 '/>
                                    </p>
                                </div>
                            )
                        }
                    )
                }

            </div>
            
        <div className='row gy-2 pt-3'>
        {
            data.map(
            (product)=>{
                return(
                        <Col sm={6} md={4} lg={3} className=''>
                            <div className='   product rounded p-3'>
                                <img className='border p-2  img-fluid ' src={product.image} alt='' />
                                <p className='price' >{product.price}$</p>
                                <p>{product.title}</p>
                                <div className='w-100 h-100 description p-2 d-flex flex-column justify-content-between '>
                                    <p className='p-3'>{product.description}</p>
                                    <button className='btn text-light bg-secondary bg-gradient' onClick={()=>{
                                        return (
                                            cartitem.push(product),
                                            setCount(count+1)
                                        );
                                    }}>Add To Cart</button>
                                </div>
                                
                            </div>
                        </Col>

                )
            }
            )
        }
        </div>
        </div>
    )
    }

export default Jewelery
