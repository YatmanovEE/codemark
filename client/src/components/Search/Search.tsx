import { FC, ReactEventHandler, useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { fetchShowCase } from "../ShowCase/ShowCase.slice";
import { setValue, clearError, createError, setDisabled } from "./Search.slice";
import API from "../ShowCase/showCaseApi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./Search.style.css";

export const Search: FC = () => {
	const { error, value, disabled } = useSelector((rootState: RootState) => {
		return rootState.searchValue;
	});

	const dispatch = useAppDispatch();
	const inputHandler: ReactEventHandler<HTMLInputElement> = (e) => {
		dispatch(setValue({ value: e.currentTarget.value }));
	};

	useEffect(() => {
		if (value.match(/[^A-Za-z,]/)) {
			dispatch(
				createError({
					error: "Допустимы только английские буквы и запятая",
				})
			);
		} else if (value === ",") {
			dispatch(
				createError({
					error: "Нельзя отправлять только запятую",
				})
			);
		} else if (value === "") {
			dispatch(
				setDisabled({
					disabled: true,
				})
			);
		} else dispatch(clearError());
	}, [dispatch, value]);

	const searchHandler: ReactEventHandler<HTMLButtonElement> = (e) => {
		if (value.length === 0) {
			dispatch(
				createError({
					error: "Пустая строка",
				})
			);
		}
		if (!error) {
			value.split(",").forEach((tagName, count) => {
				dispatch(
					fetchShowCase({
						name: tagName,
						url: `${API.fetchTag}&tag=${tagName}`,
					})
				);
			});
		}
	};

	return (
		<div className="search">
			<div className="wrapper search_wrapper">
				<input
					type="text"
					className={`search_input input ${error && "input__error"}`}
					value={value}
					onChange={inputHandler}
				/>
				<div className="">
					<span className="error search_error">{error}</span>
				</div>
			</div>
			<button
				className="btn search_btn btn__primary"
				onClick={searchHandler}
				disabled={disabled}
			>
				Поиск
			</button>
		</div>
	);
};
