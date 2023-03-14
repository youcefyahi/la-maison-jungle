import '../styles/singleArticle.scss'
import article from '../api/articles'
import Image from 'next/image'
import logo from 'public/leaf+1.png'




export default function SingleArticle() {

  return (
    <div className='article'>
      <div className='article__container'>
        <div className='article__container__image'>
          <Image src={logo} alt="test" width={30} height={30} />
        </div>
        <div className='article__container__content'>
          <h1>{article[0].name}</h1>
          <p className='price'>{article[0].price}<span>e</span></p>
          <p className='garantie'>{article[0].garantie}</p>
          <p>{article[0].promotion}</p>
          <p className='livraison'>{article[0].livraison}</p>
          <p>{article[0].description}</p>
          <p className='taille'>{article[0].taille}</p>
          <button>Ajouter au panier</button>
        </div>
      </div>
    </div>

  )
}
