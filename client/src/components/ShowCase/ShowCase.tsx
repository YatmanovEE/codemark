import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { Nav } from "../Nav/Nav";
import { Search } from "../Search/Search";
import { showCaseSelectors } from "./ShowCase.slice";
import { ShowCaseList } from "./ShowCaseList";
import "./ShowCase.style.css";

const ShowCase: FC = () => {
	const loading = useAppSelector(showCaseSelectors.selectLoading);
	return (
		<div className="container">
			<div className="flex">
				<Nav />
				<Search />
			</div>
			<ShowCaseList />
			<div className="loader">
				{loading && (
					<div className="lds-circle">
						<div />
					</div>
				)}
			</div>
		</div>
	);
};

export default ShowCase;
