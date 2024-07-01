import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {AddToCart} from './src/Action'


const Home = () => {

    const state = useSelector((result) =>{
        return result.AddToCart.cart
    })

    const dispatch = useDispatch()
  return (
    <>
        <button onClick={()=>{
            dispatch(AddToCart())
        }}>Add To Cart</button>   
    </>
  );
}

export default Home;
