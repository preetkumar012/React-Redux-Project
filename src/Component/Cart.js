// import React, { useState,useEffect } from 'react';
// import { useSelector } from 'react-redux';
// function Cart() {

//     return (
//         <>
           
//             <div className='container'>
//                 <h2>welcome to noida</h2>
//                 {filter.map((product)=>{
//                      <div className='row'>
//                      <div className='col-md-4'>
//                          <img src={product.image} alt={product.title} height="200px" width="180px" />
//                      </div>
//                      <div className='col-md-4'>
//                          <h3>{product.title}</h3>
//                          <p className='lead fw-bolder'>
//                              {product.qty} X $ {product.price}=$
//                              {product.qty * product.price}
//                          </p>
//                          <button className='btn btn-outline-dark me-3' onClick={() => handleButton(product)}><i class="fa fa-minus"></i></button>
//                          <button className='btn btn-outline-dark me-3' onClick={() => handleButton(product)}><i class="fa fa-plus"></i></button>
//                      </div>
//                  </div>

//                 })}
               
//             </div>

//         </>
//     )
// }
// export default Cart