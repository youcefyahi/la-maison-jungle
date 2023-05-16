
"use client"

import '../styles/singleArticle.scss'
import store from "@/app/store/store"
import { addPanier } from '@/app/reducer/planteReducer'
import { Plante } from 'lib/prisma/type'




const SingleArticle = ({ plante }: { plante: Plante }) => {
  store.getState



  const handleAddToCart = () => {

    store.dispatch(addPanier({plante}));
    alert('ca marche ')


  }

  const panierItems = store.getState();
  console.log(panierItems)

  return <div>
    <p>test</p>{plante.name}
    <button onClick={handleAddToCart}>ajouter au panier</button>

  </div>
}


export default SingleArticle;