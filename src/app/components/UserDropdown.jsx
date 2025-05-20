"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/slices/userSlice"; // adjust path
import { toast } from "sonner";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);

  const handleLogout = () => {
    dispatch(logoutUser());
    toast("👋 Logged out successfully.");
  };

  if (!user) return null;

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-orange-700 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-500 transition"
      >
        Hi, {user.first_name}
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-orange-200 rounded-lg shadow-lg">
          <ul className="py-1 text-sm text-gray-700">
            <li>
              <a
                href="/profile"
                className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition"
              >
                My Profile
              </a>
            </li>
            <li>
              <a
                href="/settings"
                className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition"
              >
                Settings
              </a>
            </li>
            <li><hr className="my-1 border-orange-100" /></li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 hover:text-red-700 transition"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
