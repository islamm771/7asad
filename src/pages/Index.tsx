import AllCategories from '../components/home/AllCategories'
import ProductsList from '../components/home/ProductsList'
import SpecialOffers from '../components/home/SpecialOffers'

const Index = () => {
    return (
        <div className='bg-white py-8'>
            <SpecialOffers />
            <AllCategories />
            <ProductsList />
        </div>
    )
}

export default Index