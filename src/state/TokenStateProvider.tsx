import React, {ReactNode, useReducer} from "react"

interface TokenState {
    token: string
}

interface ActionType {
    type: string
    payload: TokenState
}

export const reducer = (state: TokenState, action: ActionType) => {
    switch (action.type) {
        default:
            return state
    }
}

const initialState: TokenState = {token: ""}
const TokenContext = React.createContext<{
    state: TokenState
    dispatch: React.Dispatch<any>
}>({
    state: initialState,
    dispatch: () => null
})

export const GlobalProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <TokenContext.Provider value={{state, dispatch}}>
            {children}
        </TokenContext.Provider>
    )
}

export default {GlobalProvider, TokenContext}