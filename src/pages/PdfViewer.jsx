import React from "react";
import { useLocation } from "react-router-dom";

export default function PdfViewer() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const file = queryParams.get("file"); // we will pass ?file=...

  return (
    <div className="story-area-1 overflow-hidden space">
    <div className="container">
    <div style={{ height: "100vh", width: "100%" }}>
      {file ? (
        <iframe
          src={file}
          title="PDF Viewer"
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      ) : (
        <p style={{ textAlign: "center", marginTop: "50px" }}>
          No PDF file provided.
        </p>
      )}
    </div>
    </div>
    </div>
  );
}
