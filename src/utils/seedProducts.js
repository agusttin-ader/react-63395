import db from "../db/db.js";
import { collection, addDoc } from "firebase/firestore";

const PRODUCTOS = [
    {
        id: 'ab',
        nombre: "Torta tematica",
        descripcion: "Torta tematica a eleccion",
        imagen: ["/img/torta-tematica.jpg", "/img/torta-tematica-3.jpeg", "/img/torta-tematica-4.jpg", "/img/torta-tematica-5.jpg"],
        precio: 80000,
        stock: 3,
        category: "tortas"
    },
    {
        id: "abc",
        nombre: "Torta tematica profesional",
        descripcion: "Torta tematica a eleccion con detalles profesionales",
        imagen: ["/img/torta-tematica-2.jpg", "/img/torta-tematica-6.jpeg", "/img/torta-tematica-7.jpeg", "/img/torta-tematica-8.jpg"],
        precio: 95500,
        stock: 4,
        category: "tortas"
    },
    {
        id: "abcd",
        nombre: "Budin de limon",
        descripcion: "Budin de limon con semillas de amapola",
        imagen: ["/img/budin-limon.jpg", "/img/budin-limon-2.jpg","/img/budin-limon-3.jpg","/img/budin-limon-4.jpg"],
        precio: 45000,
        stock: 2,
        category: "budines"
    },
    {
        id: "abcde",
        nombre: "Budin de naranja",
        descripcion: "Budin de naranja",
        imagen: ["/img/budin-naranja.jpg", "/img/budin-naranja-2.jpg","/img/budin-naranja-3.jpg","/img/budin-naranja-4.jpg"],
        precio: 45000,
        stock: 6,
        category: "budines"
    },
    {
        id: "abcdef",
        nombre: "Cupcakes de arandanos",
        descripcion: "Muffin de arandanos con streusel",
        imagen: ["/img/muffin-arandanos.jpg", "/img/cupcake-arandanos-2.jpg","/img/cupcake-arandano-3.jpg","/img/cupcake-arandanos-4.jpg"],
        precio: 35000,
        stock: 8,
        category: "cupcakes"
    },
    {
        id: "abcdefg",
        nombre: "Cupcakes de vainilla con chips de chocolate",
        descripcion: "Muffin de chocolate con chips de chocolate",
        imagen: ["img/muffin-chips.jpg", "/img/cupcake-chips-2.jpg","/img/cupcake-chips-3.jpg","/img/cupcake-chips-4.jpg"],
        precio: 35000,
        stock: 10,
        category: "cupcakes"
    }

]

const seedProducts  = async () => {
    try{    
        const productsRef = collection(db, "products")
        PRODUCTOS.map( async({ id, ...dataProduct }) => {
            addDoc(productsRef, dataProduct)
        })
        console.log("Productos cargados correctamente");
        
    }catch(error){
        console.error(error);
        
    }
}

seedProducts()