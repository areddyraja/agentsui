import { Button, Col, Layout, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Added to ensure space between logo and buttons
        }}
      >
        <div style={{ flex: 1 }}>
          <Row className="demo-logo">
            <Col>
              <img
                src="logo.jpg"
                alt="logo"
                width="170px"
                onClick={() => navigate("/")}
                style={{ marginTop: 25, cursor: "pointer" }}
              />
            </Col>
          </Row>
        </div>
        <div>
          <Row justify="end" gutter={10}>
            {" "}
            {/* Added justify="end" to right-align the buttons */}
            <Col>
              <Button
                type="primary"
                size="large"
                onClick={() => navigate("/login")}
              >
                Sign In
              </Button>
            </Col>
            <Col>
              <Button size="large" onClick={() => navigate("/login")}>
                Sign Up
              </Button>
            </Col>
          </Row>
        </div>
        {/* <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={["2"]}
    items={items}
    style={{
      flex: 1,
      minWidth: 0,
    }}
  /> */}
      </Header>
    </>
  );
};

export default NavBar;
