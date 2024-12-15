const PRODUCTOS = [
    {
        id: 'ab',
        nombre: "Torta tematica",
        descripcion: "Torta tematica a eleccion",
        imagen: "/img/torta-tematica.jpg",
        precio: 80000,
        stock: "ilimitado",
        category: "tortas"
    },
    {
        id: "abc",
        nombre: "Torta tematica profesional",
        descripcion: "Torta tematica a eleccion con detalles profesionales",
        imagen: "/img/torta-tematica-2.jpg",
        precio: 95500,
        stock: "ilimitado",
        category: "tortas"
    },
    {
        id: "abcd",
        nombre: "Budin de limon",
        descripcion: "Budin de limon con semillas de amapola",
        imagen: "/img/budin-limon.jpg",
        precio: 45000,
        stock: 'ilimitado',
        category: "budines"
    },
    {
        id: "abcde",
        nombre: "Budin de naranja",
        descripcion: "Budin de naranja",
        imagen: "/img/budin-naranja.jpg",
        precio: 45000,
        stock: 'ilimitado',
        category: "budines"
    },
    {
        id: "abcdef",
        nombre: "Cupcakes de arandanos",
        descripcion: "Muffin de arandanos con streusel",
        imagen: "/img/muffin-arandanos.jpg",
        precio: 35000,
        stock: 'ilimitado',
        category: "cupcakes"
    },
    {
        id: "abcdefg",
        nombre: "Cupcakes de chocolate",
        descripcion: "Muffin de chocolate con chips de chocolate",
        imagen: "/img/muffin-chips.jpg",
        precio: 35000,
        stock: 10,
        category: "cupcakes"
    }

]


const getProductos = ()=> {
    return new Promise((resolve, reject)=>{
        //Simulamos un retraso de red de 5 segundos
        setTimeout(()=>{
            resolve(PRODUCTOS)
        }, 2000)
    })
}

export { getProductos }// exporta la funcion getProductos
