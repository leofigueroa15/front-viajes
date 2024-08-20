import React from 'react'

const Header = () => {
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
        </>
    )
}

export default Header
