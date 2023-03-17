import '../styles/articlesList.scss'
import Link from 'next/link'
import article from '../api/articles'
import truc from "../assets/areca.jpeg"
import Image from 'next/image'




export const ArticlesList: React.FC<> = ({ }) => {

    return (
        <div className='articles-list'>
            <Link href="/">
                <Image src={truc} alt='mettre image ici plus tard la faire border' /> <p>{article[0].name}</p></Link>
            <p>{article[0].price}ê</p>

        </div>

    )
}

export default ArticlesList
