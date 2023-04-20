
import { Articles } from '@/models/type';
import { NextPage, } from 'next';
import article from "@/app/api/articles";
import { Plante } from "@prisma/client";
import SingleArticle from "@/app/components/SingleArticle";

import { getOnePlante } from 'lib/prisma/plantes';


 

// const PlantePage: NextPage<> =  () => {
  
//   const Test = async () => {
//       const router = usePathname()
//       const id = router.split('/').pop();
//     console.log(id)
//   }

//   useEffect(()=>{
//     Test()
//   })


//   return (
//     <div>

//       <SingleArticle />
//     </div>
//   );
// };
const PlantePage: NextPage<> = ({  }) => {


  return (
    <div>
      <SingleArticle />
    </div>
  );
};



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

export default PlantePage


