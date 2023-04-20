import '../styles/articles.scss'
import ArticlesList from './ArticleList'
import { getPlantes } from 'lib/prisma/plantes'




const ArticlesSection = async () =>{
 const {plantes} = await getPlantes()
    return (
        <section className='articles'>
            <div className='articles-container'>
            {plantes?.map((plante) => (
                    <ArticlesList key={plante.id} name={plante.name} id={plante.id} price={plante.price}/>
                ))}
            </div>


        </section>

    )
}

export default ArticlesSection


// import '../styles/articles.scss'
// import ArticlesList from './ArticleList'
// import article from '../api/articles'
// import { Articles } from '@/models/type'
// import { Plante } from 'lib/prisma/type'

// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
// import prisma from 'lib/prisma'
// import { getPlantes } from 'lib/prisma/plantes'




// type Props = {
//     plantes: Plante[];
// }

// export const ArticlesSection: React.FC<Props> = ({ plantes }) => {
//     console.log(plantes)

//     return (
//         <section className='articles'>
//             <div className='articles-container'>
//             {plantes ? (
//   <ul>
//     {plantes.map((plante) => (
//       <li key={plante.id}>
//         <h3>{plante.name}</h3>
//       </li>
//     ))}
//   </ul>
// ) : (
//   <p>Loading...</p>
// )}
//             </div>


//         </section>

//     )
// }




// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//     const { plantes } = await getPlantes();
//     console.log(plantes)

//     return {
//         props: { plantes }
//     }
// }

// export default ArticlesSection
