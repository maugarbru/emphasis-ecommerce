import { Producto, ReglaPrecio, RespuestaRegla } from '../util/types';

export const reglasDisponibles: ReglaPrecio[] = [
  {
    aplicaDescuento: false,
    nombre: 'Producto Normal',
    identificador: 'EA',
    calcularPrecio: (producto, cantidad) => {
      return producto.precio_unitario * cantidad;
    },
  },
  {
    aplicaDescuento: false,
    nombre: 'Producto Peso',
    identificador: 'WE',
    calcularPrecio: (producto, cantidad) => {
      return (producto.precio_unitario / 1000) * cantidad;
    },
  },
  {
    aplicaDescuento: true,
    nombre: 'Producto de Descuento Especial',
    identificador: 'SP',
    calcularPrecio: (producto, cantidad) => {
      const descuento = Math.floor(cantidad / 3) * 0.2;
      const total = producto.precio_unitario * cantidad;
      return total - total * (descuento > 0.5 ? 0.5 : descuento);
    },
  },
];

export const aplicarReglaPrecio = (
  producto: Producto,
  cantidad: number,
): RespuestaRegla => {
  const regla = reglasDisponibles.find(
    (r) => r.identificador === producto.sku.substring(0, 2),
  );
  if (!regla) {
    throw new Error('No hay regla que aplique para este producto');
  }
  return {
    regla,
    subtotal: regla.calcularPrecio(producto, cantidad),
  };
};
