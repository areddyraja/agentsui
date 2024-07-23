import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";
import "./login.css"

export const Login = () => {
  const navigate = useNavigate();
  const clientId = "YOUR_GOOGLE_CLIENT_ID";
  const onSuccess = (response) => {
    console.log("Login Successful:", response);
    // Handle successful login (e.g., send user data to backend)
  };

  const onFailure = (error) => {
    console.error("Login Failed:", error);
  };
  return (
    <GoogleOAuthProvider>
      <div className="login" onClick={() => navigate("/")}>
        <img
          id="prompt-logo-center"
          className="cd7df2892 c62875a1f"
          alt="agent.ai"
          src="https://agent.ai/agent.ai/agent.ai-logo-5.png"
          style={{
            boxSizing: "border-box",
            WebkitFontSmoothing: "antialiased",
            padding: "0px",
            // marginTop: "20px",
            border: "0px",
            font: "16px / 24px ulp-font, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif",
            verticalAlign: "baseline",
            margin: "20px auto",
            display: "block",
            objectFit: "contain",
            maxHeight: "52px",
            maxWidth: "100%",
            content: 'url("https://agent.ai/agent.ai/agent.ai-logo-5.png")',
            height: "52px",
            color: "rgb(30, 33, 42)",
            lineHeight: 1.5,
            textAlign: "center",
            cursor: "pointer"
          }}
        />
        <h3>Login to Agent AI</h3>
        <Divider />
        {/* <form>
      <div className="text_area">
        <input
          type="text"
          id="username"
          name="username"
          defaultValue="username"
          className="text_input"
        />
      </div>
      <div className="text_area">
        <input
          type="password"
          id="password"
          name="password"
          defaultValue="password"
          className="text_input"
        />
      </div>
      <input type="submit" value="LOGIN" className="btn" />
    </form> */}
        <div style={{ margin: "0 40px" }}>
          <GoogleLogin
            clientId={clientId}
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
          />
        </div>
        {/* <a className="link" href="/signup">
          Sign Up
        </a> */}
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
