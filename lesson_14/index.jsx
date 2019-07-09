import React from 'react';
import ReactDOM from 'react-dom';
import WrapInEmoji from './emoji';
import CountrySelect from './countries';

window.render = function render() {
    ReactDOM.render((
        <div>
            <WrapInEmoji defaultEmoji="😀">Some Text</WrapInEmoji>
            <br/><hr/>
            <CountrySelect />
        </div>
    ), document.getElementById('root'));
};

render();
