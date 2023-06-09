import React, { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    console.log(password);
  };
  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setPasswordError("Please provide 6 character password");
    } else if (!/.+[A-Z].+/.test(passwordInput)) {
      setPasswordError(
        "Password must contain at least one uppercase character"
      );
    } else {
      setPasswordError("");
    }
  };
  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailInput
      )
    ) {
      setEmailError("Please provide a Valid email");
    } else {
      setEmailError("");
    }
  };
  // uncontrolled component => controlled component
  return (
    <form onSubmit={handleSubmit} action="" className="mt-20">
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleEmail}
          className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 ${
            email
              ? emailError
                ? "border-red-500"
                : "border-green-500"
              : "border-gray-300 focus:border-blue-600 peer "
          }`}
          placeholder=" "
          required
        />
        <label
          htmlFor="email"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email Address
        </label>
        {emailError && <span className="error">{emailError}</span>}
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
          className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none focus:outline-none focus:ring-0 peer ${
            password
              ? passwordError
                ? "border-red-500"
                : "border-b-green-500"
              : "border-gray-300 focus:border-blue-600 "
          }`}
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_password"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Password
        </label>
        {passwordError && <span className="error">{passwordError}</span>}
      </div>
    </form>
  );
};

export default Login;
