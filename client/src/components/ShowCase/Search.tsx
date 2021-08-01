import { FC, ReactEventHandler, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { clearError, createError } from "./ShowCase.slice";

export const Search: FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const inputHandler: ReactEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget.value.match(/[^A-Za-z,]/)) {
      dispatch(
        createError({
          error: "БлаБла",
        })
      );
    } else {
      setValue(e.currentTarget.value);
      dispatch(clearError());
    }
  };
  return (
    <input
      type="text"
      className="search"
      value={value}
      onChange={inputHandler}
    />
  );
};
