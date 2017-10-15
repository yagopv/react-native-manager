import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Card, CardSection, Input, Button } from './common';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.onEmailChange.bind(this);
    this.onPasswordChange.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="username@mail.com"
            value={this.props.email}
            onChangeText={this.onEmailChange} />
        </CardSection>
        <CardSection>
          <Input 
            label="Password"
            placeholder="Enter your password"
            value={this.props.password}
            secureTextEntry 
            onChangeText={this.onPasswordChange} />
        </CardSection>
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect(mapStateToProps, actions)(LoginForm);