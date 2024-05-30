import { useEffect, useState } from "react";
import FilterData from "./filter";

export function HomeBody({ getData }) {
  const [filteredData, setFilteredData] = useState(getData ? getData : []);
  console.log("home", getData);
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
  return (
    <>
      <div>
        <FilterData onQueryChange={onQueryChange} />
        <div className="gird grid-cols-4">
          {filteredData.map((ele) => {
            return (
              <>
                <div className="flex m-2">
                  <img src={ele.image} alt={ele.title} className="h-40 w-40" />
                  <img src={ele.image} alt={ele.title} className="h-40 w-40" />
                  <img src={ele.image} alt={ele.title} className="h-40 w-40" />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
