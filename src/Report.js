import React from "react";
// import { useLocation } from "react-router-dom";
import ImageToHtml from "./agents/ImageToHtml";

export default function Report() {
//   const { state } = useLocation();
  return (
    <>
      <div
        className="min-height d-flex border-0 with-icon has-buttons card-header"
        style={{
          boxSizing: "border-box",
          color: "rgb(51, 71, 91)",
          padding: "20px 25px 0px",
          background: "transparent",
          marginBottom: "0px",
          backgroundColor: "transparent",
          borderColor: "rgb(234, 237, 247)",
          position: "relative",
          paddingLeft: "25px",
          paddingRight: "25px",
          borderRadius: "11px 11px 0px 0px",
          minHeight: "66px",
          borderBottom: "none",
          alignItems: "center",
          paddingTop: "2rem",
          paddingBottom: "1.5rem",
          flexWrap: "wrap",
          border: "0px",
          display: "flex",
        }}
      >
        {/* <div
          className="icon-wrapper"
          style={{
            boxSizing: "border-box",
            color: "rgb(51, 71, 91)",
            borderRadius: "50%",
            flexShrink: 0,
            width: "4rem",
            height: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f8f8f8",
          }}
        >
          <img
            src={state?.imgSrc}
            alt="search"
            style={{
              boxSizing: "border-box",
              borderStyle: "none",
              verticalAlign: "middle",
              height: "auto",
              maxWidth: "100%",
              width: "70%",
            }}
          />
        </div>
        <div
          style={{
            boxSizing: "border-box",
            color: "rgb(51, 71, 91)",
            marginTop: "0px",
            marginLeft: "1rem",
            width: "50%",
          }}
        >
          <div
            className="heading"
            style={{
              boxSizing: "border-box",
              color: "rgb(51, 71, 91)",
              gap: "0.75rem",
              marginBottom: "8px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <h1
              className="h4"
              style={{
                boxSizing: "border-box",
                marginTop: "0px",
                fontWeight: 500,
                lineHeight: 1.2,
                fontSize: "1.3125rem",
                marginBottom: "0px",
              }}
            >
              {state?.name}
            </h1>
          </div>
          <p
            className="mb-0 text-subtext-gray"
            style={{
              boxSizing: "border-box",
              marginTop: "0px",
              marginLeft: "0px",
              color: "grey",
              marginBottom: "0px",
            }}
          >
            {state?.description}
          </p>
        </div>
        <div
          className="ms-auto align-self-start"
          style={{
            boxSizing: "border-box",
            color: "rgb(51, 71, 91)",
            width: "auto",
            gap: "0.5rem",
            display: "flex",
            flexWrap: "wrap",
            marginTop: "0px",
            alignSelf: "flex-start",
            marginLeft: "auto",
          }}
        >
          <a
            className="btn btn-sm btn-dark-blue text-white"
            href="/login"
            style={{
              boxSizing: "border-box",
              textDecoration: "none",
              cursor: "pointer",
              transition:
                "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
              textAlign: "center",
              verticalAlign: "middle",
              userSelect: "none",
              lineHeight: 1.5,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.375rem 0.5rem",
              minHeight: "0px",
              border: "1px solid transparent",
              backgroundColor: "#0b6cad",
              transitionProperty: "background-color",
              transitionDuration: "0.2s",
              fontWeight: 600,
              width: "auto",
              borderRadius: "3px",
              fontSize: "15px",
              height: "auto",
              color: "rgb(255, 255, 255)",
            }}
          >
            Sign up to use agents. Takes just a minute, and it's free!
          </a>
        </div> */}
        <ImageToHtml />
      </div>
    </>
  );
}
