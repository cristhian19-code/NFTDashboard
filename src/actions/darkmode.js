import { types } from '../types/types'

export const changeDarkMode = () => {
    return (dispatch) => {
        dispatch({
            type: types.TOGGLE_DARKMODE
        })
    }
}