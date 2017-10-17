import React from 'react';
import { connect } from 'react-redux';
import { Text, StyleSheet } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';

import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }  

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress}>
        Login
      </Button>
    );
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

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);