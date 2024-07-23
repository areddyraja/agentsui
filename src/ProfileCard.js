import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();
  return (
    <li
      className="profile__card profile__card--featured released"
      style={{
        boxSizing: "border-box",
        border: "1px solid #d6d6d6",
        borderRadius: "0.8rem",
        overflow: "hidden",
        padding: "1.2rem",
        backgroundColor: "rgb(255, 255, 255)",
        zIndex: 1,
        position: "relative",
      }}
    >
      <div
        className="profile__card-inner"
        style={{
          boxSizing: "border-box",
          color: "rgb(51, 71, 91)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          zIndex: 1,
          position: "relative",
        }}
      >
        <div
          className="profile__title"
          style={{
            boxSizing: "border-box",
            color: "rgb(51, 71, 91)",
            alignSelf: "stretch",
            textDecoration: "none",
            zIndex: 1,
            position: "relative",
          }}
        >
          <div
            className="profile__icon"
            style={{
              boxSizing: "border-box",
              color: "rgb(51, 71, 91)",
              background: "rgb(255, 255, 255)",
              borderRadius: "50%",
              border: "1px solid #0b6cad",
              marginLeft: "auto",
              marginRight: "auto",
              width: "6.5rem",
              height: "6.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
              position: "relative",
            }}
          >
            <img
              src={profile.imgSrc}
              style={{
                boxSizing: "border-box",
                borderStyle: "none",
                maxWidth: "100%",
                verticalAlign: "middle",
                height: "auto",
                zIndex: 1,
                position: "relative",
                width: "65%",
              }}
              alt={profile.name}
            />
          </div>
          <div
            style={{
              boxSizing: "border-box",
              color: "rgb(51, 71, 91)",
              zIndex: 1,
              position: "relative",
            }}
          >
            <h2
              className="profile__name"
              style={{
                boxSizing: "border-box",
                lineHeight: 1.2,
                zIndex: 1,
                position: "relative",
                fontSize: "16px",
                fontWeight: 600,
                marginTop: "12px",
                marginBottom: "0px",
                textAlign: "center",
              }}
            >
              {profile.name}
            </h2>
            <h3
              className="profile__developer"
              style={{
                boxSizing: "border-box",
                marginBottom: "0.5rem",
                lineHeight: 1.2,
                zIndex: 1,
                position: "relative",
                color: "grey",
                fontWeight: 400,
                textAlign: "center",
                fontSize: "14px",
                marginTop: "4px",
              }}
            >
              By{" "}
              {Array.isArray(profile.developerLinks) ? (
                profile.developerLinks.map((dev, index) => (
                  <React.Fragment key={index}>
                    <a
                      className="text-copy-black"
                      href={dev.link}
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "transparent",
                        textDecoration: "underline",
                        color: "rgb(51, 71, 91)",
                        zIndex: 1,
                        position: "relative",
                      }}
                    >
                      {dev.name}
                    </a>
                    {index < profile.developerLinks.length - 1 && " & "}
                  </React.Fragment>
                ))
              ) : (
                <a
                  className="text-copy-black"
                  href={profile.developerLink}
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                    color: "rgb(51, 71, 91)",
                    zIndex: 1,
                    position: "relative",
                  }}
                >
                  {profile.developer}
                </a>
              )}
            </h3>
          </div>
          <ul
            className="profile__stats"
            style={{
              boxSizing: "border-box",
              marginBottom: "0px",
              listStyleType: "none",
              padding: "0px",
              paddingLeft: "0px",
              fontSize: "12px",
              marginTop: "12px",
              textAlign: "center",
              zIndex: 1,
              position: "relative",
            }}
          >
            <li
              className="profile__salary"
              style={{
                boxSizing: "border-box",
                zIndex: 1,
                position: "relative",
              }}
            >
              <p
                style={{
                  boxSizing: "border-box",
                  color: "rgb(51, 71, 91)",
                  zIndex: 1,
                  position: "relative",
                  margin: "0px",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                {profile.credit}
              </p>
            </li>
            <li
              className="profile__experience"
              style={{
                boxSizing: "border-box",
                zIndex: 1,
                position: "relative",
              }}
            >
              <p
                style={{
                  boxSizing: "border-box",
                  color: "rgb(51, 71, 91)",
                  zIndex: 1,
                  position: "relative",
                  margin: "0px",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                {profile.executions}
              </p>
            </li>
          </ul>
        </div>
        <div
          className="profile__card-footer"
          style={{
            boxSizing: "border-box",
            color: "rgb(51, 71, 91)",
            marginTop: "auto",
            zIndex: 1,
            position: "relative",
          }}
        >
          <div
            className="profile__link"
            style={{
              boxSizing: "border-box",
              color: "rgb(51, 71, 91)",
              marginTop: "28px",
              display: "flex",
              justifyContent: "center",
              zIndex: 1,
              position: "relative",
            }}
          >
            <div
              className="btn btn-blue-outline"
              href="/report"
              onClick={() => navigate(`/${profile?.useLink}`, { state: profile })}
              style={{
                boxSizing: "border-box",
                textDecoration: "none",
                cursor: "pointer",
                padding: "0.375rem 0.75rem",
                minHeight: "38px",
                textAlign: "center",
                verticalAlign: "middle",
                userSelect: "none",
                backgroundColor: "transparent",
                lineHeight: 1.5,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #0b6cad",
                transition: "all 0.2s ease 0s",
                minWidth: "150px",
                borderRadius: "0.25rem",
                fontSize: "14px",
                fontWeight: 600,
                zIndex: 1,
                position: "relative",
              }}
            >
              Use
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProfileCard;
