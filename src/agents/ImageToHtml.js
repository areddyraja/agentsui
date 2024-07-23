import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ImageToHtml = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [htmlResponse, setHtmlResponse] = useState("");
  const { state } = useLocation();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setMessage("Please select an image to upload.");
      return;
    }

    setUploading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await fetch("http://192.168.0.158:8000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.text(); // Get response as text (HTML)
        setHtmlResponse(result);
        setMessage("Image uploaded successfully!");
        console.log("response:", response);
        // console.log('Upload result:', result, response);
      } else {
        setMessage("Failed to upload image.");
      }
    } catch (error) {
      setMessage("Error uploading image.");
      console.error("Error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>{state?.name}</h1>
        <p style={styles.description}>{state?.description} </p>
        <div style={styles.content}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={styles.fileInput}
            />
            {preview && (
              <div style={styles.previewContainer}>
                <img src={preview} alt="Preview" style={styles.previewImage} />
              </div>
            )}
            <button
              type="submit"
              style={styles.uploadButton}
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Upload Image"}
            </button>
          </form>
          {message && <p style={styles.message}>{message}</p>}
        </div>
      </div>
      {htmlResponse && (
        <div style={styles.htmlContainer}>
          <h2>Preview</h2>
          <div
            dangerouslySetInnerHTML={{ __html: htmlResponse }}
            style={styles.htmlPreview}
          ></div>
        </div>
      )}
      {htmlResponse && (
        <div
          style={{
            textAlign: "left",
            backgroundColor: "#ccc",
            borderRadius: 10,
            paddingLeft: 20,
            marginTop: 50,
          }}
        >
          <h4>Code</h4>
          <pre>
            <code className="html">{htmlResponse}</code>
          </pre>
        </div>
      )}
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    // maxWidth: "400px",
  },
  htmlContainer: {
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    borderRadius: 10,
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
  fileInput: {
    marginBottom: "10px",
  },
  previewContainer: {
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
  },
  previewImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  uploadButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  uploadButtonHover: {
    backgroundColor: "#45a049",
  },
  message: {
    marginTop: "10px",
    fontSize: "14px",
    color: "red",
  },
};

export default ImageToHtml;
