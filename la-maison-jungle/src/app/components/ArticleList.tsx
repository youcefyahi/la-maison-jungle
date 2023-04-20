import '../styles/articlesList.scss'
import Link from 'next/link'
import article from '../api/articles'
import truc from "../assets/areca.jpeg"
import Image from 'next/image'
import { Articles } from '@/models/type';
import { Plante } from '@prisma/client'

export const ArticlesList: React.FC<Plante> = ({name,price,id}) => {
    return (
        <div className='articles-list'>
            <Link href={`/plante/${id}`}>
                <Image src={truc} alt='mettre image ici plus tard la faire border' /> <p>{name}</p></Link>
            
            <p>{price}ê</p>

        </div>

    )
}

export default ArticlesList
