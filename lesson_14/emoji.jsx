import React from 'react';

export class WrapInEmoji extends React.Component{
    constructor(){
        super();

    }
    render() {
        return(
            <div
            >
                {props.symbol}
            </div>
        )
    }
}
