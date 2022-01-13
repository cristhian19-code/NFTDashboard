import { types } from "../types/types";

export const changeSidebar = () => {
    return (dispatch) => {
        dispatch({
            type: types.TOGGLE_SIDEBAR
        })
    }
}