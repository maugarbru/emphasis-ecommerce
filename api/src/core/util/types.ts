export type ApiResponse = {
  success: boolean;
  data: any | null;
  error: Error | null;
};

export type Usuario = {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
};

export type Producto = {
  id: string;
  sku: string;
  nombre: string;
  descripcion: string;
  unidades_disponibles: number;
  precio_unitario: number;
};

export type ItemCarrito = {
  producto: Producto;
  cantidad: number;
};

export type Carrito = {
  items: ItemCarrito[];
  usuario: Usuario;
};

export type ReglaPrecio = {
  identificador: string;
  nombre: string;
  calcularPrecio: (producto: Producto, cantidad: number) => number;
  aplicaDescuento: boolean;
};

export type RespuestaRegla = {
  regla: ReglaPrecio;
  subtotal: number;
};
