const Menus =() => {
    return (
        //<!-- Sección de Menú de comida -->
    <section id="Menú" class="container mt-4">
        <h2 class="text-center">Menú</h2>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col d-flex">
                <div class="card">
                    <img src="images/menus/menu_1.png" class="card-img-top" alt="Bandeja Paisa"/>
                    <div class="card-body">
                        <h5 class="card-title text-center">Bandeja paisa</h5>
                        <p class="card-text small"><strong>Descripcion:</strong> Frijoles, arroz blanco, carne molida, chicharron, chorizo, huevo frito, arepa frita, aguacate.</p>
                        <p class="card-text text-center"> <strong>Precio:</strong> $28.000</p>
                    </div>
                </div>
            </div>

            <div class="col d-flex">
                <div class="card">
                    <img src="images/menus/menu_2.png" class="card-img-top" alt="Picada"/>
                    <div class="card-body">
                        <h5 class="card-title text-center">Picada</h5>
                        <p class="card-text small"><strong>Descripcion:</strong> Carne de res, chorizo, rellena, papa criolla, mazorca, platano maduro, arepa.</p>
                        <p class="card-text text-center"> <strong>Precio:</strong> $50.000</p>
                    </div>
                </div>
            </div>

            <div class="col d-flex">
                <div class="card">
                    <img src="images/menus/menu_3.png" class="card-img-top" alt="Ajiaco"/>
                    <div class="card-body">
                        <h5 class="card-title text-center">Ajiaco</h5>
                        <p class="card-text small"><strong>Descripcion:</strong> Pollo desmechado, mazorca, papa, espinaca, alverja y arroz blanco.</p>
                        <p class="card-text text-center"> <strong>Precio:</strong> $23.000</p>
                    </div>
                </div>
            </div>

            <div class="col d-flex">
                <div class="card">
                    <img src="images/menus/menu_6.png" class="card-img-top" alt="Sobrebarriga en salsa"/>
                    <div class="card-body">
                        <h5 class="card-title text-center">Sobrebarriga en salsa</h5>
                        <p class="card-text small"><strong>Descripcion:</strong> Acompañada de arroz blanco, yuca, papa y aguacate.</p>
                        <p class="card-text text-center"> <strong>Precio:</strong> $30.00</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}

export default Menus;