import React, { useState } from 'react'

import { Waypoint } from 'react-waypoint'

export function IfInview({ children, offset = 300 }) {
  const [shouldLoad, setshouldLoad] = useState(false)

  if (shouldLoad === true) {
    return children
  }

  return (
    <Waypoint
      onEnter={() => setshouldLoad(true)}
      bottomOffset={`-${offset}px`}
      fireOnRapidScroll={false}
    >
      <div css={{
        width: '100%',
        height: offset * 2
      }}>
        &nbsp;
      </div>
    </Waypoint>
  )
}
