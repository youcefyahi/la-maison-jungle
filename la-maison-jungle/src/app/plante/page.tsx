import {getUsers} from 'lib/prisma/users.js'
 
const Page = async ()=> {
   const{users} = await getUsers()
   console.log(users)
   


   return(
      <>
        {users?.map(user=>{<p>{user.name}</p>})}
      
      </>
    
   )
}


export default Page