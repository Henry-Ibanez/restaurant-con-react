import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    return (
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <br />
                    <div className="card text-center">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <h5 className="card-title">Inicio de sesión</h5>
                            <br />
                            <form action="login.php" method="post">
                                <div className="mb-3">
                                    <label htmlFor="usuario" className="form-label">Usuario</label>
                                    <input type="text" className="form-control" name="usuario" id="usuario" aria-describedby="helpId" placeholder="Nombre de usuario" />
                                    <small id="helpId" className="form-text text-muted"></small>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Contraseña" autocomplete="current-password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default Login;

