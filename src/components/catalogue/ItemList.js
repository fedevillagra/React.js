import { useEffect, useState } from "react"
import Item from "./Item"
import PRODUCTS from "../../data.js"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from "firebase/firestore"

const ItemList = () => {

    const [item, setItem] = useState([])
    const { categoryId } = useParams()

    const getProductsCategory = async () => {  
      const dataBase= getFirestore()
      const collectionRef = query(collection(dataBase,"items"),where("tipo", "array-contains", categoryId))
      const snapshot = await getDocs(collectionRef)
      setItem(snapshot.docs.map(d => ({id:d.id, ...d.data()  } )))   
    }
    const getItems = async () => {
      const db = getFirestore()
      const collectionRef = collection(db , 'items')
      const snapshot = await getDocs(collectionRef)
      setItem(snapshot.docs.map(d => ({id:d.id, ...d.data()}) ))
    }

    useEffect(()=>{
      categoryId ? getProductsCategory():getItems()
    },[categoryId])
    
    /*
    const getProducts = () => {
        if(categoryId!=undefined){
          const filtrado = PRODUCTS.filter((element) => element.tipo.includes(categoryId))
          return new Promise((resolve,reject)=>{
            resolve(filtrado)
          }).catch((err)=>console.log(err))
        }

        return new Promise((resolve,reject)=>{
              resolve(PRODUCTS)
      }).catch((err)=>console.log(err))
    }
    */

  return (
        <>
          {item.map(i => <Item key={i.id} {...i}/> )}
        </>
  )
}
export default ItemList