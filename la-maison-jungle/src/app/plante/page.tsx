
import { getPlantes } from "lib/prisma/plantes"
import { getOnePlante } from "lib/prisma/plantes"


const Page = async () => {


  const { plantes } = await getPlantes()

  const id = '643d636b5e1c7df162261d58'
  const un = await getOnePlante(id)
  console.log(un.plante)




  return (
    <ul>
      {plantes?.map(plante => (
        <li key={plante.id}>
          <h3>{plante.name}</h3>
          <p>{plante.id}</p>


        </li>
      ))}
      <h1>{un.plante?.name}</h1>
    </ul>
  )
}


export default Page