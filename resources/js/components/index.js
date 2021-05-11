import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter} from 'react-router-dom'
import Example from './Example'

ReactDOM.render (
(
<BrowserRouter>
<Example />
</BrowserRouter>
), document.getElementById('app'));