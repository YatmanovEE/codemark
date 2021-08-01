import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectShowCaseList } from "./ShowCase.slice";

export const ShowCaseList: FC = () => {
  const showCase = useAppSelector(selectShowCaseList);
  return (
    <>
      {showCase.map((imageShowCase, i) => {
        return <img src={imageShowCase} alt="" key={i + Math.random()}></img>;
      })}
    </>
  );
};
