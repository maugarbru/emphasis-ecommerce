import React, { useEffect, useState } from 'react';
import { HiPlus, HiMinus, HiX } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { APIbaseURL } from 'src/core/config';
import { ItemCarrito, ReglaPrecio } from 'src/core/types';
import { setCarrito } from 'src/core/store/slices/userData';
import classNames from 'classnames';

type ListItemProps = {
  carrito: ItemCarrito[];
  item: ItemCarrito;
};

const ListItem = ({ carrito, item }: ListItemProps): React.JSX.Element => {
  const dispatch = useDispatch();
  const [regla, setRegla] = useState<ReglaPrecio>(null);
  const [subtotal, setSubtotal] = useState(0);

  const quitarItem = (item: ItemCarrito) => {
    const newCarrito = carrito.filter(
      (i) => i.producto.id !== item.producto.id,
    );
    dispatch(setCarrito(newCarrito));
  };

  const actualizarItem = (item: ItemCarrito, cambio: number) => {
    const newCarrito = [...carrito];
    const itemParaActualizar = newCarrito.findIndex(
      (i) => i.producto.id === item.producto.id,
    );
    const itemActualizado: ItemCarrito = {
      producto: newCarrito[itemParaActualizar].producto,
      cantidad: newCarrito[itemParaActualizar].cantidad + cambio,
    };
    newCarrito[itemParaActualizar] = itemActualizado;
    dispatch(setCarrito(newCarrito));
  };

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const body = {
      idProducto: item.producto.id,
      cantidad: item.cantidad,
    };
    fetch(APIbaseURL + 'carrito/subtotal', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        const { data, success, error } = result;
        if (success) {
          setSubtotal(data.subtotal);
          setRegla(data.regla);
        } else {
          toast.error(error.message);
        }
      })
      .catch((error) => toast.error(error.message));
  }, [item]);

  return (
    <>
      <tr>
        <td className="font-bold pl-5">{item.producto.nombre}</td>
        <td className="text-right">{`$${item.producto.precio_unitario.toFixed(
          2,
        )}`}</td>
        <td className="flex justify-between items-center text-black mx-5">
          <button
            className={classNames(
              'flex justify-center items-center rounded-lg border',
              item.cantidad > 1
                ? 'border-amber-500 text-amber-500'
                : 'border-red-500 text-red-500',
            )}
            onClick={() => {
              if (item.cantidad > 1) {
                actualizarItem(item, -1);
              } else {
                quitarItem(item);
              }
            }}
          >
            {item.cantidad > 1 ? (
              <HiMinus className="h-5 w-5" />
            ) : (
              <HiX className="h-5 w-5" />
            )}
          </button>
          <p className="align-middle font-bold">{item.cantidad}</p>
          <button
            className="flex justify-center items-center rounded-lg border border-green-600 text-green-600 disabled:border-gray-300 disabled:text-gray-300"
            disabled={item.cantidad >= item.producto.unidades_disponibles}
            onClick={() => actualizarItem(item, 1)}
          >
            <HiPlus className="h-5 w-5" />
          </button>
        </td>
        <td
          className={classNames(
            'font-bold text-right',
            regla?.aplicaDescuento ? 'text-red-500' : 'text-black-500',
          )}
        >
          {regla?.aplicaDescuento
            ? `-$${Math.abs(
                subtotal - item.cantidad * item.producto.precio_unitario,
              ).toFixed(2)}`
            : ''}
        </td>
        <td className="font-bold text-cyan-500 text-right pr-5">{`$${subtotal?.toFixed(
          2,
        )}`}</td>
      </tr>
      <tr className="border-b last:border-none">
        <td className="text-xs pl-5">{`SKU: ${item.producto.sku} | Tipo: ${regla?.nombre}`}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </>
  );
};

export default ListItem;
