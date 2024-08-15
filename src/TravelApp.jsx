import React from 'react'

const TravelApp = () => {
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <img style={{ height: '100px' }} src="https://coreui.io/images/blog/react-bootstrap-cover_hu8f3ef334ae1c9ec06b7236fe5f558336_47596_1360x0_resize_q90_h2_box_2.webp" />
                </div>
                <div className="row mt-10">
                    <div className="col">
                        <label>reservalo.com</label>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-light">Login</button>
                        <button type="button" className="btn btn-light">Registrarse</button>
                    </div>
                </div>
                <div className="row">
                   
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="https://historia.nationalgeographic.com.es/medio/2019/12/11/coliseo-roma_2924b6ae_1280x720.jpg" className="card-img-top" />
                            <div className="card-body">
                                <a href="#">Roma</a>
                            </div>
                       
                    </div>
                </div>
                <div className="row">

                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
                            </div>
                            <div className="carousel-item">
                                <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>
                            </div>
                            <div className="carousel-item active">
                                <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="row">
                    row 5
                </div>
                <div className="row">
                    row 6
                </div>
                <div className="row">
                    row 7
                </div>
            </div>

        </>
    )
}

export default TravelApp
