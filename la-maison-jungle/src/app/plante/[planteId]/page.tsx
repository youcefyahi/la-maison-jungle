
import { getOnePlante } from 'lib/prisma/plantes'
import Plante from './plante'
 
// const PlantePage = async () => {


//   return (
//     <div>
//       <SingleArticle />
//     </div>
//   );
// };

import { PrismaClient } from '@prisma/client'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux';


const Page = async ({params}) =>{
  const {plante} = await getOnePlante(params.planteId)



  return(
 
    <Plante plante={plante}/>

  )
}

export default Page






// export default async function PlantePage({params:{id}}: Params){
//   const planteData: Promise<Plante> = getOnePlante(id)
//   const [plante] = await Promise.all([planteData])
//   return(
//     <>
//     {plante ? (
//       <div>
//         <h2>{plante.name}</h2>
//         <p>test</p>
//       </div>
//     ) : (
//       <div>Plante non trouvée</div>
//     )}
//     </>
//   )
// }




// const PlantePage = async () => {
//   const router = usePathname()
//   const id = router.split('/').pop();
//   const data = await getOnePlante(id)
//   console.log(data.plante)




//   return (
//     <>
//       <h2>{id}</h2>
//       <p>test</p>
//     </>
//   )
// }

