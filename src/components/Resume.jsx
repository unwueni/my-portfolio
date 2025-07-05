import React from "react";

export default function Resume() {
  return (
    <div className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-4">Resume</h2>
      <p>You can view or download my resume below:</p>
      <a
        href="/public/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
      >
        Download Resume (PDF)
      </a>
    </div>
  );
}