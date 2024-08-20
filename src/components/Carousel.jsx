import React from 'react'

const Carousel = () => {
    return (
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
    )
}

export default Carousel
