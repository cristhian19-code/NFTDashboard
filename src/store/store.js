import trunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { darkmodeReducer } from '../reducers/darkmode'
import { sidebarReducer } from '../reducers/sidebar'

const componseEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const reducers = combineReducers({
    darkmode: darkmodeReducer,
    sidebar: sidebarReducer
})

export const store = createStore(
    reducers,
    componseEnhancers(
        applyMiddleware(trunk)
    )
)