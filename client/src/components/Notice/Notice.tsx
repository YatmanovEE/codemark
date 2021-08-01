import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectNote } from "./Notivce.slice";
export const Notice: FC = () => {
  const note = useAppSelector(selectNote);
  return <span>{note}</span>;
};