

import '../styles/singleArticle.scss'
import prisma from 'lib/prisma'







// const SingleArticle: React.FC<{}> = ({data}) => {

//   const prisma = new PrismaClient();

//   return (
//     <div className='article'>
//               {data}
//       <div className='article__container'>
//         <div className='article__container__image'>
//           <Image src={logo} alt="test" width={30} height={30} />
//         </div>
//         <div className='article__container__content'>

//           {/* <h1>{plante.name}ici</h1> */}
//           {/* <ul>
//             {plantes?.map(plante => (
//               <li key={plante.id}>
//                 <h3>{plante.name}</h3>
//                 <p>{plante.description}</p>
//                 <p>{plante.price}</p>
//               </li>
//             ))}
//           </ul> */}

//           <button>Ajouter au panier</button>
//         </div>
//       </div>
//     </div>

//   )
// }


const SingleArticle = ({ plante }) => {
  return <div><p>test</p>{plante.name}</div>
}


export async function getServerSideProps() {
  const data = await prisma.plante.findMany();
  console.log(data)
  return {
    props: { data }
  }
}


// export async function getServerSideProps() {
//   // const { id } = context.params;
//   const plantes = await getPlantes()
//   console.log(plantes)
//   // console.log(id);
//   // const res = await getOnePlante(id);
//   // const plante = res;
//   // console.log(context)

//   return {
//     // props: { plante }
//     props: { plantes }
//   }

// }




export default SingleArticle;