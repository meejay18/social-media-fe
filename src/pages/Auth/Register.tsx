import React, { useState } from "react";
import { MdPerson } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [avatar, setAvatar] = useState<string>("");
  const [myImage, setMyImage] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Hook to navigate between pages

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    navigate("/auth/login");
  };

  const handleImage = (e: any) => {
    let file = e.target.files[0];
    setAvatar(file);
    setMyImage(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex mb-4 bg-white">
        <div className="flex items-center border justify-center h-[55px] w-[225px] text-[20px] hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-pointer ">
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
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Sign Up
        </h2>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-700"
        >
          Sign Up
        </button>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/auth/login")}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            <div>Log In</div>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
