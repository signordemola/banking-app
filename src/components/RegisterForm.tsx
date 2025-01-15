import React from "react";

const RegisterForm = () => {
  return (
    <div className="auth-form">
      <div className="auth-form-header">
        <p>logo</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.2em"
          viewBox="0 0 24 24"
          width="1.2em"
          fill="currentColor"
          style={{
            verticalAlign: "-0.125em",
          }}
        >
          <g fill="none">
            <path d="M0 0h24v24H0V0z"></path>
            <path d="M0 0h24v24H0V0z" opacity=".87"></path>
          </g>
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"></path>
        </svg>
      </div>

      <form className="form-content">
        <div className="form-div">
          {/* <label className="">Email:</label> */}
          <input type="email" className="" placeholder="Enter email" />
        </div>

        <div className="form-div">
          {/* <label>Password:</label> */}
          <input type="password" className="" placeholder="Enter password" />
        </div>

        <div className="form-div check-wrapper">
          <div className="check-box">
            <input type="checkbox" className="" id="customCheck1" />
            <label className="" htmlFor="customCheck1">
              Remember me
            </label>
          </div>

          <div>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
