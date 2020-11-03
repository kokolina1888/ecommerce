import React, { Component } from "react";
import "./styles.scss";
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password don match!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign in with your email and password</span>
        <form className="sign-up-form" onSubmit={(e) => this.handleSubmit(e)}>
          <FormInput
            name="displayName"
            value={displayName}
            type="text"
            handleChange={(e) => this.handleOnChange(e)}
            label="Display Name"
            required
          />
          <FormInput
            name="email"
            value={email}
            type="email"
            handleChange={(e) => this.handleOnChange(e)}
            label="email"
            required
          />
          <FormInput
            name="password"
            value={password}
            type="password"
            handleChange={(e) => this.handleOnChange(e)}
            label="password"
            required
          />
          <FormInput
            name="confirmPassword"
            value={confirmPassword}
            type="password"
            handleChange={(e) => this.handleOnChange(e)}
            label="Confirm password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
