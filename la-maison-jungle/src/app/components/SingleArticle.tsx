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
          <h3>{article[1].name}</h3>
          <p>{article[1].price}</p>
          <p>{article[1].description}</p>
          <button>Ajouter au panier</button>
        </div>
      </div>
    </div>

  )
}
