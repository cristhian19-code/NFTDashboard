import { types } from "../types/types"

const initialState = {
    darkmode: false
}

export const darkmodeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_DARKMODE:
            return {
                darkmode: !state.darkmode,
            }
        default:
            return state
    }
}