import { UPDATE_NUMBERS } from "../constant/constant.js"

const initialState = {
	numbers: []
};
export const homeState = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NUMBERS:
		// console.log(action.payload)
			return {
				numbers: action.payload.phones
			}
		default:
			return state;
	}
};
export default homeState;