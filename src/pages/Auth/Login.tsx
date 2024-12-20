// import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../API/userAPI";
import { loginUser } from "../../global/authSlice";
import { FaSpinner } from "react-icons/fa6";
import { useState } from "react";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e: any) => {
    e.preventDefault();

    setLoading(true);
    LoginUser({ email, password })
      .then((res) => {
        console.log(res);

        if (res.status === 201) {
          dispatch(loginUser(res.data));
          toast.success(res?.response?.data?.message);
          navigate("/dashboard");
        } else {
          toast.error(res?.response?.data?.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F2F4F7]">
      <Toaster />
      <div className="grid w-[75%] md:w-[75%] lg:w-[65%] h-[65%] md:grid-cols-2 grid-cols-1 ">
        <div className="col-span-1 flex flex-col   justify-center">
          <h1 className="text-[35px] font-bold font-[Arial] text-transparent lg:text-[45px] text-start bg-clip-text bg-gradient-to-r from-[darkblue] via-[#1898c3] to-[#066084] drop-shadow-2xl shadow-blue-300 hover:scale-105 transition-transform duration-1000 ease-in-out  leading-tight mb-2">
            Friends <span className="text-blue-600"> App</span>
          </h1>
          <p className="leading-relaxed font-semibold text-wrap text-[17px] lg:text-[22px]">
            FriendsApp helps you connect and share with the people in your life.
          </p>
        </div>
        <form className="  p-7 mt-10" onSubmit={handleLogin}>
          <div className="flex flex-col bg-white shadow-2xl shadow-slate-200 rounded-md p-4 items-center">
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="border w-[100%] h-[45px] rounded-md shadow-inner p-3 focus:ring-2 focus:ring-[darkblue] outline-none placeholder:text-[20px] mb-5 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="border w-[100%]  h-[45px] rounded-md shadow-inner p-3 focus:ring-2 focus:ring-[darkblue] outline-none placeholder:font-normal placeholder:text-[20px] mb-5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <div className="flex  justify-center items-center w-[100%] text-white rounded-md outline-none font-semibold text-[15px]  mb-7 bg-blue-400 py-3 gap-2">
                  <FaSpinner className="animate-spin" /> <span>Processing</span>
                </div>
              ) : (
                <div className="w-full text-white rounded-md outline-none font-semibold text-[20px]  mb-7 bg-blue-700 py-3">
                  Log In
                </div>
              )}
            </button>
            <div className="w-full h-[2px] bg-slate-300" />
            <Link to="/auth">
              {" "}
              <button className="w-[180px] rounded-md bg-green-700 mt-5 text-white outline-none font-semibold py-3 mb-4">
                Create new account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
