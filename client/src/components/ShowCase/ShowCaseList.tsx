import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { navSelectors } from "../Nav/Nav.slice";
import { setValue } from "../Search/Search.slice";
import { showCaseSelectors } from "./ShowCase.slice";
import "./ShowCaseList.style.css";

type ISortObj<T> = (arr: T[][]) => T[];

const sortObj: ISortObj<{ date: number; photoSrc: string; name: string }> = (
	arr
) => {
	let list: { date: number; photoSrc: string; name: string }[] = [];
	for (let i = 0; i < arr.length; i++) {
		list.push(...arr[i]);
	}
	return list.sort((a, b) => a.date - b.date);
};

export const ShowCaseList: FC = () => {
	const showCase = useAppSelector(showCaseSelectors.selectShowCaseList);
	const selector = useAppSelector(navSelectors.selectSelector);
	const dispatch = useAppDispatch();
	const keysList = Object.keys(showCase);
	return (
		<div className="container">
			{keysList.length > 0 ? (
				selector ? (
					sortObj(Object.values(showCase)).map((itemImage, keyItemImage) => (
						<img
							onClick={() =>
								dispatch(
									setValue({
										value: itemImage.name,
									})
								)
							}
							src={itemImage.photoSrc}
							alt=""
							key={itemImage.date + keyItemImage}
						/>
					))
				) : (
					keysList.map((keysListItem, keyShowCase) => {
						return (
							<div key={keyShowCase + keysListItem}>
								<h4>{keysListItem}</h4>
								<div className="wrapper showCaseList_wrapper">
									{showCase[keysListItem].map((itemImage, keyItemImage) => {
										return !itemImage.loading ? (
											<img
												className="btn"
												onClick={() =>
													dispatch(
														setValue({
															value: itemImage.name,
														})
													)
												}
												src={itemImage.photoSrc}
												alt=""
												key={itemImage.date + keyItemImage}
											/>
										) : (
											<div
												className="loader loader_image"
												key={keyItemImage + "loader"}
											>
												<div className="lds-circle">
													<div />
												</div>
											</div>
										);
									})}
								</div>
							</div>
						);
					})
				)
			) : (
				<span>Список пуст</span>
			)}
		</div>
	);
};
