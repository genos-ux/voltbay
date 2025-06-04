import { EditIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";

function ProductCard({ product }) {
    const {deleteProduct} = useProductStore();
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 min-h-[350px]">
      {/* PRODUCT IMAGE */}
      <div className="relative w-full h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>


      {/* PRODUCT INFO */}
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{product.name}</h2>
        <p>{Number(product.price).toFixed(2)}</p>

        {/* CARD ACTION */}
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/product/${product.id}`}
            className="btn btn-sm btn-info btn-outline"
          >
            <EditIcon className="size-4" />
          </Link>

          <button className="btn btn-sm btn-error btn-outline">
            <Trash2Icon className="size-4" color="black" onClick={() => deleteProduct(product.id)}/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
