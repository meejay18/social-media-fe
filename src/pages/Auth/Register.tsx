import React, { useState } from "react";
import { MdPerson } from "react-icons/md";

const SignUp = () => {
  const [avatar, setAvatar] = useState<string>("");
  const [myImage, setMyImage] = useState<string>("");

  const handleImage = (e: any) => {
    let file = e.target.files[0];
    setAvatar(file);
    setMyImage(URL.createObjectURL(file));
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center flex-col">
      <div className="flex mb-10 bg-white">
        <div className="flex items-center border justify-center h-[55px] w-[225px] text-[20px] hover:bg-black hover:text-white transition-all duration-300 cursor-pointer ">
          <div className="h-full border-r flex justify-center items-center">
            <MdPerson className="mr-5" />
          </div>
          <label
            htmlFor="avatar"
            className="uppercase font-semibold ml-5 text-[14px]"
          >
            Upload Avatar
          </label>
          <input
            id="avatar"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImage}
          />
        </div>
        {myImage && (
          <div className="h-[55px] w-[55px] border-y border-r">
            <img src={myImage} className="h-full object-cover" />
          </div>
        )}
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
