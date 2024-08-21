import React from 'react'
import Button from 'react-bootstrap/Button';

const Search = () => {
    return (
        <div className="row mt-3 search" style={{ height: '23rem' }}>
            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src="./public/img/logoReservalo.png" alt="imagen guitarra" />
                </div>
                <Button variant="primary">Primary</Button>

            </div>
        </div>
    )
}

export default Search
