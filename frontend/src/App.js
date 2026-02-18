import React from "react";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Project Management Tool</h1>
      <ProjectForm />
      <ProjectList />
    </div>
  );
}

export default App;
