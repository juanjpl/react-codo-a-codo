import {addDoc , collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc} from 'firebase/firestore/lite'
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
//Obtener documentos x id
export const getProductsById = (id)=>{

    const itemRef = doc (firebaseDb , actualCollection , id.toString())
    getDoc(itemRef).then(res => console.log(res.data()))
}

//Obtener documentos x nombre
export const getProductByName =async(name)=>{
    const dataRef = query(productosDb , where('a' , '==' , name) );
    let found = await getDocs(dataRef);

    found = found.docs.map(dos=> doc.data())
    console.log(found)

}

//Obtener documentos - crear o actualizar
export const setProduct = async( values, merge =false)=>{

    const itemRef = doc (firebaseDb , actualCollection, values.id.toString())
    delete values.id
    setDoc ( itemRef , values , {merge})
}


//Obtener documentos  actualizar
export const updateProduct = async (values , merge = false)=>{
    const itemRef = doc (firebaseDb , actualCollection, values.id.toString())
    delete values.id
    updateDoc ( itemRef , values , {merge})
}

const createItem = (values)=>{
   
    delete values.id
    return doc (firebaseDb , actualCollection, values.id.toString())
}
//Obtener documentos - Eliminar.

export const deletProduct = (id) =>{
    const itemRef = doc (firebaseDb , actualCollection, id.toString())
    deleteDoc( itemRef )
}