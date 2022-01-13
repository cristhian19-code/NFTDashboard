import { types } from "../types/types"

const initialState = {
    active: true
}

export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_SIDEBAR:
            return {
                active: !state.active,
            }
        default:
            return state
    }
}