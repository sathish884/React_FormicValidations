import React from 'react';
import './Dashboard.css';
import { Rate } from 'antd';
import { Link, BrowserRouter as Router } from 'react-router-dom';


function Dashboard() {
    return (
        <>
            <div className="container-fluid">
                <div className="row" style={{ minHeight: "92.9vh" }}>
                    <div className="col-2 left-sidemenu d-flex flex-column justify-content-between" style={{ backgroundColor: "white" }}>

                        <div style={{ padding: "20px 0px" }}>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item ps-3"><i className="bi bi-house-fill"></i>&nbsp;&nbsp;Dashboard</li>
                                <li className="list-group-item ps-3"><i className="bi bi-book-fill"></i>&nbsp;&nbsp;Books</li>
                                <li className="list-group-item ps-3"><i className="bi bi-people-fill"></i>&nbsp;&nbsp;Author</li>
                            </ul>
                        </div>

                        <div style={{ padding: "20px 0px" }}>
                            <div className="card text-center text-white" style={{ width: "13rem", fontWeight: "700" }}>
                                <img src="card-img1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body" style={{ backgroundColor: "#BEB149" }}>
                                    <h5 className="card-title">Upgrad Pro+</h5>
                                    <p className="card-text">Try all feature for your shop free 1 month.</p>
                                    <a href="" className="btn" style={{ backgroundColor: "#2E3744", color: "white" }}>Upgrade Pro+</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-7 pt-5" style={{ backgroundColor: "#F9F9F9" }}>

                        <div className="card d-flex flex-row px-5 py-3 center-card" style={{ backgroundColor: "#EDEDEB" }}>
                            <div className='pt-5'>
                                <h2 className="card-title">Upload Your book to increse your sales</h2>
                                <p className="card-text">Engage your shop book with this dashboard and make sales everyday to your shop</p>

                                <button className='btn' style={{ backgroundColor: "#2E3744", color: "white" }}>
                                    <Link to={'/create-books'} style={{ backgroundColor: "#2E3744", color: "white", textDecoration: "none" }}>+Add New Book</Link>
                                </button>


                            </div>
                            <div>
                                <img src="card-img6.jpg" alt="" style={{ width: "100%", height: "300px" }} />
                            </div>
                        </div>

                        <div className='p-3 d-flex justify-content-between'>
                            <h5>Popular Now &nbsp; <i className="bi bi-fire" style={{ color: "orange" }}></i></h5>
                            <Link to={'/list-books'}>See more...</Link>
                        </div>

                        <div>
                            <div className="card book-card" style={{ width: "14rem" }}>
                                <div className="card-header" style={{ backgroundColor: "#A54814" }}>
                                    <img src="card-img5.jpg" className="card-img-top img-thumbnail" alt="..." />
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <Rate allowHalf defaultValue={2.5} />

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-3 right-sidemenu" style={{ backgroundColor: "#2E3744" }}>
                        <div className='sidemenu-img'>
                            <img className='rounded img-fluid img-thumbnail' src="back-img.png" alt="" style={{ width: "100%", height: "300px" }} />
                        </div>
                    </div>
                </div>
                {/* className='rounded img-fluid img-thumbnail' */}
            </div>
        </>
    )
}

export default Dashboard