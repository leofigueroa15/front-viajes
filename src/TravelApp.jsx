import React from 'react'

const TravelApp = () => {
    return (
        <>
            <header className="py-5 header"></header>
            <header className="py-4">
                <div className="container-xl">
                    <div className="row justify-content-center justify-content-md-between">
                        <div className="col-8 col-md-3">
                            <a href="index.html">
                                <h3>reservalo.com</h3>
                            </a>
                        </div>
                        <div className="col-md-6 a d-flex align-items-start justify-content-end">
                            <button type="button" className="btn btn-outline-secondary">Login</button>
                            <button type="button" className="btn btn-outline-secondary">Registrarse</button>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div className="row mt-3 search" style={{ height: '23rem' }}>
                    <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                        <div className="col-4">
                            <img className="img-fluid" src="./public/img/logoReservalo.png" alt="imagen guitarra" />
                        </div>

                    </div>
                </div>



                <div className='container-xl mt-5'>
                    <div className="row justify-content-center justify-content-md-between">
                        <div style={{ width: '18rem' }} className='ml-3 card'>
                            <img src="./public/img/roma.png" className="card-img-top" />
                            <div className="card-body text-center">
                                <a href="#" className="btn btn-primary">Roma</a>
                            </div>
                        </div>

                        <div style={{ width: '18rem' }} className='ml-3 card'>
                            <img src="./public/img/roma.png" className="card-img-top" />
                            <div className="card-body text-center">
                                <a href="#" className="btn btn-primary">Roma</a>
                            </div>
                        </div>

                        <div style={{ width: '18rem' }} className='ml-3 card'>
                            <img src="./public/img/roma.png" className="card-img-top" />
                            <div className="card-body text-center">
                                <a href="#" className="btn btn-primary">Roma</a>
                            </div>
                        </div>

                        <div style={{ width: '18rem' }} className='ml-3 card'>
                            <img src="./public/img/roma.png" className="card-img-top" />
                            <div className="card-body text-center">
                                <a href="#" className="btn btn-primary">Roma</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mt-5 bgInfo">
                    <div className="col">
                        One of three columns
                    </div>
                    <div className="col">
                        One of three columns
                    </div>
                    <div className="col">
                        One of three columns
                    </div>
                </div>



                <div className='container-xl mt-5'>
                    <h3 className='text-aling-center'>Nuevas cargas</h3>

                    <div className="row justify-content-center justify-content-md-between">
                        <div style={{ width: '18rem' }} className='ml-3 card'>
                            <img src="./public/img/roma.png" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Ciudad</h5>
                                <p className="card-text">Opiniones</p>
                                <p className="card-text">Apertura</p>
                            </div>
                        </div>

                        <div style={{ width: '18rem' }} className='ml-3 card'>
                            <img src="./public/img/roma.png" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Ciudad</h5>
                                <p className="card-text">Opiniones</p>
                                <p className="card-text">Apertura</p>
                            </div>
                        </div>

                        <div style={{ width: '18rem' }} className='ml-3 card'>
                            <img src="./public/img/roma.png" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Ciudad</h5>
                                <p className="card-text">Opiniones</p>
                                <p className="card-text">Apertura</p>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">Footer - Todos los derechos Reservados</p>
                </div>
            </footer>
        </>
    )
}

export default TravelApp
