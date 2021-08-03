import { FC, useEffect, useState } from "react";
import { timeoutNotes } from "../Notice/Notice.slice";
import { clearValue } from "../Search/Search.slice";
import { clearShowCaseList, fetchShowCase } from "../ShowCase/ShowCase.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { navSelectors, switchSelector } from "./Nav.slice";
import API from "../ShowCase/showCaseApi";

export const Nav: FC = () => {
	const dispatch = useAppDispatch();
	const [timerActive, setTimerActive] = useState(false);

	useEffect(() => {
		let timer = setInterval(() => {
			dispatch(
				fetchShowCase({
					name: "random",
					url: `${API.fetchTag}&tag=random`,
				})
			);
		}, 500);
		if (!timerActive) clearInterval(timer);
		return () => {
			clearInterval(timer);
		};
	}, [dispatch, timerActive]);

	const selector = useAppSelector(navSelectors.selectSelector);
	return (
		<div className="wrapper nav_wrapper">
			<button
				className="btn btn_showCase btn__secondary"
				onClick={() => dispatch(switchSelector())}
			>
				{selector ? "Группировать" : "Разгрупировать"}
			</button>
			<button
				className="btn btn_showCase btn__secondary"
				onClick={() => {
					dispatch(clearValue());
					dispatch(clearShowCaseList());
					dispatch(timeoutNotes({ notes: "Список очищен" }));
				}}
			>
				Очистить
			</button>
			<button
				className="btn btn_showCase btn__secondary"
				onClick={() => {
					setTimerActive(!timerActive);
				}}
			>
				delay
			</button>
		</div>
	);
};
