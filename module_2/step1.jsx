import React from 'react';

  export default class Step1 extends React.Component{
  constructor() {
    super();

      this.setState({
          }
      )
  }

  render() {
  return(
      <main>
          <h2>Welcome!</h2>
          <p>Create your account to get started. After that,<br />
              you can share books and make friends.</p>
          <form id={'logInForm'} style={{display: 'flex'}}>
              <label>NAME</label>
              <input id={'name'} style={{type: 'text'}}/>
              <label>USERNAME</label>
              <input id={'username'} style={{type: 'text'}}/>
              <label>COUNTRY</label>
              <input id={'country'}/>
              <label>AGE</label>
              <input id={'age'} style={{type: 'number'}}/>
          </form>
      </main>
  )
  }
}