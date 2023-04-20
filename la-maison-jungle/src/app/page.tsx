import Navbar from "./components/navbar"
import Presentoire from "./components/presentoir"
import ArticlesSection from "./components/ArticlesSection"
import { getPlantes } from "lib/prisma/plantes"

export default function Home() {

  return (
    <>
      <Navbar/>
      {/* <Presentoire/> */}
      <ArticlesSection/>
   
    </>
  )
}



