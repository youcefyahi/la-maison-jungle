import '../styles/singleArticle.scss'
import article from '../api/articles'
import Image from 'next/image'
import logo from 'public/leaf+1.png'
import { Articles } from '@/models/type';




export const SingleArticle:React.FC<Articles> = ({id}) => {
  const selectedArticle = article.find(item => item.id === id);

  return (
    <div className='article'>
      <div className='article__container'>
        <div className='article__container__image'>
          <Image src={logo} alt="test" width={30} height={30} />
        </div>
        <div className='article__container__content'>
          <h1>{selectedArticle?.name}</h1>
          <p className='price'>{selectedArticle?.price}<span>e</span></p>
          <p className='garantie'>{selectedArticle?.garantie}</p>
          <p>{selectedArticle?.promotion}</p>
          <p className='livraison'>{selectedArticle?.livraison}</p>
          <p>{selectedArticle?.description}</p>
          <p className='taille'>{selectedArticle?.taille}</p>
          <button>Ajouter au panier</button>
        </div>
      </div>
    </div>

  )
}


export default SingleArticle;