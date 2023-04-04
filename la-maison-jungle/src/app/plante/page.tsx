import {getUsers} from 'lib/prisma/users.js'
import {getPlantes} from 'lib/prisma/plantes.js'

 
const Page = async ()=> {
   const{users} = await getUsers()
  
   const{plantes} = await getPlantes()
   console.log(plantes)
   
   


   return(
      <ul>
      {users?.map(user => (
        <li key={user.id}>
          <h3>{user.name}</h3>
        </li>
      ))}
    </ul>
   )
}


export default Page