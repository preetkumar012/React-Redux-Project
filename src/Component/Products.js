import React,{useState, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
import {useDispatch } from 'react-redux';
import {addCart, delCart} from './redux/action/index';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { createApi } from '@reduxjs/toolkit/query';
function Products(){
    const dispatch=useDispatch();
   
    const {id}=useParams();
    const[product, setProduct]=useState([]);
    const[loading, setLoading]=useState(false);

      
   

    useEffect(()=>{
        const getProduct=async ()=>{
            setLoading(true);
            const response=await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    },[])

    const Loading=()=>{
        return(
            <>
            <div className='col-md-6' >
                <Skeleton height={400}/>
            </div>
            <div className='col-md-6'style={{lineHeight:2}} >
                <Skeleton height={50} width={300}/>
                <Skeleton height={75}/>
                <Skeleton height={25} width={150} />
                <Skeleton height={50}/>
                <Skeleton height={150}/>
                <Skeleton height={50} width={100}/>
                <Skeleton height={50} width={100} style={{marginLeft:"0px"}}/>
            </div>
            {/* Loading... */}
            </>
        )
    }
    const ShowProduct=()=>{
        return(
            <>
            <div className='col-md-6 my-4 py-5'>
                <img src={product.image} alt={product.title} height="400px" width="400px"/>
            </div>
            <div className='col-md-6 my-5 py-4'>
                <h4 className='text-uppercase text-black-50'>
                {product.category}
                </h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>
                    Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
                 <h3>$ {product.price}</h3>
                <p>{product.description}</p>
                <button className='btn btn-outline-dark mt-4' onClick={()=> dispatch(addCart(product))}>Add To Cart</button>
                {/* <button className='btn btn-outline-dark mt-4' onClick={()=> dispatch(delCart(product))}>Remove To Cart</button> */}
                <NavLink  to ="/cart" className='btn btn-outline-dark ms-3 mt-4'>Go To Cart</NavLink>
              
            </div>
            </>
        )

    }
    return(
        <>
        <div className='container py-5'>
            <div className='row py-5'>
                {loading ? <Loading/>:<ShowProduct/>}
            </div>
        </div>
        </>
    )
}
export default Products;