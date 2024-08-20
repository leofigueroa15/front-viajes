import React from 'react'

const Information = () => {
    return (

        
        <>
            <div className="navbar navbar-light bg-primary box-shadow mt-5 mb-0">
                <div className="container d-flex justify-content-between text-white py-4">
                    <div className="col-md-4 mx-auto text-left mb-2">
                        <div className="media">
                            <i className="fas fa-chart-line" style={{ fontSize: '2.45rem' , marginRight: '10%' , marginTop: '0.2rem'  }}></i>
                            <div className="media-body" style={{fontSize: '16px'}}>
                                <h6 className="mt-0 text-white"><u>INCREMENTA TUS VENTAS</u></h6>
                                Gracias a nuestro sistema de reserva, podras mejorar tu desempeño y verlo reflejado en las ganacias de tu negocio.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto text-left mb-2">
                        <div className="media">
                            <i className="bi bi-apple" style={{ fontSize: '1.9rem' , marginRight: '10%' , marginTop: '0.5rem'  }}></i>
                            <div className="media-body" style={{fontSize: '16px'}}>
                                <h6 className="mt-0 text-white"><u>EXPANDE TU PRESENCIA ONLINE</u></h6>
                                Podras usar nuestros servicios desde tu portatil e interconectarla con tu propio site web y asi expandir tu presencia.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mx-auto text-left mb-2">
                        <div className="media">
                            <i className="fas fa-globe" style={{ fontSize: '2.1rem' , marginRight: '10%' , marginTop: '0.4rem'  }}></i>
                            <div className="media-body" style={{fontSize: '16px'}}>
                                <h6 className="mt-0 text-white"><u> APUNTA A UN MAYOR MERCADO</u></h6>
                                Tu presencia en nuestra web, aumenta el alcance de mercado para tus productos y te proporciona frente a la competencia.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information
