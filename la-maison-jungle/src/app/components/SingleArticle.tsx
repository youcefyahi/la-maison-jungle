import '../styles/singleArticle.scss'
import article from '../api/articles'
import Image from 'next/image'
import logo from 'public/leaf+1.png'
import { Articles } from '@/models/type';




export const SingleArticle:React.FC<Articles> = ({name}) => {
 

  return (
    <div className='article'>
      <div className='article__container'>
        <div className='article__container__image'>
          <Image src={logo} alt="test" width={30} height={30} />
        </div>
        <div className='article__container__content'>
          <h1>{name}ici</h1>
    
          <button>Ajouter au panier</button>
        </div>
      </div>
    </div>

  )
}


export default SingleArticle;