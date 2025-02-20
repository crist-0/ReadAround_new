import { useState, useEffect } from "react";

const EditProfile = () => {
  const [userData, setUserData] = useState({
    id: "",
    username: "",
    email: "",
    phone: "",
    saved_books: [],
    role: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("user_id");
        const response = await fetch(`http://127.0.0.1:7000/api/user/details?id=${userId}`);
        const data = await response.json();
        if (response.ok) {
          setUserData(data.user);
        } else {
          setError(data.message || "Failed to fetch user data");
        }
      } catch (err) {
        setError("An error occurred while fetching user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:7000/api/user/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Profile updated successfully");
      } else {
        alert(result.message || "Failed to update profile");
      }
    } catch (err) {
      alert("An error occurred while updating profile");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    (
<div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 ">
        <div className="max-w-md mx-auto bg-gray-800 shadow-lg p-6 rounded-lg mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-300">Username</label>
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
    )
)
};

export default EditProfile;
