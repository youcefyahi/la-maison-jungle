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
          <h1>{article[1].name}</h1>
          <p className='price'>{article[1].price}<span>e</span></p>
          <p className='description'>{article[1].description}</p>
          <button>Ajouter au panier</button>
        </div>
      </div>
    </div>

  )
}
