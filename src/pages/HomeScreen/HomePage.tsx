import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex-col flex justify-center items-center">
      <div className="mb-3">
        <p className="text-[40px] font-semibold">Welcome to friends App</p>
      </div>
      <div className="w-[400px] h-[400px] rounded-[20px] flex justify-center items-center bg-[#0080FF]">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div>
        <button className="py-2 px-2 bg-[#0080FF] animate-pulse text-[white] mt-2 rounded-md">
          <Link to={"/login"}>Log In</Link>
        </button>
      </div>
      <div className="w-[300px] justify-center flex mt-2 ">
        Dont have an account?{" "}
        <Link to={"/register"}>
          <p className="underline"> Sign Up</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
