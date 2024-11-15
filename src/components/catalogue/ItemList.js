import { useEffect, useState } from "react"
import Item from "./Item"
import PRODUCTS from "../../data.js"
import { useParams } from "react-router-dom"
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from "firebase/firestore"

const ItemList = () => {

  const [item, setItem] = useState([])
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(true); // Estado para el spinner

  const getProductsCategory = async () => {
    const dataBase = getFirestore()
    const collectionRef = query(collection(dataBase, "items"), where("tipo", "array-contains", categoryId))
    const snapshot = await getDocs(collectionRef)
    setItem(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
    setLoading(false); // Ocultar spinner
  }
  const getItems = async () => {
    const db = getFirestore()
    const collectionRef = collection(db, 'items')
    const snapshot = await getDocs(collectionRef)
    setItem(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
    setLoading(false); // Ocultar spinner
  }

  useEffect(() => {
    setLoading(true); // Mostrar spinner
    categoryId ? getProductsCategory() : getItems()
  }, [categoryId])

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
      {loading ? (
        // Spinner de carga
        <div className="flex justify-center mt-44 h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {item.map(i => <Item key={i.id} {...i} />)}
        </div>
      )}
    </>
  )
}
export default ItemList