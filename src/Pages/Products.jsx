import Loading from "../Components/Loading";
import ProductCard from "../Components/ProductCard";
import SearchInput from "../Components/SearchInput";
import { useProducts } from "../context/ProductProvider";
const Products = () => {
  const { products, loading } = useProducts();
  return (
    <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24  lg:px-8 bg-[#E58C88]">
      <SearchInput />
      {loading ? (
        <Loading />
      ) : products.length ? (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}{" "}
        </div>
      ) : (
        <h2 className="text-center text-3xl text-red-600 mt-32">No Products</h2>
      )}
    </div>
  );
};

export default Products;
