import React, { useState } from 'react';
import classNames from 'classnames';
import { Popover, Transition } from '@headlessui/react';
import { HiUser, HiCheckCircle, HiQuestionMarkCircle } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import LogIn from './LogIn';
import SignUp from './SignUp';

import { RootState } from 'src/core/store';
import { logout } from 'src/core/store/slices/userData';

const UserSession = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.userData);
  const [isLogIn, setIsLogin] = useState(true);

  const cerrarSesion = () => {
    dispatch(logout({}));
    toast('Sesión cerrada');
  };

  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button className="justify-center items-center text-black bg-white hover:bg-cyan-100 border border-black rounded-full p-2 drop-shadow-lg relative inline-block">
            <HiUser className="h-5 w-5" />
            <span
              className={classNames(
                'absolute top-1 right-1 inline-block w-5 h-5 transform translate-x-1/2 -translate-y-1/2 rounded-full text-white',
                user ? 'bg-green-500' : 'bg-amber-500',
              )}
            >
              {user ? (
                <HiCheckCircle className="h-5 w-5" />
              ) : (
                <HiQuestionMarkCircle className="h-5 w-5" />
              )}
            </span>
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
            <Popover.Panel
              className={classNames(
                'absolute right-2.5 top-2.5 w-96 origin-top-right bg-white border border-black rounded-lg shadow-lg space-y-4',
                !user ? 'h-[500px]' : 'h-[200px]',
              )}
            >
              {!user ? (
                <div className="flex flex-col w-full h-full justify-between items-center py-10">
                  {isLogIn ? <LogIn /> : <SignUp changeToLogin={setIsLogin} />}

                  <div className="flex justify-between items-center">
                    <p>{`${isLogIn ? 'No' : 'Ya'} estás registrado?`}</p>
                    <button
                      className="text-black underline p-2 hover:text-cyan-500"
                      onClick={() => setIsLogin(!isLogIn)}
                    >
                      {isLogIn ? 'Regístrate' : 'Inicia sesión'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col w-full h-full justify-between items-center py-10">
                  <div className="space-y-4 flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold">{`${user.nombre} ${user.apellido}`}</h1>
                    <h3 className="text-lg">{user.email}</h3>
                    <button
                      className="flex items-center text-white bg-red-500 rounded-lg p-2 shadow-md hover:bg-red-600"
                      onClick={cerrarSesion}
                    >
                      Cerrar sesión
                    </button>
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default UserSession;
