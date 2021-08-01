import { FC, ReactEventHandler, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { clearError, createError } from "./ShowCase.slice";

export const Search: FC = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const inputHandler: ReactEventHandler<HTMLInputElement> = (e) => {
    console.log(e.currentTarget.value);
    if (e.currentTarget.value.match(/[0-9]/)) {
      setValue(e.currentTarget.value);
      dispatch(clearError());
    } else {
      dispatch(
        createError({
          error: "БлаБла",
        })
      );
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
