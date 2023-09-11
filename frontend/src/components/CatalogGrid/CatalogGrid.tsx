import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import CatalogItem from '../CatalogItem';

import { Producto } from 'src/core/types';
import { APIbaseURL } from 'src/core/config';

const CatalogGrid = (): React.JSX.Element => {
  const [productos, setProductos] = useState<Producto[]>([]);

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
        } else {
          toast.error(error.message);
        }
      });
  }, []);

  return (
    <div className="w-full h-full grid grid-cols-4 gap-4">
      {productos.map((producto) => (
        <CatalogItem key={producto.id} item={producto} />
      ))}
    </div>
  );
};

export default CatalogGrid;
