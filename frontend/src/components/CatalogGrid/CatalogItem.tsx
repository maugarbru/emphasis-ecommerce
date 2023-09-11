import React, { useState } from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useSelector } from 'react-redux';

import ItemModal from './ItemModal';
import { Producto } from 'src/core/types';
import { RootState } from 'src/core/store';

type CatalogItemProps = {
  item: Producto;
};

const CatalogItem = ({ item }: CatalogItemProps): React.JSX.Element => {
  const { carrito } = useSelector((state: RootState) => state.userData);
  const [openModal, setOpenModal] = useState(false);

  const estaYaEnElCarrito = carrito.find((i) => i.producto.id === item.id);

  return (
    <>
      <button
        className="w-full h-40 rounded-lg overflow-hidden bg-white flex flex-col justify-end items-start hover:bg-gray-100 relative"
        onClick={() => setOpenModal(true)}
      >
        <div className="flex justify-between items-end p-5 grow w-full">
          <h2 className="text-3xl font-bold">{item.nombre}</h2>
          <p>${item.precio_unitario}</p>
        </div>
        {estaYaEnElCarrito && (
          <span className="absolute top-1 right-1 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-cyan-500 text-cyan-500">
            <HiOutlineShoppingCart className="h-4 w-4" />
          </span>
        )}
      </button>
      <ItemModal item={item} open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default CatalogItem;
