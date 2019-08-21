# react-utility-component

Getting started
------

```
npm install react-utility-component --save
```

Components
------

|No.|Name|Type| 
|-------|---------------|:----------:|
|1      |Responsive     | Component  | 
|2      |Adaptive       | Component  |  
|3      |Fetch          | Component  |
|4      |FetchMore      | Component  |
|5      |LoadingHoc     | HOC        |
|6      |IfInView       | Component  |


How to use
------

### Responsive Component
```javascript
import React, { Component } from 'react'

import { Responsive } from 'react-utility-component';

export default class index extends Component {
    render() {
        return (
            <div>
                <Responsive 
                breakpoint={'md'} 
                narrowScreen={<div>show for narrow screen mode</div>} 
                wideScreen={<div>show for wide screen mode</div>} />
            </div>
        )
    }
}
```

## Inspire and extend from nextwebjs
- https://suranartnc.github.io/nextweb/docs/getting-started/getting-started/
