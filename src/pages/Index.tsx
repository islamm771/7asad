import Navbar from '../components/Navbar'
import AllCategories from '../components/home/AllCategories'
import ProductsList from '../components/home/ProductsList'
import SpecialOffers from '../components/home/SpecialOffers'

const Index = () => {
    return (
        <div>
            <Navbar />
            <SpecialOffers />
            <AllCategories />
            <ProductsList />
        </div>
    )
}

export default Index