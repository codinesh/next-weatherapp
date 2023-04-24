'use client'

import { useGlobalState } from '../state/ErrorState'
import ErrorBanner from './primitives/ErrorBanner'
import LoadingIndicator from './primitives/LoadingIndicator'

const GlobalElements = () => {
  const globalState = useGlobalState()
  return (
    <>
      <ErrorBanner
        title={'Error'}
        errorDescription={globalState.errorMessage ?? ''}
        key={'global'}
        bannerOpen={globalState.hasError}
      />
      <LoadingIndicator open={globalState.inProgress} />
    </>
  )
}

export default GlobalElements
