"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = () => {
    console.log({ email, password, firstName, lastName, birthday, country, gender, termsAccepted });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-8 md:px-12">
      {/* Centered Login Form */}
      <div className="bg-white shadow-lg p-6 sm:p-8 md:p-10 rounded-lg w-full max-w-lg">
        {/* Logo */}
        <div className="flex justify-center mb-4">
        <Image src="/logo.png" alt="Nike Logo" width={50} height={50} />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">BECOME A NIKE MEMBERS</h1>
        <p className="text-sm sm:text-base text-gray-600 text-center mb-6">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
        </p>

        {/* Form Inputs */}
        <div className="space-y-4">
          {/* Email Input */}
          <input
            type="email"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-black"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <input
            type="password"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-black"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* First Name */}
          <input
            type="text"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-black"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          {/* Last Name */}
          <input
            type="text"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-black"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          {/* Birthday Input */}
          <input
            type="date"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-black"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />

          {/* Select Country */}
          <select
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-2 focus:ring-black"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select a Country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>

          {/* Gender Selection */}
          <div className="mt-2">
            <span className="text-sm text-gray-600">Select Gender:</span>
            <div className="flex space-x-4 mt-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={() => setGender("Male")}
                  className="border-gray-500"
                />
                <span className="ml-2 text-sm">Male</span>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={() => setGender("Female")}
                  className="border-gray-500"
                />
                <span className="ml-2 text-sm">Female</span>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="border-gray-500"
            />
            <span>
              I agree to the <Link href="#" className="text-black hover:underline">Terms and Policy</Link>
            </span>
          </div>

          {/* Join Us Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Join Us
          </button>

          {/* Already have an account? */}
          <div className="text-center mt-4 text-sm">
            <span className="text-gray-600">Already have an account? </span>
            <Link href="/signin" className="text-black font-medium hover:underline">Sign-In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}