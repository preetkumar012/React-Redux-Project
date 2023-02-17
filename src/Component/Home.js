import React from "react";
import Product from "./Product";
function Home() {
    return (
        <>
            <div className="card bg-dark text-white border-0">
                <img src="images/img.jfif" className="card-img" alt="background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title fs-3 fw-bold">Welcome to Our Products</h5>
                        <p className="card-text fs-5 fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                    </div>
                </div>
            </div>
            <Product/>
        </>
    )
}
export default Home