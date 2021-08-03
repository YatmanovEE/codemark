import { FC, ReactEventHandler, useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { fetchShowCase } from "../ShowCase/ShowCase.slice";
import { setValue, clearError, createError } from "./Search.slice";
import API from "../ShowCase/showCaseApi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Search: FC = () => {
	const { error, value, disabled } = useSelector((rootState: RootState) => {
		return rootState.searchValue;
	});

	const dispatch = useAppDispatch();
	const inputHandler: ReactEventHandler<HTMLInputElement> = (e) => {
		dispatch(setValue({ value: e.currentTarget.value }));
		if (e.currentTarget.value.match(/[^A-Za-z,]/)) {
			return dispatch(
				createError({
					error: "Допустимы только английские буквы и запятая",
				})
			);
		}
		if (e.currentTarget.value === ",") {
			return dispatch(
				createError({
					error: "Нельзя отправлять только запятую",
				})
			);
		}
		if (e.currentTarget.value.length === 0) {
			return dispatch(
				createError({
					error: "Пустая строка",
				})
			);
		}
		dispatch(clearError());
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
				disabled={disabled}
			>
				Поиск
			</button>
		</>
	);
};
