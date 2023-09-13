import React from 'react';
import { HiShoppingCart, HiOutlineTrash } from 'react-icons/hi';
import { Popover, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import ItemsList from './ItemsList';
import { RootState } from 'src/core/store';
import { setCarrito } from 'src/core/store/slices/userData';

const ShoppingCart = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const { carrito } = useSelector((state: RootState) => state.userData);

  const limpiarCarrito = () => {
    dispatch(setCarrito([]));
    toast.success('Carrito limpio');
  };

  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button className="justify-center items-center text-black bg-white hover:bg-cyan-100 border border-black rounded-full p-2 drop-shadow-lg relative inline-block">
            <HiShoppingCart className="h-5 w-5" />
            {carrito?.length > 0 && (
              <span className="absolute top-1 right-1 inline-block w-5 h-5 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500 text-sm text-white">
                {carrito?.length}
              </span>
            )}
          </Popover.Button>
          <Transition
            show={open}
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-50 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-100 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-50 opacity-0"
          >
            <Popover.Panel className="absolute right-2.5 top-2.5 w-96 h-[80vh] origin-top-right bg-white border border-black rounded-lg shadow-lg">
              <div className="flex flex-col w-full h-full justify-between items-center space-y-4">
                <h1 className="text-2xl font-bold p-5">Carrito de compra</h1>
                <ItemsList items={carrito} />
                <button
                  className="flex justify-center items-center border border-red-500 text-red-500 rounded-lg p-1 drop-shadow-lg hover:bg-red-200 disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-500"
                  onClick={limpiarCarrito}
                  disabled={carrito?.length == 0}
                >
                  Limpiar carrito
                  <HiOutlineTrash className="h-5 w-5 ml-2" />
                </button>
                <div className="flex justify-between items-center w-full border-black border-t p-5">
                  <p className="text-2xl font-bold">Total:</p>
                  <p className="text-2xl font-bold text-cyan-500">$0</p>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ShoppingCart;
