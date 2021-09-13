namespace IShowCase {
	export type showItem = {
		date: number;
		name: string;
		photoSrc: string;
		loading: boolean;
	};

	export type IState = {
		showCaseList: {
			[key: string]: showItem[];
		};
		pendingItem: showItem;
		loading: boolean;
	};
	export type IFetchProps = {
		url: string;
		name: string;
	};
}

export default IShowCase;
