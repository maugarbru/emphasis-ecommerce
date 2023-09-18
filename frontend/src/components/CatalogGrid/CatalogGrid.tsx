import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import CatalogItem from './CatalogItem';
import { APIbaseURL } from 'src/core/config';
import { Producto } from 'src/core/types';
import { RootState } from 'src/core/store';

const CatalogGrid = (): React.JSX.Element => {
  const { search } = useSelector((state: RootState) => state.data);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [filtered, setFiltered] = useState<Producto[]>([]);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch(APIbaseURL + 'productos', {
      method: 'GET',
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((result) => {
        const { data, success, error } = result;
        if (success) {
          setProductos(data);
          setFiltered(data);
        } else {
          toast.error(error.message);
        }
      })
      .catch((error) => toast.error(error.message));
  }, []);

  useEffect(() => {
    setFiltered(
      search
        ? productos.filter((p) =>
            p.nombre.toLowerCase().includes(search?.toLowerCase()),
          )
        : productos,
    );
  }, [search]);

  return (
    <div className="w-full h-full grid grid-cols-4 gap-4">
      {filtered.length > 0 ? (
        filtered.map((producto) => (
          <CatalogItem key={producto.id} item={producto} />
        ))
      ) : (
        <div className="w-full rounded-lg overflow-hidden bg-white flex flex-col justify-end items-start">
          <div className="flex justify-between items-end p-5 grow w-full">
            <p>No hay productos que satisfagan la búsqueda</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogGrid;
