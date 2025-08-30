import React, { useState } from "react";
import { Link } from "react-router-dom";
import InnerPageBanner from "../components/InnerPageBanner";
import bannerImage from "../assets/missionbanner.jpg";

export default function Annual() {
  // State for active year
  const [activeYear, setActiveYear] = useState("2025");

  // Sample data for different years
  const reports2025 = [
    { id: 1, description: "Annual Report 2024-25", file: "/uploads/SEED_ANNUAL_REPORT.pdf" },
    { id: 2, description: "Financial Summary 2025", file: "/uploads/demo.pdf" },
  ];
  

  const reports2024 = [
    { id: 1, description: "Annual Report 2023-24", file: "/pdfs/demo.pdf" },
    { id: 2, description: "Financial Summary 2024", file: "/pdfs/demo.pdf" },
  ];

  // Pick data based on active year
  const reports = activeYear === "2025" ? reports2025 : reports2024;

  return (
    <>
      <style>
        {`
          .widget-area {
            padding-top: 40px;
            padding-bottom: 0px;
          }
          .tabs {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
          }
          .tab-btn {
            padding: 10px 28px;
            border: 2px solid #4fad0a;
            border-radius: 30px; /* pill shape */
            font-weight: 600;
            font-size: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            background-color: transparent;
            color: #4fad0a;
          }
          .tab-btn.active {
            background-color: #4fad0a;
            color: #fff;
            box-shadow: 0px 3px 6px rgba(0,0,0,0.15);
          }
          .tab-btn:hover:not(.active) {
            background-color: #eaffea;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          }
          th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: center;
          }
          th {
            background-color: #aa0505;
            color: #fff;
            font-weight: 600;
          }
          td {
            background-color: #fff;
          }
          .pdf-icon {
            width: 40px;
            height: 40px;
            cursor: pointer;
            transition: transform 0.2s ease;
          }
          .pdf-icon:hover {
            transform: scale(1.1);
          }
        `}
      </style>

      <InnerPageBanner
        title="Annual Reports"
        background={bannerImage}
        breadcrumb="Annual Reports"
      />

      <div className="story-area-1 overflow-hidden space">
        <div className="container">
          {/* Tabs */}
          <div className="tabs">
            <button
              className={`tab-btn ${activeYear === "2025" ? "active" : ""}`}
              onClick={() => setActiveYear("2025")}
            >
              2025
            </button>
            <button
              className={`tab-btn ${activeYear === "2024" ? "active" : ""}`}
              onClick={() => setActiveYear("2024")}
            >
              2024
            </button>
          </div>

          {/* Table */}
          <table>
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Description</th>
                <th>PDF</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={report.id}>
                  <td>{index + 1}</td>
                  <td>{report.description}</td>
                  <td>
                  <Link
  to={`/pdf-viewer?file=${encodeURIComponent(report.file)}`}
  
>
  <img
    src="/uploads/document.png"
    alt="PDF Document"
    className="pdf-icon"
/>
</Link>

                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
