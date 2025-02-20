import React from "react";
import { User } from "lucide-react";

const UserCard = ({ user }) => {
  return (
    <div className="flex justify-center items-center py-10 bg-gray-900">
      <div className="max-w-sm w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 text-center">
        {/* User Icon */}
        <div className="flex justify-center">
          <User className="w-16 h-16 text-gray-400" />
        </div>

        {/* User Details */}
        <div className="mt-4">
          <h5 className="text-2xl font-semibold text-white">{user.username}</h5>
          <p className="text-sm text-gray-400 mt-1">{user.email}</p>
          {/* <p className="text-sm text-gray-500 mt-1">📞 {user.phone}</p> */}
          {/* <p className="text-sm text-blue-400 mt-2 font-medium">
            Role: {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
