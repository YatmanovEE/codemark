import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setValue } from "../Search/Search.slice";
import IShowCase from "./interfaces";
import { showCaseSelectors } from "./ShowCase.slice";

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
  const [selectors, setSelectors] = useState(true);
  const showCase = useAppSelector(showCaseSelectors.selectShowCaseList);
  const dispatch = useAppDispatch();
  const keysList = Object.keys(showCase);
  if (selectors) {
    const valueList = Object.values(showCase);
  }
  return (
    <>
      <button
        className="btn btn_showCase"
        onClick={() => setSelectors((prev) => !prev)}
      >
        {selectors ? "Группировать" : "Разгрупировать"}
      </button>
      {}
      {keysList.length > 0 ? (
        selectors ? (
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
                <span>{keysListItem}</span>
                {showCase[keysListItem].map((itemImage, keyItemImage) => {
                  return (
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
                  );
                })}
              </div>
            );
          })
        )
      ) : (
        <span>Список пуст</span>
      )}
    </>
  );
};
