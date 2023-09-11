import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { HiShoppingCart } from 'react-icons/hi';

import { Producto } from 'src/core/types';

type ItemModalProps = {
  item: Producto;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ItemModal = ({ item, open, setOpen }: ItemModalProps) => {
  const [cantidad, setCantidad] = useState(1);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="mx-auto rounded-lg bg-white w-[500px] overflow-y-auto">
          <Dialog.Title className="flex justify-between items-center text-2xl font-bold p-5 border-b w-full">
            {item.nombre}
            <p>${item.precio_unitario}</p>
          </Dialog.Title>

          <Dialog.Description className="flex flex-col justify-between items-start h-[300px]">
            <div className="flex flex-col justify-start items-start h-full p-5 space-y-4 w-full">
              <div className="flex justify-between items-center w-full">
                <p className="italic text-xs">SKU: {item.sku}</p>
                <p className="italic text-xs">
                  Unidades disponibles: {item.unidades_disponibles}
                </p>
              </div>
              <p className="text-lg grow">{item.descripcion}</p>
            </div>

            <div className="flex justify-end items-center p-5 border-t w-full space-x-4">
              <div className="flex items-center space-x-1">
                <p>Cantidad </p>
                <div className="flex text-black bg-white border border-black rounded-full drop-shadow-lg py-2 pl-5 pr-1">
                  <input
                    className="w-10"
                    value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value))}
                    placeholder="Buscar"
                    type="number"
                  ></input>
                </div>
              </div>

              <button className="flex justify-center items-center text-white bg-cyan-500 rounded-lg p-1 drop-shadow-lg">
                Añadir al carrito
                <HiShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ItemModal;
