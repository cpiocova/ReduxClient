import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { editarProductoAction } from './../actions/productoActions';

const EditarProducto = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [producto, guardarProducto] = useState({
    nombre: '',
    precio: ''
  });

  const productoeditar = useSelector(state => state.productos.productoeditar);

  useEffect(() => {
    guardarProducto(productoeditar)
  }, [productoeditar])

  // Leer los datos del formulario
  const onChangeForm = e => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }

  if (!productoeditar) return null;


  const { nombre, precio } = producto;

  const submitEditarProducto = e => {
    e.preventDefault();
    dispatch(editarProductoAction(producto));
    history.push('/');
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form
              onSubmit={submitEditarProducto}
            >
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeForm}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="precio"
                  value={precio}
                  onChange={onChangeForm}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Guardar Cambios</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditarProducto;
