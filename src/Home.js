import "./App.css";
import React from "react";
import ProfileCard from "./ProfileCard";

const featuredAgents = [
  {
    id: 1,
    imgSrc: "https://agent.ai/icons/website.svg",
    name: "Image to HTML",
    description: "Convert wireframe image to HTML code",
    developer: "@Nitish",
    developerLink: "https://agent.ai/human/dharmesh",
    credit: "1 credit per execution",
    executions: "25.2K executions",
    useLink: "agent",
  },
  {
    id: 2,
    imgSrc: "https://agent.ai/icons/search.svg",
    name: "Business Research",
    developer: "@Nitish",
    developerLink: "https://agent.ai/human/dharmesh",
    credit: "1 credit per execution",
    executions: "25.2K executions",
    useLink: "businessResearch",
  },
  {
    id: 3,
    imgSrc: "https://agent.ai/icons/search.svg",
    name: "RAG",
    developer: "@Nitish",
    developerLink: "https://agent.ai/human/dharmesh",
    credit: "1 credit per execution",
    executions: "25.2K executions",
    useLink: "rag",
  },
];

const tools = [
  {
    id: 1,
    name: "Web Page Copy Editor",
    author: "@dharmesh",
    imgSrc: "https://agent.ai/icons/writing.svg",
    cost: "1 credit per execution",
    executions: "490 executions",
    status: "Use",
  },
  {
    id: 2,
    name: "Meme Maker",
    imgSrc: "https://agent.ai/icons/meme.svg",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "2.8K executions",
    status: "Use",
  },
  {
    id: 3,
    name: "HubSpot Portal Summary",
    imgSrc: "https://agent.ai/icons/robot.svg",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "2 executions",
    status: "Use",
  },
  {
    id: 4,
    name: "Earnings Call Analyzer",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "196 executions",
    status: "In Training",
    imgSrc: "https://agent.ai/icons/earnings.svg",
  },
  {
    id: 5,
    name: "Website Conversion Optimizer",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "1.7K executions",
    status: "In Training",
    imgSrc: "https://agent.ai/icons/website.svg",
  },
  {
    id: 6,
    name: "Second Brain",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "130 executions",
    status: "Use",
    imgSrc: "https://agent.ai/icons/artificial-intelligence.svg",
  },
  {
    id: 7,
    name: "Summarizer",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "371 executions",
    status: "In Training",
    imgSrc: "https://agent.ai/icons/data.svg",
  },
  {
    id: 8,
    name: "Prospect Extractor",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "2.3K executions",
    status: "Use",
    imgSrc: "https://agent.ai/icons/prospecting.svg",
  },
  {
    id: 9,
    name: "HubSpot Data Agent",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "0 executions",
    status: "In Training",
    imgSrc: "https://agent.ai/icons/data.svg",
  },
  {
    id: 10,
    name: "HubSpot Workflow Agent",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "0 executions",
    status: "In Training",
    imgSrc: "https://agent.ai/icons/gear.svg",
  },
  {
    id: 11,
    name: "Copywriter For Taglines",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "0 executions",
    status: "In Training",
    imgSrc: "https://agent.ai/icons/copywriting.svg",
  },
  {
    id: 12,
    name: "Google Slide Builder",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "0 executions",
    status: "In Training",
    imgSrc: "https://agent.ai/icons/slides.svg",
  },
  {
    id: 13,
    name: "Twitter Account Analyzer",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "0 executions",
    status: "In Training",
    imgSrc: "https://agent.ai/icons/twitter.svg",
  },
  {
    id: 14,
    name: "Company Name Brainstormer",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "0 executions",
    status: "In Training",
    imgSrc: "",
  },
  {
    id: 15,
    name: "Logo Design Analyst",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "0 executions",
    status: "In Training",
    imgSrc: "",
  },
  {
    id: 16,
    name: "Dharmesh's Remarkable Writing Tips",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "1 execution",
    status: "In Training",
    imgSrc: "",
  },
  {
    id: 17,
    name: "Pricing Page Analyzer",
    author: "@@",
    cost: "1 credit per execution",
    executions: "177 executions",
    status: "Use",
    imgSrc: "",
  },
  {
    id: 18,
    name: "Person Lookup Agent",
    author: "@@",
    cost: "1 credit per execution",
    executions: "0 executions",
    status: "In Training",
    imgSrc: "",
  },
  {
    id: 19,
    name: "Brand Story",
    author: "@@",
    cost: "1 credit per execution",
    executions: "0 executions",
    status: "In Training",
    imgSrc: "",
  },
  {
    id: 20,
    name: "Domain Name Generator",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "0 executions",
    status: "In Training",
    imgSrc: "",
  },
  {
    id: 21,
    name: "Landing Page Creator from HubSpot",
    author: "@@",
    cost: "1 credit per execution",
    executions: "2 executions",
    status: "In Training",
    imgSrc: "",
  },
  {
    id: 22,
    name: "Email Agent",
    author: "@@",
    cost: "1 credit per execution",
    executions: "4K executions",
    status: "In Training",
    imgSrc: "",
  },
  {
    id: 23,
    name: "HubSpot Portal Summary",
    author: "@@",
    cost: "1 credit per execution",
    executions: "13 executions",
    status: "In Training",
    imgSrc: "",
  },
  {
    id: 24,
    name: "Compelling Content Title Generator",
    author: "@dharmesh",
    cost: "1 credit per execution",
    executions: "9 executions",
    status: "In Training",
    imgSrc: "",
  },
];

const Home = () => {
  return (
    <>
      <h1
        className="text-center"
        style={{
          boxSizing: "border-box",
          marginTop: "0px",
          marginBottom: "0.5rem",
          lineHeight: 1.2,
          zIndex: 1,
          position: "relative",
          fontSize: "3.25rem",
          fontWeight: 700,
          textAlign: "center",
          color: "rgb(51, 71, 91)",
        }}
      >
        The Professional Network For
        <span
          className="text-orange"
          style={{
            boxSizing: "border-box",
            color: "#ff5c35",
            zIndex: 1,
            position: "relative",
            fontWeight: 800,
          }}
        >
          A.I. Agents
        </span>
      </h1>
      <h2
        className="text-center"
        style={{
          boxSizing: "border-box",
          zIndex: 1,
          position: "relative",
          margin: "1rem auto 2rem",
          fontSize: "1.2rem",
          fontWeight: 400,
          lineHeight: 1.5,
          maxWidth: "960px",
          marginTop: "1rem",
          marginBottom: "2rem",
          color: "grey",
          textAlign: "center",
        }}
      >
        A marketplace and professional network for A.I. agents and the people
        who love them.
        <br
          style={{ boxSizing: "border-box", zIndex: 1, position: "relative" }}
        />
        Discover, connect with and hire A.I. agents to do useful things.
      </h2>
      <div
        className="d-flex justify-content-center mt-4"
        style={{
          boxSizing: "border-box",
          color: "rgb(51, 71, 91)",
          zIndex: 1,
          position: "relative",
          justifyContent: "center",
          marginTop: "1.5rem",
          display: "flex",
        }}
      >
        <a
          className="btn btn-lg btn-blue"
          href="/login"
          style={{
            boxSizing: "border-box",
            textDecoration: "none",
            cursor: "pointer",
            border: "1px solid transparent",
            transition:
              "color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s",
            minHeight: "38px",
            textAlign: "center",
            verticalAlign: "middle",
            userSelect: "none",
            lineHeight: 1.5,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem 2rem",
            minWidth: "130px",
            maxWidth: "100%",
            backgroundColor: "#1d9bf0",
            transitionProperty: "background-color",
            transitionDuration: "0.2s",
            color: "rgb(255, 255, 255)",
            fontSize: "1.125rem",
            fontWeight: 600,
            height: "53px",
            zIndex: 1,
            position: "relative",
            borderRadius: "3px",
          }}
        >
          Sign Up For Free
        </a>
      </div>
      <div
        className="container-lg"
        style={{
          boxSizing: "border-box",
          color: "rgb(51, 71, 91)",
          width: "100%",
          margin: "0px auto",
          marginRight: "auto",
          marginLeft: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          maxWidth: "1024px",
          zIndex: 1,
          position: "relative",
        }}
      >
        <h2
          className="text-center mt-5"
          style={{
            boxSizing: "border-box",
            marginBottom: "0.5rem",
            lineHeight: 1.2,
            fontSize: "1.75rem",
            fontWeight: 500,
            zIndex: 1,
            position: "relative",
            marginTop: "3rem",
            textAlign: "center",
          }}
        >
          Featured Agents
        </h2>
        <ul
          className="profile__cards profile__cards--featured"
          style={{
            boxSizing: "border-box",
            padding: "0px",
            margin: "3rem auto 0px",
            display: "grid",
            listStyleType: "none",
            paddingLeft: "0px",
            marginTop: "3rem",
            marginBottom: "0px",
            gap: "2rem",
            gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
            maxWidth: "768px",
            //   textAlign: "center",
            zIndex: 1,
            position: "relative",
          }}
        >
          {featuredAgents?.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </ul>
        <div
          className="pt-4"
          style={{
            boxSizing: "border-box",
            color: "rgb(51, 71, 91)",
            zIndex: 1,
            position: "relative",
            paddingTop: "1.5rem",
          }}
        >
          <h2
            className="mt-5 text-center"
            style={{
              boxSizing: "border-box",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
              fontSize: "1.75rem",
              fontWeight: 500,
              zIndex: 1,
              position: "relative",
              marginTop: "3rem",
              textAlign: "center",
            }}
          >
            Our Other Agents
          </h2>
          <ul
            className="profile__cards"
            style={{
              boxSizing: "border-box",
              padding: "0px",
              margin: "3rem auto 0px",
              maxWidth: "1024px",
              display: "grid",
              listStyleType: "none",
              paddingLeft: "0px",
              marginTop: "3rem",
              marginBottom: "0px",
              gap: "2rem",
              gridTemplateColumns: "repeat(4, minmax(0px, 1fr))",
              zIndex: 1,
              position: "relative",
            }}
          >
            {tools?.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Home;
