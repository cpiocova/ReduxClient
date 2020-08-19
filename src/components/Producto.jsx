import React from 'react';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { borrarProductoAction, obtenerProductoEditar } from './../actions/productoActions';

const Producto = ({ producto }) => {

  const { nombre, precio, id } = producto;

  const dispatch = useDispatch();
  const history = useHistory(); // Habilitar history para redireccion

  // confirmar si desea eliminar
  const confirmarEliminarProducto = id => {
    //preguntar al usuario
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Un producto que se elimina no se puede recuperar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, ¡Eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        dispatch(borrarProductoAction(id));
      }
    })
  }

  const redireccionarEdicion = producto => {
    dispatch(obtenerProductoEditar(producto));
    history.push(`/productos/editar/${producto.id}`);
  }

  return (
    <tr>
      <td>{nombre}</td>
      <td> <span className="font-weight-bold"> ${precio}</span></td>
      <td className="acciones">
        <button
          type="button"
          onClick={() => redireccionarEdicion(producto)}
          className="btn btn-primary mr-2"
        >Editar</button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(id)}
        >Eliminar </button>
      </td>
    </tr>
  );
}

export default Producto;
