import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';

import { ItemCarrito } from 'src/core/types';
import { setCarrito } from 'src/core/store/slices/userData';

type ItemsListProps = {
  items: ItemCarrito[];
};

const ItemsList = ({ items }: ItemsListProps): React.JSX.Element => {
  const dispatch = useDispatch();

  const quitarItemDelCarrito = (item: ItemCarrito) => {
    const newCarrito = items.filter((i) => i.producto.id !== item.producto.id);
    dispatch(setCarrito(newCarrito));
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-start">
      {items.map((item) => (
        <div
          key={item.producto.id}
          className="flex flex-col justify-center items-start w-full"
        >
          <div className="flex items-center w-full mt-5 px-5 font-bold text-xl">
            <div className="flex justify-between items-center w-full border-b">
              <p>{`${item.producto.nombre} (x${item.cantidad})`}</p>
              <p>{`$${item.producto.precio_unitario}`}</p>
            </div>
            <button
              className="flex justify-center items-center rounded-lg p-1 ml-2 border border-red-500 text-red-500 bg-white hover:bg-red-200"
              onClick={() => quitarItemDelCarrito(item)}
            >
              <HiOutlineTrash className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center w-full px-5">
            <div className="flex justify-start items-center w-full text-xs">
              <p>{`SKU: ${item.producto.sku}`}</p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
