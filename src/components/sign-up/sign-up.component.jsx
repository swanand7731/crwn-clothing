import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    this.setState({ [e.name]: e.value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            onChange={this.handleChange}
            value={this.state.displayName}
            label={'Display Name'}
            required
          />
          <FormInput
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            label={'Email'}
            required
          />
          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            label={'Password'}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
            label={'Confirm Password'}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
