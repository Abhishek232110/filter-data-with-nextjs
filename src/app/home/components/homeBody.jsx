import { useEffect, useState } from "react";
import FilterData from "./filter";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { MdStarRate } from "react-icons/md";
import Link from "next/link";
import ProductDetail from "./productdetails";

export function HomeBody({ getData }) {
  const [id, setId] = useState(null);
  console.log("id", id);
  const [filteredData, setFilteredData] = useState(getData ? getData : []);

  useEffect(() => {
    setFilteredData(getData ? getData : []);
  }, [getData]);
  const onQueryChange = (s) => {
    console.log(s);
    const filterRes = getData?.filter((item) =>
      item.title.toLowerCase().includes(s.toLowerCase())
    );
    console.log("filterRes", filterRes);
    if (filterRes) {
      setFilteredData(filterRes);
      if (filterRes.length == 0) {
        console.log("No results found");
      }
    }
  };
  const productDetail = getData?.filter((ele) => ele.id === id);
  console.log("product", productDetail);
  return (
    <>
      {id ? (
        <div className="">
          <div>
            <button
              onClick={() => setId(null)}
              className="bg-indigo-500 text-white px-4 py-1 rounded-sm"
            >
              Go To HomePage
            </button>
          </div>
          <div>
            {productDetail.map((productDetail) => {
              return (
                <>
                  <ProductDetail productDetail={productDetail} />
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex-col items-center justify-center">
          <FilterData onQueryChange={onQueryChange} />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {filteredData.map((ele) => {
              return (
                <>
                  <div
                    className=" hover:cursor-pointer border bg-white rounded-md w-full shadow-sm space-y-3 px-3 pt-2 pb-2"
                    id={ele.id}
                    onClick={() => setId(ele.id)}
                  >
                    <h1>{ele.id}</h1>
                    <div className=" flex justify-center p-2">
                      <img
                        src={ele.image}
                        alt={ele.title}
                        className="h-52 w-52 "
                      />
                    </div>
                    <h1> Category : {ele.category}</h1>
                    <h1>Title : {ele.title}</h1>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <h1>Price : </h1>
                        <RiMoneyRupeeCircleLine
                          fontSize={22}
                          className="text-zinc-600"
                        />
                        <h1>{ele.price}</h1>
                      </div>
                      <div className="flex items-center space-x-2">
                        <h1>Rating : </h1>
                        <MdStarRate
                          fontSize={16}
                          className="text-zinc-600 ring-2 ring-zinc-600 rounded-full p-[1px]"
                        />
                        <h1>{ele.rating?.rate}</h1>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
