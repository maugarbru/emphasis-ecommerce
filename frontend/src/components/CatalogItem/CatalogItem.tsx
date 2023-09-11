import React, { useState } from 'react';

import ItemModal from './ItemModal';

import { Producto } from 'src/core/types';

type CatalogItemProps = {
  item: Producto;
};

const CatalogItem = ({ item }: CatalogItemProps): React.JSX.Element => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="w-full h-40 rounded-lg overflow-hidden bg-white flex flex-col justify-end items-start hover:bg-gray-100"
        onClick={() => setOpenModal(true)}
      >
        <div className="flex justify-between items-end p-5 grow w-full">
          <h2 className="text-xl font-bold">{item.nombre}</h2>
          <p>${item.precio_unitario}</p>
        </div>
      </button>
      <ItemModal item={item} open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default CatalogItem;
