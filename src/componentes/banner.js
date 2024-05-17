import React from "react";

const Banner =() => {
    return (
        <section className="container-fluid p-0">
            <div className="banner-img" style={{ position: 'relative', background: "url('images/logo/logorestaurante.png') center/cover no-repeat", height: '400px' }}>
                <div className="banner-text" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center', color: 'white' }}>
                    <h1>Bienvenido al restaurante de la abuela</h1>
                    <h3>El restaurante que te acerca a casa</h3>
                    <a href="#" className="btn btn-primary">Ver menú</a>
                </div>
            </div>
        </section>
    );
}

export default Banner;
