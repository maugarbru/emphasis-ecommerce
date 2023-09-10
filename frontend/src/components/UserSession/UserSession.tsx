import React, { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiUser } from "react-icons/hi";

import LogIn from "./LogIn";
import SignUp from "./SignUp";

const UserSession = (): React.JSX.Element => {
  const [isLogIn, setIsLogin] = useState(true);

  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button className="flex justify-center items-center text-black bg-white border border-black rounded-full p-2 drop-shadow-lg relative">
            <HiUser className="h-5 w-5" />
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
            <Popover.Panel className="absolute right-2.5 top-2.5 w-96 h-[500px] origin-top-right bg-white border border-black rounded-lg shadow-lg space-y-4">
              <div className="flex flex-col w-full h-full justify-between items-center py-10">
                {isLogIn ? <LogIn /> : <SignUp />}

                <div className="flex justify-between items-center">
                  <p>{`${isLogIn ? "No" : "Ya"} estás registrado?`}</p>
                  <button
                    className="text-black underline p-2"
                    onClick={() => setIsLogin(!isLogIn)}
                  >
                    {isLogIn ? "Regístrate" : "Inicia sesión"}
                  </button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default UserSession;
