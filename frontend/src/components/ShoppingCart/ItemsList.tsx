import React from 'react';
import { HiOutlineTrash, HiPlus, HiMinus } from 'react-icons/hi';
import { useDispatch } from 'react-redux';

import { ItemCarrito } from 'src/core/types';
import { setCarrito } from 'src/core/store/slices/userData';

type ItemsListProps = {
  items: ItemCarrito[];
};

const ItemsList = ({ items }: ItemsListProps): React.JSX.Element => {
  const dispatch = useDispatch();

  const quitarItem = (item: ItemCarrito) => {
    const newCarrito = items.filter((i) => i.producto.id !== item.producto.id);
    dispatch(setCarrito(newCarrito));
  };

  const actualizarItem = (item: ItemCarrito, cambio: number) => {
    const newCarrito = [...items];
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

  return (
    <div className="w-full h-full flex flex-col justify-start items-start">
      {items?.length ? (
        items.map((item) => (
          <div
            key={item.producto.id}
            className="flex flex-col justify-center items-start w-full"
          >
            <div className="flex items-center w-full mt-5 px-5">
              <div className="flex justify-between items-center w-full">
                <p className="font-bold text-lg">{item.producto.nombre}</p>
                <button
                  className="flex justify-center items-center rounded-lg p-1 ml-2 border border-red-500 text-red-500 bg-white hover:bg-red-200"
                  onClick={() => quitarItem(item)}
                >
                  <HiOutlineTrash className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex items-center w-full px-5 py-1 border-b">
              <div className="flex justify-between items-center w-full text-xs">
                <p>{`SKU: ${item.producto.sku}`}</p>

                <div className="flex justify-center items-center text-black">
                  <button
                    className="flex justify-center items-center rounded-lg border border-red-500 text-red-500 disabled:border-gray-300 disabled:text-gray-300"
                    disabled={item.cantidad <= 1}
                    onClick={() => actualizarItem(item, -1)}
                  >
                    <HiMinus className="h-5 w-5" />
                  </button>
                  <p className="mx-5 align-middle font-bold">{item.cantidad}</p>
                  <button
                    className="flex justify-center items-center rounded-lg border border-green-600 text-green-600 disabled:border-gray-300 disabled:text-gray-300"
                    disabled={
                      item.cantidad >= item.producto.unidades_disponibles
                    }
                    onClick={() => actualizarItem(item, 1)}
                  >
                    <HiPlus className="h-5 w-5" />
                  </button>
                </div>

                <p>{`$${item.producto.precio_unitario}`}</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full"></div>
          </div>
        ))
      ) : (
        <div className="flex items-center w-full mt-5 px-5 font-bold text-sm">
          <div className="flex justify-between items-center w-full border-b">
            <p>No hay productos añadidos al carrito</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemsList;
