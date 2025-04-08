import Banner from "./Banner"
import News from "./News"
import Recommend from "./Recommend"
import TopSellers from "./TopSellers"


const Home = () => {
  return (
    <>
        <Banner/>
        <TopSellers/>
        <Recommend/>
        <News/>
    </>
  )
}

export default Home