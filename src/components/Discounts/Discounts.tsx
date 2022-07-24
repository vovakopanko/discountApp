import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDiscountDataList } from "../../redux/selectors";
import Loading from "../Loading/Loading";
import TopCategoryList from "../TopCategoryList";
import { Data } from "../TopCategoryList/types";

export function Discounts() {
  const [data, useData] = useState<Data[]>([]);
  const dataSelector = useSelector(getDiscountDataList);

  useEffect(() => {
    useData(dataSelector);
  }, [dataSelector]);

  if (!data.length) return <Loading />;
  
  return <TopCategoryList categoryData={data} />;
}
