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
    error: string;
  };
}

export default IShowCase;
