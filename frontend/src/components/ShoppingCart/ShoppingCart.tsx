import React from 'react';
import { useSelector } from 'react-redux';
import { Popover, Transition } from '@headlessui/react';
import { HiShoppingCart } from 'react-icons/hi';

import { RootState } from 'src/core/store';

const ShoppingCart = (): React.JSX.Element => {
  const { carrito } = useSelector((state: RootState) => state.userData);

  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button className="justify-center items-center text-black bg-white border border-black rounded-full p-2 drop-shadow-lg relative inline-block">
            <HiShoppingCart className="h-5 w-5" />
            {carrito?.length && (
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
            <Popover.Panel className="absolute right-2.5 top-2.5 w-96 h-[80vh] origin-top-right bg-white border border-black rounded-lg shadow-lg space-y-4">
              <div className="flex flex-col w-full h-full justify-between items-center py-10"></div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ShoppingCart;
