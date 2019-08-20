import React from 'react'
import Async from 'react-async'
import { isEmpty } from 'lodash'

function Preloader( ) {
  return <div css={{ width: '100%', height: 300 }}>&nbsp;</div>
}

export function Fetch({
  children,
  service,
  onError,
  preloader,
}) {
  return (
    <Async promiseFn={service}>
      {({ data, error, isLoading }) => {
        if (isLoading) {
          return typeof preloader === 'function'
            ? React.createElement(preloader)
            : <Preloader />
        }

        if (error) {
          if (typeof onError === 'function') {
            return onError(error)
          }

          return null
        }

        if (isEmpty(data)) {
          return null
        }

        return children({ data })
      }}
    </Async>
  )
}
