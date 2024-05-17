import React from "react";

const Contac =() => {
   return (
    <section id="contacto" class="container mt-4">
        <h2 class="text-center">Contacto</h2>
        <p>Estamos aquí para servirle,</p>
        <form action="#" method="post">
            <div class="mb-3">
                <label for="name">Nombre</label><br/>
                <input type="text" class="form-control" name="nombre" placeholder="Escriba su nombre aquí..." required/><br/>
            </div>
            <div class="mb-3">
                <label for="email">Correo electrónico</label><br/>
                <input type="email" class="form-control" name="correo" placeholder="Escriba su correo electrónico aquí..." required/><br/>
            </div>
            <div class="mb-3">
                <label for="message">Mensaje</label><br/>
                <textarea class="form-control" name="mensaje" rows="6" cols="50"></textarea><br/>
            </div>
            <input class="btn btn-primary" type="submit" value="Enviar mensaje"/>
        </form>
    </section>
    );
}

export default Contac;