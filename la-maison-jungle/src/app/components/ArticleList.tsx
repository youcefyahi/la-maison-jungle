import '../styles/articlesList.scss'
import Link from 'next/link'
import article from '../api/articles'



export const ArticlesList: React.FC<> = ({ }) => {

    return (
        <div className='articles-list'>
            <Link href="">
                <img src="" alt='mettre image ici plus tard la faire border' />
                <Link href="/">{article[0].name}</Link>
                <p>{article[0].price}</p>
            </Link>
        </div>

    )
}

export default ArticlesList
