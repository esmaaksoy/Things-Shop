import { useProducts } from "../context/ProductProvider"
const SearchInput = () => {
    const {search,setSearch} = useProducts()
  return (

    <div className="relative w-[30%] mx-auto">
      <label htmlFor="Search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        id="Search"
        placeholder="Search products..."
        className="w-full rounded-md border border-gray-500 py-2.5 pe-10 shadow-sm sm:text-sm p-4"
        value={search}
        autoComplete="off" //önerileri kapatmak için
        onChange={(e) => setSearch(e.target.value)}
      />
      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
 
  
  )
}

export default SearchInput
