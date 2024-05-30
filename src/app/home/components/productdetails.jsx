import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { MdStarRate } from "react-icons/md";
export default function ProductDetail({ productDetail }) {
  return (
    <>
      <div className=" hover:cursor-pointer border bg-white rounded-md w-full shadow-sm space-y-4 px-10 pt-2 pb-2">
        <div className=" flex justify-center p-2">
          <img
            src={productDetail.image}
            alt={productDetail.title}
            className=""
          />
        </div>
        <h1> Category : {productDetail.category}</h1>
        <h1>Title : {productDetail.title}</h1>
        <div className="flex items-center justify-start space-x-10 ">
          <div className="flex items-center space-x-1">
            <h1>Price : </h1>
            <RiMoneyRupeeCircleLine fontSize={22} className="text-zinc-600" />
            <h1>{productDetail.price}</h1>
          </div>
          <div className="flex items-center space-x-2">
            <h1>Rating : </h1>
            <MdStarRate
              fontSize={16}
              className="text-zinc-600 ring-2 ring-zinc-600 rounded-full p-[1px]"
            />
            <h1>{productDetail.rating?.rate}</h1>
          </div>
        </div>
        <p>Description : {productDetail.description}</p>
      </div>
    </>
  );
}
