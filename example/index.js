import React, { Component } from 'react'

import { Responsive } from 'react-utility-component';

export default class index extends Component {
    render() {
        return (
            <div>
                <Responsive
                    breakpoint={'md'}
                    narrow={<div>narrow screen mode</div>}
                    wide={<div>wide screen mode</div>} />
            </div>
        )
    }
}
