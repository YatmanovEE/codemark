import { FC, ReactEventHandler, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  clearError,
  createError,
  fetchShowCase,
} from "../ShowCase/ShowCase.slice";
import { searchSelectors, setValue } from "./Search.slice";
import API from "../ShowCase/showCaseApi";
import { showCaseSelectors } from "../ShowCase/ShowCase.slice";

export const Search: FC = () => {
  const error = useAppSelector(showCaseSelectors.selectError);
  const value = useAppSelector(searchSelectors.selectValue);
  const dispatch = useAppDispatch();
  const inputHandler: ReactEventHandler<HTMLInputElement> = (e) => {
    if (e.currentTarget.value.match(/[^A-Za-z,]/)) {
      dispatch(
        createError({
          error: "Допустимы только английские буквы и запятая",
        })
      );
    } else {
      dispatch(setValue({ value: e.currentTarget.value }));
      dispatch(clearError());
      if (e.currentTarget.value === ",") {
        dispatch(
          createError({
            error: "Нельзя отправлять только запятую",
          })
        );
      }
    }
  };
  const searchHandler: ReactEventHandler<HTMLButtonElement> = (e) => {
    value.split(",").forEach((tagName, count) => {
      dispatch(
        fetchShowCase({
          name: tagName,
          url: `${API.fetchTag}&tag=${tagName}`,
        })
      );
    });
  };
  return (
    <>
      <div className="wrapper search_wrapper">
        <input
          type="text"
          className="search"
          value={value}
          onChange={inputHandler}
        />
        <span className="error search_error">{error}</span>
      </div>
      <button
        className="btn btn_search"
        onClick={searchHandler}
        disabled={!!error}
      >
        Поиск
      </button>
    </>
  );
};
