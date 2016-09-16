'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './views/app';

require("style!raw!sass!../scss/style.scss")

ReactDOM.render(<App />, document.getElementById('root'))
