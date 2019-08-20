
import React, { Fragment } from 'react'
import { media } from './Helper';

export function Responsive({ breakpoint = 'md', wide = null, narrow = null }) {
    return (
        <Fragment>
            <div
                css={{
                    display: 'block',
                    [media(breakpoint)]: {
                        display: 'none',
                    },
                }}>
                {narrow}
            </div>
            <div
                css={{
                    display: 'none',
                    [media(breakpoint)]: {
                        display: 'block',
                    },
                }}>
                {wide}
            </div>
        </Fragment>
    )
}