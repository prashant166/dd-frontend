"use client";
import { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function JoinDialog({ onClose, onLoginClick }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative bg-white rounded-xl p-6 w-full max-w-md">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-black"
        aria-label="Close"
      >
        &times;
      </button>

      <div className="flex justify-center mb-6">
        <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">Join to unlock the best of DailyDilli</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded-lg px-4 py-2 mb-4 outline-none focus:ring-2 focus:ring-orange-500"
      />

      <div className="relative mb-6">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full border rounded-lg px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute top-2.5 right-3 text-gray-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition">
        Join
      </button>

      <div className="mt-6 text-center text-sm">
        Already a member?{" "}
        <button onClick={onLoginClick} className="font-semibold underline hover:text-black">
          Log in
        </button>{" "}
        using your DailyDilli account.
      </div>

      <p className="mt-6 text-xs text-gray-500 text-center leading-5">
        By proceeding, you agree to our{" "}
        <a href="#" className="underline">Terms of Use</a> and{" "}
        <a href="#" className="underline">Privacy Policy</a>.
      </p>
    </div>
  );
}
