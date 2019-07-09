import React from 'react';
import ReactDOM from 'react-dom';
import WrapInEmoji from './emoji';

window.render = function render() {
    ReactDOM.render((
        <div>
            <WrapInEmoji defaultEmoji="😀">Some Text</WrapInEmoji>
        </div>
    ), document.getElementById('root'));
};

render();
