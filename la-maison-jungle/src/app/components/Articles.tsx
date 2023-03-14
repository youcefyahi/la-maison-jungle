import '../styles/articles.scss'
import ArticlesList from './ArticleList'



export const Articles:React.FC<> =({}) => {
 
    return (
            <section className='articles'>
         <ArticlesList/>
            </section>

    )
}

export default Articles
