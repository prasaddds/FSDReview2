//18_.js
import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    console.log('Submitted values - Username:', username, 'Password:', password);
  }

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default LoginForm;
