import '../styles/articles.scss'
import ArticlesList from './ArticleList'
import article from '../api/articles'
import { Articles } from '@/models/type'



export const ArticlesSection: React.FC<Articles> = ({ }) => {

    return (
        <section className='articles'>
            <div className='articles-container'>
                {article.map((article) => (
                    <ArticlesList key={article.id} id={article.id} name={article.name} description={article.description} price={article.price} image={article.image} />
                ))}
            </div>


        </section>

    )
}

export default ArticlesSection
