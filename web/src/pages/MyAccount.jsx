import React from 'react';
import { useState } from 'react';

function MyAccount() {
  const [isEditing, setIsEditing] = useState(false);

  function switchEditing() {
    setIsEditing(!isEditing);
  };
  
  return (
    <div className="flex flex-col items-center p-6 bg-indigo-950 min-h-screen">
      <h2 className="text-3xl font-bold text-white mb-8">My Account</h2>
      <div className="bg-white shadow-lg rounded-lg w-full max-w-xl p-6 space-y-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrbJgoqVZrAgEEIcnIX3LVq1yolhkvynHSSQ&s" 
            alt="Profile"
            className="w-20 h-20 rounded-full border border-gray-300"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Ilyass Lhafi</h3>
            <p className="text-gray-500">ID: 149734</p>
            <p className="text-blue-500 underline">
              <a href="mailto:I.Lhafi@aui.ma" rel="noopener">I.Lhafi@aui.ma</a></p>
          </div>
          <button
            onClick={switchEditing}
            className="ml-auto text-blue-500 hover:underline focus:outline-none"
          >
            {isEditing ? "Save" : "Edit Profile"}
          </button>
        </div>

        {/* Personal Information */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-700">Personal Information</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">First Name</label>
              <input
                type="text"
                value="Ilyass"
                className={`border rounded-md w-full p-2 ${
                  isEditing ? "bg-white" : "bg-gray-100"
                }`}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-gray-600">Last Name</label>
              <input
                type="text"
                value="Lhafi"
                className={`border rounded-md w-full p-2 ${
                  isEditing ? "bg-white" : "bg-gray-100"
                }`}
                disabled={!isEditing}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600">Part-time Status</label>
              <select
                className={`border rounded-md w-full p-2 ${
                  isEditing ? "bg-white" : "bg-gray-100"
                }`}
                disabled={!isEditing}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <div className="col-span-2">
                <label className="block text-gray-600">Job</label>
                <select className={`border rounded-md w-full p-2 ${isEditing ? "bg-white" : "bg-gray-100"}`} disabled={!isEditing}>
                <option>Mentor</option>
                <option>Peer Tutor</option>
                <option>Residential Assistant</option>
                <option>Software Developer</option>
                <option>Event Organizer</option>
                <option>Graphic Designer</option>
                <option>Administrator</option>
                <option>Event Organizer</option>
                <option>Writing Center Tutor</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Editing */}
        <div className="space-y-4">
          <div className="flex space-x-4">
            <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-800">
              Change Profile Picture
            </button>
            <button className="flex-1 bg-yellow-800 text-white py-2 rounded-lg hover:bg-yellow-950">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
