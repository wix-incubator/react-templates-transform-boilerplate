import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

var elem = React.createElement(App);
render(elem, document.getElementById('root'));