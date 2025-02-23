import { useState } from "react";

export default function UserProfileForm() {
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const handleFileChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Profile</h2>

      {/* Profile & Cover Image Upload */}
      <div className="flex items-center gap-4">
        {/* Profile Image */}
        <div className="relative w-24 h-24">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile Preview"
              className="w-full h-full object-cover rounded-full border-2 border-indigo-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center rounded-full bg-gray-200 text-gray-500">
              No Image
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => handleFileChange(e, setProfileImage)}
          />
        </div>

        {/* Cover Image */}
        <div className="relative w-48 h-24">
          {coverImage ? (
            <img
              src={coverImage}
              alt="Cover Preview"
              className="w-full h-full object-cover rounded-lg border-2 border-gray-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 rounded-lg">
              No Cover
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => handleFileChange(e, setCoverImage)}
          />
        </div>
      </div>

      {/* Form Fields */}
      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Write something about yourself..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg shadow-md hover:bg-indigo-500 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}
