namespace IShowCase {
	export type IState = {
		showCaseList: {
			[key: string]: {
				date: number;
				name: string;
				photoSrc: string;
			}[];
		};
		loading: boolean;
	};
	export type IFetchProps = {
		url: string;
		name: string;
	};
}

export default IShowCase;
