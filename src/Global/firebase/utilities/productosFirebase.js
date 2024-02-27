import {addDoc , collection, doc, getDocs, setDoc} from 'firebase/firestore/lite'
import { firebaseDb } from '../config/config'

const actualCollection = 'productos'
const productosDb = collection(firebaseDb , actualCollection) 

//Agregar documento con ID automatico - addDoc
export const addProduct = (doc) =>{
    return addDoc( productosDb , doc)
} 

//Agregar varios documentos con ID automatico
export const addProducts = (docs) =>{
    return  docs.forEach(item => { addProduct(item) });
}


//Agregar documentos con Id propio
export const addProductWithId = (newDoc)=>{
    const id = newDoc.id.toString()
    const docRef = doc(firebaseDb , actualCollection , id)
    delete newDoc.id

    const res = setDoc(docRef , newDoc , {merge:false})
    .then(()=> 'Se actualizo bien')
    .catch(()=>'Hubo problemas de escritura')

    return res
}

//Agregar documentos con id propio

export const addProductsWithId = (docs)=>{
    docs.forEach((doc)=> addProductWithId(doc))
}

//Obtener documentos - getDocs
export const getProducts = async() =>{
    const collection = await getDocs(productosDb)
    console.log(collection.docs)
    const productos = collection.docs.map(doc=>{
        return{...doc.data() , id: doc.id}
    })

    return productos
}