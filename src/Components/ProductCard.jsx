import { useNavigate } from "react-router-dom";
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="group block cursor-pointer "
      onClick={() =>
        navigate(`/dashboard/products/${item.title}`, { state: item })
      }
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        className="h-[350px] w-full object-cover sm:h-[450px]"
      />
      <div className="mt-3 flex justify-between text-sm">
        <div>
          <h3 className="text-white group-hover:underline group-hover:underline-offset-4 font-bold">
            {item.title}
          </h3>
          <p className="mt-1.5 max-w-[45ch] text-xs text-white font-bold">
            {item.description}
          </p>
        </div>
        <p className="text-teal-700 font-bold">${item.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
