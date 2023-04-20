
"use client"
import '../styles/singleArticle.scss'
import article from '../api/articles'
import Image from 'next/image'
import logo from 'public/leaf+1.png'
import { Articles } from '@/models/type';
import { getOnePlante, getPlantes } from 'lib/prisma/plantes';
import { Plante } from '@prisma/client';
import { useRouter,usePathname} from 'next/navigation'
import { useEffect } from 'react'




 const SingleArticle: React.FC<{}> = () => {

  const router = usePathname()

  useEffect(() => {

    const id = router.split('/').pop();
    console.log(id);
  }, [router]);
 

  return (
    <div className='article'>
      <div className='article__container'>
        <div className='article__container__image'>
          <Image src={logo} alt="test" width={30} height={30} />
        </div>
        <div className='article__container__content'>
          {/* <h1>{plante.name}ici</h1> */}
          {/* <ul>
            {plantes?.map(plante => (
              <li key={plante.id}>
                <h3>{plante.name}</h3>
                <p>{plante.description}</p>
                <p>{plante.price}</p>
              </li>
            ))}
          </ul> */}

          <button>Ajouter au panier</button>
        </div>
      </div>
    </div>

  )
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