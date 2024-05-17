import React from "react";

const Testimonials =() => {
    return (
        <section id="Testimonios" class="bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-4">Testimonios</h2>
            <div class="row">
                <div class="col-md-6 d-flex">
                    <div class="card mb-4 w-100">
                        <div class="card-body">
                            <div class="card-footer text-muted">Emma</div>
                            <p class="card-text">Excelente servicio.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 d-flex">
                    <div class="card mb-4 w-100">
                        <div class="card-body">
                            <div class="card-footer text-muted">Yeraldin</div>
                            <p class="card-text">Deliciosos sabores, excelente experiencia</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>

    );
}

export default Testimonials;