import { FC, useRef } from "react";
import ReactDOM from "react-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectNote } from "./Notice.slice";
import { CSSTransition } from "react-transition-group";
import "./Notice.style.css";
export const Notice: FC = () => {
	const note = useAppSelector(selectNote);
	const ref = useRef(null);

	return (
		<CSSTransition
			unmountOnExit
			in={!!note}
			timeout={200}
			classNames="notice_wrapper"
			nodeRef={ref}
		>
			<div className="wrapper notice_wrapper" ref={ref}>
				<span>{note}</span>
			</div>
		</CSSTransition>
	);
};
