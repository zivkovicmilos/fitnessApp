import React, { createContext, useReducer } from "react";
import axios from "axios";

const initialState = {
	section: "Treninzi",
	token: localStorage.getItem("token"),
	isAuthenticated: localStorage.getItem("token") == null ? false : true,
	user: null,
	lang: "sr",
	isLoading: false
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
			case "REGISTER_SUCCESS":
				localStorage.setItem("token", action.payload.token);
				return {
					...state,
					isAuthenticated: true
				};
			case "REGISTER_FAIL":
				localStorage.removeItem("token");
				return {
					...state,
					token: null,
					isAuthenticated: false
				};
			case "SETLOADING":
				return {
					...state,
					isLoading: !state.isLoading
				};
			case "LOGIN":
				//loginUser(action.payload.email, action.payload.password, state);
				localStorage.setItem("token", action.payload.token);
				axios.defaults.headers.common["x-auth-token"] = action.payload.token;

				return {
					...state,
					isAuthenticated: true,
					user: null,
					token: action.payload.token
				};
			case "LOGOUT":
			case "AUTH_FAIL":
				localStorage.clear();
				return {
					...state,
					isAuthenticated: false,
					user: null,
					token: null
				};
			case "CHANGE_LANGUAGE":
				document.getElementById(state.lang).classList.remove("languageActive");
				document.getElementById(action.payload).classList.add("languageActive");
				return {
					...state,
					lang: action.payload
				};
			case "LOAD_USER":
				return {
					...state,
					isAuthenticated: true,
					user: action.payload
				};
			default:
				return state;
		}
	}, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
