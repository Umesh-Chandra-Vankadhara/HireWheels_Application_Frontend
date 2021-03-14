import React from "react";

function Signin() {
  return (
    <React.Fragment>
      <div class="container">
        <div class="row">
          <div class="col-md-11 mx-auto">
            <div class="card">
              <div class="card-header text-center">
                <h2>Sign In</h2>
              </div>
              <div class="card-body">
                <form class="form">
                  <div class="row form-group">
                    <div class="col-md-3">
                      <label>
                        <strong>Email ID:</strong>
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        formControlName="email"
                      />
                    </div>
                  </div>
                  <div class="row form-group">
                    <div class="col-md-3">
                      <label>
                        <strong>Password:</strong>
                      </label>
                    </div>
                    <div class="col">
                      <input
                        type="password"
                        class="form-control"
                        formControlName="password"
                      />
                    </div>
                  </div>
                  <div class="row form-group justify-content-center">
                    <button type="submit" class="btn btn-primary">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Signin;
