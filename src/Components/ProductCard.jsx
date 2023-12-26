const ProductCard = ({item}) => {
  return (
    <a href="#" className="group relative block">
    <div className="relative h-[350px] sm:h-[450px]">
      <img
        src={item.thumbnail}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIT9q4sq5Fc3gz2AFsRzJbDM71GI32dkZrng&usqp=CAU"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
      />
    </div>
    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
      <h3 className="text-xl font-medium text-white ">{item.title}</h3>
      <p className="mt-1.5 max-w-[40ch] text-xs text-white">
      {item.description}
      </p>
      <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
        See Detail
      </span>
    </div>
  </a>
  )
}

export default ProductCard
