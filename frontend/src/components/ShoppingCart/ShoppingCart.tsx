import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiShoppingCart } from "react-icons/hi";

const ShoppingCart = (): React.JSX.Element => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button className="flex justify-center items-center text-black bg-white border border-black rounded-full p-2 drop-shadow-lg relative">
            <HiShoppingCart className="h-5 w-5" />
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
