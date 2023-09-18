import { CreateProductoDto } from 'src/modules/productos/dto';
import { CreateUsuarioDto } from 'src/modules/usuarios/dto';

export const products: CreateProductoDto[] = [
  {
    sku: 'SKU123',
    nombre: 'Smartphone Galaxy S22',
    descripcion:
      'El último smartphone de Samsung con pantalla AMOLED de alta resolución y cámara de 108 MP.',
    unidades_disponibles: 50,
    precio_unitario: 999.99,
  },
  {
    sku: 'SKU456',
    nombre: 'Laptop UltraBook Pro X',
    descripcion:
      'Una laptop ultradelgada y potente con procesador Intel Core i7 y pantalla 4K.',
    unidades_disponibles: 25,
    precio_unitario: 1499.99,
  },
  {
    sku: 'SKU789',
    nombre: 'Tablet Nexus 10',
    descripcion:
      'Tablet Android con pantalla de 10 pulgadas y alto rendimiento para entretenimiento y productividad.',
    unidades_disponibles: 30,
    precio_unitario: 349.99,
  },
  {
    sku: 'SKU101',
    nombre: 'Smart TV 4K OLED 55 pulgadas',
    descripcion:
      'Televisor OLED con resolución 4K y tecnología de sonido envolvente para una experiencia de visualización inmersiva.',
    unidades_disponibles: 15,
    precio_unitario: 1299.99,
  },
  {
    sku: 'SKU202',
    nombre: 'Auriculares Inalámbricos AirPods Pro',
    descripcion:
      'Auriculares inalámbricos con cancelación de ruido y calidad de sonido excepcional.',
    unidades_disponibles: 40,
    precio_unitario: 199.99,
  },
  {
    sku: 'SKU303',
    nombre: 'Cámara Mirrorless Sony Alpha A7 III',
    descripcion:
      'Cámara sin espejo con sensor full-frame y capacidad de grabación de video 4K.',
    unidades_disponibles: 10,
    precio_unitario: 1999.99,
  },
  {
    sku: 'SKU404',
    nombre: 'Impresora Multifunción HP OfficeJet Pro',
    descripcion:
      'Impresora multifunción con impresión a color de alta calidad y conectividad inalámbrica.',
    unidades_disponibles: 20,
    precio_unitario: 249.99,
  },
  {
    sku: 'SKU505',
    nombre: 'Consola de Videojuegos Xbox Series X',
    descripcion:
      'La última consola de Microsoft con gráficos de alta definición y capacidad de juego en 4K.',
    unidades_disponibles: 12,
    precio_unitario: 499.99,
  },
  {
    sku: 'SKU606',
    nombre: 'Router Wi-Fi Mesh Linksys Velop',
    descripcion:
      'Sistema de red Wi-Fi Mesh para una cobertura y velocidad excepcionales en toda la casa.',
    unidades_disponibles: 18,
    precio_unitario: 299.99,
  },
  {
    sku: 'SKU707',
    nombre: 'Smartwatch Apple Watch Series 7',
    descripcion:
      'Reloj inteligente con seguimiento de salud avanzado y pantalla siempre encendida.',
    unidades_disponibles: 35,
    precio_unitario: 349.99,
  },
];

export const usuarios: CreateUsuarioDto[] = [
  {
    nombre: 'Usuario',
    apellido: 'Test',
    email: 'usuario@test.com',
    password: '1234',
  },
];
