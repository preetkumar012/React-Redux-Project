// import React, { useState,useEffect } from 'react';
// import Skeleton from 'react-loading-skeleton';
// import { useSelector } from 'react-redux';
// function Cart() {
//     const[product, setProduct]=useState([]);
//     const[filter, setFilter]=useState(product);
//     const[loading, setLoading]=useState(false);
//     useEffect(()=>{
//         const getProduct= async () =>{
//             setLoading(true);
//             const response=await fetch("https://fakestoreapi.com/products");
//             setProduct(await response.clone().json())
//             setFilter(await response.json());
//             setLoading(false);

//         }
//         getProduct();
//     },[])

//     const Loading=()=>{
//         return(
//             <>
//             loading......
//             </>
//         )
//     }
//     const Skeleton=()=>{
//         return(
//             <>
//             <div className='col-md-4'>
//                 {filter.map((product,id)=>{
//                 <img src={product.image} alt={product.title}/>
//                 })}
//             </div>
//             </>
//         )
//     }

//     return (
//         <>
           
//             <div className='container'>
//              <h2>welcome to noida</h2>
//                {
//                 loading ? <Loading/>:<Skeleton/>
//                }
//             </div>

//         </>
//     )
// }
// export default Cart