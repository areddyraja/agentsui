import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BusinessResearch = () => {
  const { state } = useLocation();
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) {
      setMessage("Please enter some text.");
      return;
    }

    setSubmitting(true);
    setMessage("");

    const formData = new FormData();
    formData.append("domain", text);

    try {
      const response = await fetch("http://localhost:8000/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setDescription(result); // Assume the API returns { description: "..." }
        setMessage("Text submitted successfully!");
      } else {
        setMessage("Failed to submit text.");
      }
    } catch (error) {
      setMessage("Error submitting text.");
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>{state?.name}</h1>
        <p style={styles.description}>{state?.description}</p>
        <div style={styles.content}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <textarea
              value={text}
              onChange={handleTextChange}
              style={styles.textarea}
              placeholder="Enter your text here"
            />
            <button
              type="submit"
              style={styles.submitButton}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Text"}
            </button>
          </form>
          {message && <p style={styles.message}>{message}</p>}
        </div>
      </div>
      {description && (
        <div style={styles.descriptionContainer}>
          <h2>Description</h2>
          <p style={styles.descriptionText}>{description[0]}</p>
          <p style={styles.descriptionText}>{description[1]}</p>
          <p style={styles.descriptionText}>{description[2]}</p>
        </div>
      )}
    </>
  );
};

const styles = {
  container: {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // margin: "20px",
    // padding: "20px",
    // border: "1px solid #ccc",
    // borderRadius: "10px",
    // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    // maxWidth: "600px",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px 200px 20px 200px",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      // maxWidth: "400px",

  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    marginBottom: "20px",
    textAlign: "center",
  },
  content: {
    width: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    width: "100%",
    height: "100px",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    resize: "none",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  message: {
    marginTop: "10px",
    fontSize: "14px",
    color: "red",
  },
  descriptionContainer: {
    marginTop: "20px",
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  descriptionText: {
    fontSize: "16px",
  },
};

export default BusinessResearch;
