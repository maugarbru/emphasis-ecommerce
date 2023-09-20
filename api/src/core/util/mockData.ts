import { CreateProductoDto } from 'src/modules/productos/dto';
import { CreateUsuarioDto } from 'src/modules/usuarios/dto';

export const mockedProducts: CreateProductoDto[] = [
  {
    sku: 'WE001',
    nombre: 'Arroz Blanco',
    descripcion:
      'Bolsa de 1KG Arroz blanco de grano largo ideal para acompañar tus comidas.',
    unidades_disponibles: 20,
    precio_unitario: 4000,
  },
  {
    sku: 'WE002',
    nombre: 'Frijoles Negros',
    descripcion:
      'Bolsa de 1KG Frijoles negros de alta calidad, una excelente fuente de proteína vegetal.',
    unidades_disponibles: 20,
    precio_unitario: 2000,
  },
  {
    sku: 'EA003',
    nombre: 'Aceite de Cocina',
    descripcion: 'Aceite de cocina vegetal, perfecto para cocinar y freír.',
    unidades_disponibles: 6,
    precio_unitario: 12000,
  },
  {
    sku: 'EA004',
    nombre: 'Huevos',
    descripcion: 'Docena de huevos frescos de granja.',
    unidades_disponibles: 100,
    precio_unitario: 10000,
  },
  {
    sku: 'SP005',
    nombre: 'Leche Entera',
    descripcion: 'Leche entera fresca en envase de 1 litro.',
    unidades_disponibles: 10,
    precio_unitario: 4500,
  },
  {
    sku: 'SP009',
    nombre: 'Papel Higiénico',
    descripcion: 'Rollo de papel higiénico suave y resistente.',
    unidades_disponibles: 24,
    precio_unitario: 2000,
  },
  {
    sku: 'SP010',
    nombre: 'Jabón de Lavandería',
    descripcion: 'Jabón en barra para lavar la ropa eficazmente.',
    unidades_disponibles: 10,
    precio_unitario: 3500,
  },
];

export const mockedUsers: CreateUsuarioDto[] = [
  {
    nombre: 'Usuario',
    apellido: 'Test',
    email: 'usuario@test.com',
    password: '1234',
  },
];
