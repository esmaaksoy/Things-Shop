
import Loading from '../Components/Loading';
import ProductCard from '../Components/ProductCard'
import SearchInput from "../Components/SearchInput"
import { useProducts } from "../context/ProductProvider";
const Products = () => {
const {products, loading} = useProducts()
  return (
    <div>
      <SearchInput/>
<ProductCard/>
      
    </div>
  )
}

export default Products
