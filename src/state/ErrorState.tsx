import React, { createContext, useContext, useEffect, useReducer } from 'react'

export enum GlobalStateActionType {
  Busy,
  Idle,
  Error,
  ClearError,
}

export type GlobalStateAction =
  | { type: GlobalStateActionType.Busy }
  | { type: GlobalStateActionType.Idle }
  | { type: GlobalStateActionType.Error; errorMessage: string }
  | { type: GlobalStateActionType.ClearError }

const initialState: IGlobalState = {
  inProgress: false,
  hasError: false,
}

const globalStateContext = createContext<IGlobalState>(initialState)
const globalDispatchContext = createContext<React.Dispatch<GlobalStateAction>>(
  () => {}
)

const reducer = (
  state: IGlobalState,
  action: GlobalStateAction
): IGlobalState => {
  switch (action.type) {
    case GlobalStateActionType.Busy:
      return { ...state, inProgress: true }
    case GlobalStateActionType.Idle:
      return { ...state, inProgress: false }
    case GlobalStateActionType.ClearError:
      return { ...state, hasError: false }
    case GlobalStateActionType.Error:
      return {
        ...state,
        hasError: true,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}

const GlobalStateProvider: React.FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer<
    React.Reducer<IGlobalState, GlobalStateAction>
  >(reducer, initialState)

  useEffect(() => {}, [])

  return (
    <globalStateContext.Provider value={state}>
      <globalDispatchContext.Provider value={dispatch}>
        {children}
      </globalDispatchContext.Provider>
    </globalStateContext.Provider>
  )
}

const useGlobalState = () => useContext(globalStateContext)
const useGlobalDispatch = () => useContext(globalDispatchContext)

export { GlobalStateProvider, useGlobalState, useGlobalDispatch }
