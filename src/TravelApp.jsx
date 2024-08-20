import React from 'react'

const TravelApp = () => {
    return (
        <>
            <header class="py-5 header"></header>
            <header class="py-4">
                <div class="container-xl">
                    <div class="row justify-content-center justify-content-md-between">
                        <div class="col-8 col-md-3">
                            <a href="index.html">
                                <h3>reservalo.com</h3>
                            </a>
                        </div>
                        <div class="col-md-6 a d-flex align-items-start justify-content-end">
                            <button type="button" class="btn btn-outline-secondary">Login</button>
                            <button type="button" class="btn btn-outline-secondary">Registrarse</button>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <div class="row mt-3 search">
                    <div class="col-md-6 col-lg-4 my-4 row align-items-center">
                        <div class="col-4">
                            <img class="img-fluid" src="./public/img/logoReservalo.png" alt="imagen guitarra" />
                        </div>
                        <div class="col-8">
                            <h3 class="text-black fs-4 fw-bold text-uppercase">Hazel</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                            <p class="fw-black text-primary fs-3">$299</p>
                            <button
                                type="button"
                                class="btn btn-dark w-100 "
                            >Agregar al Carrito</button>
                        </div>
                    </div>
                </div>



                <div className='container-xl mt-5'>
                    <div class="row justify-content-center justify-content-md-between">
                        <div class="card" style={{ width: '18rem' }} className='ml-3'>
                            <img src="./public/img/roma.png" class="card-img-top" />
                            <div class="card-body text-center">
                                <a href="#" className="btn btn-primary">Roma</a>
                            </div>
                        </div>

                        <div class="card" style={{ width: '18rem' }} className='ml-3'>
                            <img src="./public/img/roma.png" class="card-img-top" />
                            <div class="card-body text-center">
                                <a href="#" className="btn btn-primary">Roma</a>
                            </div>
                        </div>

                        <div class="card" style={{ width: '18rem' }} className='ml-3'>
                            <img src="./public/img/roma.png" class="card-img-top" />
                            <div class="card-body text-center">
                                <a href="#" className="btn btn-primary">Roma</a>
                            </div>
                        </div>

                        <div class="card" style={{ width: '18rem' }} className='ml-3'>
                            <img src="./public/img/roma.png" class="card-img-top" />
                            <div class="card-body text-center">
                                <a href="#" className="btn btn-primary">Roma</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 bgInfo">
                    <div>
                        sdds
                    </div>
                </div>


            </main>
            <footer class="bg-dark mt-5 py-5">
                <div class="container-xl">
                    <p class="text-white text-center fs-4 mt-4 m-md-0">Reservalo - Todos los derechos Reservados</p>
                </div>
            </footer>
        </>
    )
}

export default TravelApp
