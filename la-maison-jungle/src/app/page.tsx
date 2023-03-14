import Navbar from "./components/navbar"
import Presentoire from "./components/presentoir"
import Articles from "./components/Articles"





export default function Home() {
  return (
    <>
      <Navbar/>
      {/* <Presentoire/> */}
      <Articles/>

      <p>Le main content</p>
    </>
  )
}
