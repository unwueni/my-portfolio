import React from "react";
import profilePic from "../assets/profile.jpg"; // Place your image in src/assets/

export default function Profile() {
  return (
    <div className="flex items-center space-x-6 p-6 bg-white rounded shadow mb-8">
      <img
        src={profilePic}
        alt="Deborah"
        className="w-24 h-24 rounded-full border-4 border-blue-300 shadow"
      />
      <div>
        <h1 className="text-3xl font-bold">Deborah Ekunke</h1>
        <p className="text-gray-600 mt-2">
          Full-Stack Web Developer | Content Writer | I.T Support | V.A <br />
          Passionate about building beautiful, accessible web apps.
        </p>
        <p className="text-gray-500 mt-2 text-sm">ekunkedeborah@gmail.com</p>
      </div>
    </div>
  );
}