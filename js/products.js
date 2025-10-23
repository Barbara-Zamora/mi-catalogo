const PRODUCTS = [
  {
    id: 'sueter-celestial',
    name: 'Suéter Celestial',
    price: 38990,
    status: 'nuevo',
    image:'./img/sueter.png',
    sizes: ['S', 'M', 'L'],
    description:
      'Suéter tejido suave con bordados de estrellas y luna, perfecto para noches acogedoras.',
    features: [
      'Tejido hipoalergénico con tacto aterciopelado',
      'Detalle de bordado hecho a mano',
      'Lavar a mano con agua fría',
    ],
  },
  {
    id: 'vestido-aurora',
    name: 'Vestido Aurora',
    price: 44990,
    status: 'agotado',
    image:
      './img/vestido.png',
    sizes: ['XS', 'S', 'M'],
    description:
      'Vestido vaporoso en capas de tul degradado inspirado en los amaneceres más dulces.',
    features: [
      'Cintura elástica que se adapta a tu silueta',
      'Capa interior de algodón orgánico',
      'Incluye cinta pastel para ajustar',
    ],
  },
  {
    id: 'cardigan-rosas',
    name: 'Cardigan Rosas',
    price: 35990,
    status: 'disponible',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    sizes: ['M', 'L', 'XL'],
    description:
      'Cardigan ligero con botones perlados y delicado estampado floral en tonos pastel.',
    features: [
      'Botones de resina imitación nácar',
      'Tela transpirable de punto fino',
      'Corte relajado ideal para superponer',
    ],
  },
  {
    id: 'hoodie-luna',
    name: 'Hoodie Luna de Miel',
    price: 40990,
    status: 'disponible',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Sudadera con capucha en color lavanda, interior afelpado y estampado de lunas encantadas.',
    features: [
      'Capucha amplia con forro de algodón',
      'Bolsillo canguro con detalle bordado',
      'Cordones con terminaciones brillantes',
    ],
  },
  {
    id: 'bolso-nube',
    name: 'Bolso Nube Suave',
    price: 29990,
    status: 'disponible',
    image:
      'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80',
    sizes: ['Única'],
    description:
      'Bolso acolchado con forma de nube, liviano y con espacio perfecto para tus esenciales.',
    features: [
      'Correa ajustable con acabado nacarado',
      'Forro interior estampado con corazones',
      'Bolsillo secreto para pequeños tesoros',
    ],
  },
  {
    id: 'falda-mermelada',
    name: 'Falda Mermelada de Fresa',
    price: 32990,
    status: 'disponible',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    sizes: ['S', 'M', 'L'],
    description:
      'Falda plisada en tonos degradados con movimiento dulce y suave al caminar.',
    features: [
      'Cierre invisible en la espalda',
      'Tela con caída ligera y brillante',
      'Pretina elástica en la parte trasera',
    ],
  },
];

function formatCurrency(value) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  }).format(value);
}

