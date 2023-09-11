import React, { Fragment, useState } from 'react';
import classNames from 'classnames';
import { Dialog, Transition } from '@headlessui/react';
import { HiPlus, HiExclamationCircle, HiRefresh } from 'react-icons/hi';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import { Producto, ItemCarrito } from 'src/core/types';
import { RootState } from 'src/core/store';
import { setCarrito } from 'src/core/store/slices/userData';

type ItemModalProps = {
  item: Producto;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ItemModal = ({ item, open, setOpen }: ItemModalProps) => {
  const dispatch = useDispatch();
  const { carrito } = useSelector((state: RootState) => state.userData);
  const [cantidad, setCantidad] = useState(1);

  const limiteSuperado = cantidad > item.unidades_disponibles;
  const estaYaEnElCarrito = carrito.find((i) => i.producto.id === item.id);

  const agregarAlCarrito = () => {
    const itemCarrito: ItemCarrito = {
      producto: item,
      cantidad,
    };
    const newCarrito = carrito
      ? [
          ...carrito.filter((i) => i.producto.id !== itemCarrito.producto.id),
          itemCarrito,
        ]
      : [itemCarrito];
    dispatch(setCarrito(newCarrito));
    toast.success('Carrito actualizado');
    setOpen(false);
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-50"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <Dialog.Panel className="mx-auto rounded-lg bg-white w-[500px] overflow-y-auto">
              <Dialog.Title
                as="div"
                className="flex justify-between items-center text-2xl font-bold p-5 border-b w-full"
              >
                {item.nombre}
                <p>${item.precio_unitario}</p>
              </Dialog.Title>

              <Dialog.Description
                as="div"
                className="flex flex-col justify-between items-start h-[300px]"
              >
                <div className="flex flex-col justify-start items-start h-full space-y-4 w-full">
                  <div className="flex justify-between items-center w-full px-5 py-2">
                    <p className="text-sm">{`SKU: ${item.sku}`}</p>
                    <p className="text-sm">
                      {`Unidades disponibles: ${item.unidades_disponibles}`}
                    </p>
                  </div>
                  <p className="text-lg grow p-5">{item.descripcion}</p>
                </div>

                <div className="flex justify-around items-center p-5 border-t w-full space-x-4">
                  <div className="flex flex-col justify-around items-center">
                    <div className="flex items-center space-x-1">
                      <p>Cantidad</p>
                      <div className="flex items-center text-black bg-white border border-black rounded-full drop-shadow-lg py-1 pl-5 pr-2">
                        <input
                          className="w-10"
                          value={cantidad}
                          onChange={(e) => setCantidad(Number(e.target.value))}
                          placeholder="Buscar"
                          type="number"
                        ></input>
                        {limiteSuperado && (
                          <HiExclamationCircle className="h-5 w-5 ml-2 text-red-500" />
                        )}
                      </div>
                    </div>
                    {limiteSuperado && (
                      <p className="italic text-xs text-red-500">
                        No hay suficientes unidades
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col justify-around items-center">
                    <button
                      className={classNames(
                        'flex justify-center items-center text-white rounded-lg p-1 drop-shadow-lg hover:bg-cyan-600 disabled:bg-gray-400',
                        estaYaEnElCarrito ? 'bg-cyan-500' : 'bg-green-600',
                      )}
                      onClick={agregarAlCarrito}
                      disabled={limiteSuperado}
                    >
                      {estaYaEnElCarrito ? (
                        <>
                          Actualizar carrito
                          <HiRefresh className="h-5 w-5" />
                        </>
                      ) : (
                        <>
                          Añadir al carrito
                          <HiPlus className="h-5 w-5" />
                        </>
                      )}
                    </button>
                    {estaYaEnElCarrito && (
                      <p className="italic text-xs">
                        Este item ya está en el carrito
                      </p>
                    )}
                  </div>
                </div>
              </Dialog.Description>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ItemModal;
