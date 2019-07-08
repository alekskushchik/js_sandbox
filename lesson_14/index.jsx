import React from 'react';
import ReactDOM from 'react-dom';
import WrapInEmoji from './emoji';




    ReactDOM.render((
        <div>
            <WrapInEmoji />
            Some text
            <WrapInEmoji />
        </div>
    ), document.getElementById('root'));
