import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { Search } from "./Search";
import { selectError, selectShowCaseList } from "./ShowCase.slice";

const ShowCase: FC = () => {
  const error = useAppSelector(selectError);
  const showCase = useAppSelector(selectShowCaseList);
  return (
    <div className="wrapper show-case_wrapper">
      {error}
      <Search />
      {showCase.map((imageShowCase, i) => {
        return <img src={imageShowCase} alt="" key={i + Math.random()}></img>;
      })}
    </div>
  );
};

export default ShowCase;
