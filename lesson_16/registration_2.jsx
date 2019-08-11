import React from 'react';
import ReactDOM from 'react-dom';

export default class Registration_2 extends React.Component {
    constructor() {
        super();

        this.state = {
            value_password: '',
            value_email: '',
            value_password_again: '',
            disabled_but: '{true}',
            style_input: '',
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePasswordAgain = this.handleChangePasswordAgain.bind(this);
    }

    handleChangeEmail(event) {
        this.setState({ value_email: event.target.value });
    }
    handleChangePassword(event) {
        this.setState({ value_password: event.target.value })
    }
    handleChangePasswordAgain(event) {
        this.setState({ value_password_again: event.target.value })
    }

    onButtonClick(event) {
        if (this.state.value_password === this.state.value_password_again) {
            this.setState({ style_input: '3px solid green' });
            this.props.update2(this.state.value_email, this.state.value_password);
            this.props.serverPush();
            this.props.nextStep()
        } else {
            this.setState({ style_input: '3px solid red' })
        }
    }
    render() {
        return (
            <form>
                <div>Email address<br /><input type='email' id='email' className='input_form' value={this.state.value_email} onChange={this.handleChangeEmail} required/></div>
                <div>Password<br /><input type='password' value={this.state.value_password} id='password' className='input_form' required onChange={this.handleChangePassword}/></div>
                <div>Type password again <br /><input type='password' value={this.state.value_password_again} style={{borderBottom: this.state.style_input}} className='input_form' onChange={this.handleChangePasswordAgain} required/></div>
                <button onClick={this.onButtonClick}  > Sign Up </button>
            </form>
        )

    }

}