
import React, { Fragment } from 'react'
import { media } from './Helper';

export function Responsive({ breakpoint = 'md', wideScreen = null, narrowScreen = null }) {
    return (
        <Fragment>
            <div
                css={{
                    display: 'block',
                    [media(breakpoint)]: {
                        display: 'none',
                    },
                }}>
                {narrowScreen}
            </div>
            <div
                css={{
                    display: 'none',
                    [media(breakpoint)]: {
                        display: 'block',
                    },
                }}>
                {wideScreen}
            </div>
        </Fragment>
    )
}