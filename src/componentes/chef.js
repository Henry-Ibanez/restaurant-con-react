import React from "react";

const Chef =() => {
    return (
    //<!-- Sección de Chef -->
    <section id="Chefs" class="container mt-4 text-center">
        <h2>Nuestros chefs</h2>
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <img src="images/colaboradores/chef1.jpeg" class="card-img-top" alt="chef 1"/>
                    <div class="card-body">
                        <h5 class="card-title">Yeraldin</h5>
                        <p class="card-text">La chef que hace postres</p>
                        <div class="social-icons mt-3">
                            <a href="#" class="fab fa-facebook-f"><i></i></a>
                            <a href="#" class="fab fa-instagram"><i></i></a>
                            <a href="#" class="fab fa-linkedin"><i></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img src="images/colaboradores/chef2.png" class="card-img-top" alt="chef 1"/>
                    <div class="card-body">
                        <h5 class="card-title">Denis</h5>
                        <p class="card-text">La chef que hace el pan</p>
                            <div class="social-icons mt-3">
                                <a href="#" class="fab fa-facebook-f"></a>
                                <a href="#" class="fab fa-instagram"></a>
                                <a href="#" class="fab fa-linkedin"></a>
                            </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <img src="images/colaboradores/chef3.png" class="card-img-top" alt="chef 1"/>
                    <div class="card-body">
                        <h5 class="card-title">Henry</h5>
                        <p class="card-text">El chef especializado en todo tipo de comida</p>
                        <div class="social-icons mt-3">
                            <a href="#" class="fab fa-facebook-f"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Chef;