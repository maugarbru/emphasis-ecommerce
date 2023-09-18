import React, { useEffect, useState } from 'react';
import { HiShoppingCart, HiOutlineTrash } from 'react-icons/hi';
import { Popover, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

import ListItem from './ListItem';
import { APIbaseURL } from 'src/core/config';
import { RootState } from 'src/core/store';
import { setCarrito } from 'src/core/store/slices/userData';

const ShoppingCart = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const { carrito, user } = useSelector((state: RootState) => state.userData);
  const [total, setTotal] = useState(0);

  const limpiarCarrito = () => {
    dispatch(setCarrito([]));
    toast.success('Carrito limpio');
  };

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const body = {
      items: carrito.map((item) => ({
        idProducto: item.producto.id,
        cantidad: item.cantidad,
      })),
      idUsuario: user.id,
    };
    fetch(APIbaseURL + 'carrito/total', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        const { data, success, error } = result;
        if (success) {
          setTotal(data.total);
        } else {
          toast.error(error.message);
        }
      })
      .catch((error) => toast.error(error.message));
  }, [carrito]);

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
            <Popover.Panel className="absolute right-2.5 top-2.5 w-[80vw] h-[80vh] origin-top-right bg-white border border-black rounded-lg shadow-lg">
              <div className="flex flex-col w-full h-full justify-between items-center space-y-2">
                <h1 className="text-2xl font-bold p-5">Carrito de compra</h1>

                {carrito?.length ? (
                  <div className="w-full grow overflow-y-auto">
                    <table className="table-auto w-full">
                      <thead className="bg-cyan-100 shadow-lg">
                        <tr>
                          <th>Producto</th>
                          <th>Precio Unitario</th>
                          <th>Cantidad</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {carrito.map((item) => (
                          <ListItem
                            key={item.producto.id}
                            carrito={carrito}
                            item={item}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="flex justify-center items-center italic font-bold text-sm text-red-500 w-full">
                    <p>No hay productos añadidos al carrito</p>
                  </div>
                )}

                <div className="flex justify-between items-center w-full border-black border-t p-5">
                  <button
                    className="flex justify-center items-center border border-red-500 text-red-500 rounded-lg p-1 drop-shadow-lg hover:bg-red-200 disabled:bg-gray-200 disabled:text-gray-500 disabled:border-gray-500"
                    onClick={limpiarCarrito}
                    disabled={carrito?.length == 0}
                  >
                    Limpiar carrito
                    <HiOutlineTrash className="h-5 w-5 ml-2" />
                  </button>

                  <div className="flex space-x-4">
                    <p className="text-2xl font-bold">Total:</p>
                    <p className="text-2xl font-bold text-cyan-500">
                      {`$${total}`}
                    </p>
                  </div>
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
