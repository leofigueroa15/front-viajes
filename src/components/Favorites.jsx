import React from 'react'

const Favorites = () => {
    return (
        <div className='container-xl mt-5'>
            <h3 className='text-center mb-5'>Favoritos</h3>

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
    )
}

export default Favorites
