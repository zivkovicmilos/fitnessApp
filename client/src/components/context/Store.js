import React, { createContext, useReducer } from "react";

const initialState = {
	section: "Treninzi",
	renderedRows: 0,
};
const store = createContext(initialState);
const { Provider } = store;

/* REDUCERS */

const changeSection = (prevSection, nextSection, state) => {
	document.getElementById(prevSection).classList.remove("ssActive");
	document.getElementById(nextSection).classList.add("ssActive");
	console.log("PREV " + state.section + " NEXT " + nextSection);
	return { ...state, section: nextSection };
};

/* PROVIDER LOGIC */

const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case "changeSection":
				return changeSection(state.section, action.nextSection, state);
			default:
				throw new Error();
		}
	}, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
