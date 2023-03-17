import '../styles/articlesList.scss'
import Link from 'next/link'
import article from '../api/articles'
import truc from "../assets/areca.jpeg"
import Image from 'next/image'
import { Articles } from '@/models/type';






export const ArticlesList: React.FC<Articles> = ({id}) => {
    const selectedArticle = article.find(item => item.id === id);
    return (
        <div className='articles-list'>
            <Link href="/">
                <Image src={truc} alt='mettre image ici plus tard la faire border' /> <p>{selectedArticle?.name}</p></Link>
            <p>{selectedArticle?.price}ê</p>

        </div>

    )
}

export default ArticlesList
