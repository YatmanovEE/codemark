import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { Search } from "../Search/Search";
import { showCaseSelectors } from "./ShowCase.slice";
import { ShowCaseList } from "./ShowCaseList";

const ShowCase: FC = () => {
  const loading = useAppSelector(showCaseSelectors.selectLoading);
  console.log(loading);
  return (
    <div className="wrapper show-case_wrapper">
      {loading && "Загрузка"}
      <Search />
      <ShowCaseList />
    </div>
  );
};

export default ShowCase;
