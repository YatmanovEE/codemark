import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Search } from "./Search";
import { ShowCaseList } from "./ShowCaseList";

const ShowCase: FC = () => {
  const { error, loading } = useSelector(({ showCase }: RootState) => ({
    error: showCase.error,
    loading: showCase.loading,
  }));
  return (
    <div className="wrapper show-case_wrapper">
      {error}
      <Search />
      <ShowCaseList />
    </div>
  );
};

export default ShowCase;
