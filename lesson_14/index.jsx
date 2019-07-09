import React from 'react';

export default class WrapInEmoji extends React.Component {
    constructor() {
        super();

        this.state = {
            emoji: String.fromCodePoint(0x1F6 + Math.floor(Math.random() * 39 + 1))
        };
        
        this.state.default = true;
    }

    onEmojiClick() {
        this.setState({
            emoji: String.fromCodePoint(0x1F601 + Math.round(Math.random() * 39 + 1)),
        });
    }
    
    render() {
        if(this.props.defaultEmoji && this.state.default) {
            this.state = {
                emoji: this.props.defaultEmoji
            };
        }
        return (
            <div>
                <span onClick={this.onEmojiClick.bind(this)}>{this.state.emoji}</span>
                {this.props.children}
                <span onClick={this.onEmojiClick.bind(this)}>{this.state.emoji}</span>
            </div>
        );
    }
}
