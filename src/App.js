import React from "react";
import Form1 from "./Form1";
import Editor from "./TextEditor/textEditor";
import Switch from "./Switch/switch";
import PhotoUploadForm from "./PhotoUpload/photoUpload";

function App() {
  const sectionStyle = {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  };

  const headerStyle = {
    fontSize: "18px",
    color: "#333",
    paddingBottom: "10px",
    borderBottom: "1px solid #ddd"
  };

  return (
    <>
      {/* <div style={sectionStyle}>
        <div style={headerStyle}>Задание 1: Компонент Form1</div>
        <Form1 />
      </div>

      <div style={sectionStyle}>
        <div style={headerStyle}>Задание 2: Компонент Editor</div>
        <Editor />
      </div>

      <div style={sectionStyle}>
        <div style={headerStyle}>Задание 3: Компонент Switch</div>
        <Switch />
      </div> */}

      <div style={sectionStyle}>
        <div style={headerStyle}>Задание 5: Компонент Foto</div>
        <PhotoUploadForm />
      </div>
    </>
  );
}

export default App;
