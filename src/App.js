// App.js
import React from "react";
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import { Content, Footer } from "antd/es/layout/layout";
import { Layout } from "antd";
import NavBar from "./Header";
import RouterComponent from "./Router";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <NavBar />
        <Content
          style={{
            padding: "50px 48px",
          }}
        >
          <RouterComponent />
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          {/* Built by ©{new Date().getFullYear()} Created by Ant UED */}
          Built by <b>Omniwyse</b> with GPT-4
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
