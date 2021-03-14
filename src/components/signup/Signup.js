import React, { Component } from 'react'

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      fnerr: "",
      lnerr:"",
      emailErr:'',
    };
  }
  changeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
    if (event.target.value === "") {
      this.setState({ fnerr: "First Name is required" });
    }
    if (event.target.value !== "") {
      this.setState({ fnerr: "" });
    }
  };
  changeLastName = (event) => {
    this.setState({lastName: event.target.value });
    if (event.target.value === "") {
      this.setState({ lnerr: "Last Name is required" });
    }
    if (event.target.value !== "") {
      this.setState({ lnerr: "" });
    }
  };
  changeEmail=(event)=>{
        this.setState({ email: event.target.value });
        if (event.target.value === "") {
          this.setState({ emailErr: "Email is required" });
        }
        if (event.target.value !== "") {
          this.setState({ emailErr: "" });
        }
  }
  render() {
    return (
      <div>
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-md-11 mx-auto">
                <div className="card">
                  <div className="card-header text-center">
                    <h2>Sign Up</h2>
                  </div>
                  <div className="card-body">
                    <form className="form">
                      <div className="row form-group">
                        <div className="col-md-3">
                          <label>
                            <strong>First Name:</strong>{" "}
                          </label>
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            formControlName="firstName"
                            onChange={this.changeFirstName}
                            value={this.state.firstName}
                          />
                          <span className="text-danger">
                            {this.state.fnerr}
                          </span>
                        </div>
                      </div>
                      <div className="row form-group">
                        <div className="col-md-3">
                          <label>
                            <strong>Last Name:</strong>
                          </label>
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            formControlName="lastName"
                            onChange={this.changeLastName}
                            value={this.state.lastName}
                          />
                            <span className="text-danger">
                            {this.state.lnerr}
                          </span>
                        </div>
                      </div>
                      <div className="row form-group">
                        <div className="col-md-3">
                          <label>
                            <strong>Email ID:</strong>
                          </label>
                        </div>
                        <div className="col">
                          <input
                            type="email"
                            className="form-control"
                            formControlName="email"
                            onChange={this.changeEmail}
                            value={this.state.emailemail}
                          />
                          <span className="text-danger">{this.state.emailErr}</span>
                        </div>
                      </div>
                      <div className="row form-group">
                        <div className="col-md-3">
                          <label>
                            <strong>Mobile number:</strong>
                          </label>
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            formControlName="mobile"
                            onChange={this.changeMobileNumber}
                            value={this.state.mobileNumber}
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <div className="col-md-3">
                          <label>
                            <strong>Password:</strong>
                          </label>
                        </div>
                        <div className="col">
                          <input
                            type="password"
                            className="form-control"
                            formControlName="password"
                            onChange={this.changePassword}
                            value={this.state.password}
                          />
                        </div>
                      </div>
                      <div className="row form-group">
                        <div className="col-md-3">
                          <label>
                            <strong>Confirm Password:</strong>
                          </label>
                        </div>
                        <div className="col">
                          <input
                            type="password"
                            className="form-control"
                            formControlName="confirmPassword"
                            onChange={this.changeConfirmPassword}
                            value={this.confirmPassword}
                          />
                        </div>
                      </div>
                      <div className="row form-group justify-content-center">
                        <button type="submit" className="btn btn-primary">
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default Signup


