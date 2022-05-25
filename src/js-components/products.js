export const products = [
  {
    id: 1,
    nombre: "Pads",
    stock: "80",
    descripcion: "Limpieza facial, hechos con hilo de algodón",
    precio: "$100",
    categoryId: 16 ,
    category: "Productos suaves",
  },

  {
    id: 2,
    nombre: "Esponja",
    descripcion: "Limpieza corporal, hecho con hilo de algodón",
    stock: "50",
    precio: "$550",
    categoryId: 16 ,
    category: "Productos suaves", 
  },

  {
    id: 3,
    nombre: "Bolsa jabonera",
    descripcion: "Limpieza corporal, hecho con yute",
    stock: "60",
    precio: "$340", 
    categoryId: 16 ,
    category: "Productos suaves",
  },

  {
    id: 4,
    nombre: "Pads exfoliantes",
    stock: "80",
    descripcion: "Limpieza facial, hechos con hilo de algodón y con un punto específico para exfoliar",
    precio: "$150",
    categoryId: 17,
    category: "Exfoliantes",
  },

  {
    id: 5,
    nombre: "Bolsa jabonera exfoliante",
    stock: "60",
    descripcion: "Limpieza corporal, hecho con hilo de yute. 100% compostable",
    precio: "$350",
    categoryId: 17,
    category: "Exfoliantes",
  },

  {
    id: 6,
    nombre: "Combo",
    stock: "5",
    descripcion: "Limpieza facial, hecho con hilo de algodón. Combo pads: 2 exfoliantes + 2 suaves. 100% compostable",
    precio: "$400",
    categoryId: 18,
    category:"Combo"
  },
];

export const getData = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      return resolve(products);
    }, 2000)
  })
}



