import { useEffect, useState } from "react"
import PRODUCTS from "../../data"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

    const { id } = useParams()
    const [itemDetail, setItemDetail] = useState([])

    useEffect(()=>{
      getProduct()
    },[id])

    const getProduct = async () => {
      const db= getFirestore()
          const document = doc(db, "items", id)
          const response = await getDoc(document)
          const result = {id: response.id, ...response.data()}
          setItemDetail(result)
  }

    /*
    const getDetail = () => {
        const item = PRODUCTS.find (p=>p.id==id)
        return new Promise((resolve,reject)=>{
                resolve(item)
        }).catch((err)=>console.log(err))
    }
    */

  return (
        <div>
          <ItemDetail key={itemDetail.id} {...itemDetail}/>
        </div>
  )
}
export default ItemDetailContainer