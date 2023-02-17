import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
function Product() {
    const [data, setData] = useState([]);

    const [filter, setFilter] = useState(data);

    const [loading, setLoading] = useState(false);
    let componentMounted = true;


    // ................API integration here start..........
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");

            if (componentMounted) {

                setData(await response.clone().json());

                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
            <div className="col-md-3">
                <Skeleton height={200}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
                <Skeleton height={350}/>
            </div>
                {/* Loading... */}
            </>
        )
    }
  const filterProduct=(cat)=>{
    const updateList=data.filter((x)=> x.category===cat);
    setFilter(updateList);
  }
    const ShowProdcuts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center my-3 pb-5">
                    <button className="btn btn-outline-dark me-2 " onClick={()=> setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2"  onClick={()=>filterProduct("men's clothing")}>men's Clothing</button>
                    <button className="btn btn-outline-dark me-2"  onClick={()=>filterProduct("women's clothing")}>women's Clothing</button>
                    <button className="btn btn-outline-dark me-2"  onClick={()=>filterProduct("electronics")}>Electronics</button>
                    <button className="btn btn-outline-dark me-2"  onClick={()=>filterProduct("jewelery")}>Jewelery</button>
                </div>
                {filter.map((product, id) => {
                    return (
                        <>
                            <div className="col-md-3 mb-3">
                                <div className="card h-80 p-4 text-center shadow-sm" key={product.id}  style={{border:"2px solid red"}}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                                        <div className="card-body">
                                            <h5 className="card-title mb-2">{product.title.substring(0, 12)}</h5>
                                            <p className="card-text lead fw-bold"><strong>${product.price}</strong></p>
                                            <NavLink to={`/product/${id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    // ................API integration here end..........
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h2 className="display-6 fw-bold text-center">Latest products</h2>

                    </div>
                    <hr />
                </div>

                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProdcuts />}

                </div>
            </div>
        </>
    )
}
export default Product;