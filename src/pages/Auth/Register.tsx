import React from "react";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="w-full h-[750px] flex justify-center items-start bg-blue-50">
        <div className="w-[40vw] h-[90vh] flex flex-col justify-start items-center">
          <div className="text-6xl font-extrabold font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-2xl shadow-blue-300 hover:scale-110 transition-transform duration-500 ease-in-out animate-text">
            Friends App
          </div>

          <div className="mt-6 w-[35vw] h-[99vh] rounded-md bg-white shadow-2xl flex flex-col justify-start items-center p-4">
            <div className="font-bold text-3xl">Create a new account</div>
            <div className="text-gray-500">It's quick and easy.</div>
            <div className="border-t w-[32vw] mt-4"></div>
            <div className="flex gap-3 h-[6vh] mt-3">
              <input
                type="text"
                placeholder="First name"
                className="pl-3 rounded-md border"
              />
              <input
                type="text"
                placeholder="Surname"
                className="pl-3 rounded-md border"
              />
            </div>
            <div className="text-gray-500 flex items-center justify-start w-full mt-2 text-sm gap-1">
              <div className="text-xs text-gray-500">Date of birth</div>
              <HiQuestionMarkCircle />
            </div>
            <div className="flex gap-3 mt-2">
              <select className="border border-red-500 px-10 py-2 rounded-md">
                <option value="">19</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="16">17</option>
                <option value="17">18</option>
                <option value="18">19</option>
                <option value="19">20</option>
                <option value="20">21</option>
                <option value="21">22</option>
                <option value="22">23</option>
                <option value="23">24</option>
                <option value="24">25</option>
                <option value="25">26</option>
                <option value="26">27</option>
                <option value="27">28</option>
                <option value="28">29</option>
                <option value="29">30</option>
                <option value="31">31</option>
              </select>
              <select className="border border-red-500 px-10 py-2 rounded-md">
                <option value="">Dec</option>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <select className="border border-red-500 px-10 py-2 rounded-md">
                <option value="">2024</option>
                <option value="1">2023</option>
                <option value="2">2022</option>
                <option value="3">2021</option>
                <option value="4">2020</option>
                <option value="5">2019</option>
                <option value="6">2018</option>
                <option value="7">2017</option>
                <option value="8">2016</option>
                <option value="9">2015</option>
                <option value="10">2014</option>
                <option value="11">2013</option>
                <option value="12">2012</option>
                <option value="13">2011</option>
                <option value="14">2010</option>
                <option value="15">2009</option>
                <option value="16">2008</option>
                <option value="16">2007</option>
                <option value="17">2006</option>
                <option value="18">2005</option>
                <option value="19">2004</option>
                <option value="20">2003</option>
                <option value="21">2002</option>
                <option value="22">2001</option>
                <option value="23">2000</option>
              </select>
            </div>
            <div className="flex gap-2 mt-2 w-full items-center justify-start">
              Gender
              <HiQuestionMarkCircle />
            </div>
            <div className="flex gap-3 mt-2">
              <div className="flex justify-between items-center border w-[10vw] rounded-md p-3 h-[6vh]">
                <div>Female</div>
                <input type="radio" />
              </div>
              <div className="flex justify-between items-center border w-[10vw] rounded-md p-3 h-[6vh]">
                <div>Male</div>
                <input type="radio" />
              </div>
              <div className="flex justify-between items-center border w-[10vw] rounded-md p-3 h-[6vh]">
                <div>Custom</div>
                <input type="radio" />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Mobile number or email address"
                className="w-[32vw] h-[6vh] mt-3 border rounded-md pl-3"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="New password"
                className="w-[32vw] h-[6vh] mt-3 border rounded-md pl-3"
              />
            </div>
            <div className="text-xs mt-5 text-gray-500">
              People who use our service may have uploaded your contact
              information to Facebook.{" "}
              <span className="text-blue-500 cursor-pointer hover:underline">
                Learn more.
              </span>
            </div>
            <div className="text-xs mt-5 text-gray-500">
              By clicking Sign Up, you agree to our Terms, Privacy Policy and
              Cookies Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </div>
            <div className="flex justify-center items-center">
              <button className="font-bold text-xl bg-[#1ea01e] px-14 py-1 rounded-md text-white mt-5">
                Sign Up
              </button>
            </div>
            <div className="flex justify-center items-center">
              <div className="mt-3 text-blue-700 cursor-pointer">
                {" "}
                <Link to={"/auth/login"}>Already have an account?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-50 py-4 border-t text-sm text-gray-600">
        {/* Language Links */}
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-wrap justify-start text-blue-800 space-x-3 mb-4 text-xs w-[65vw]">
            <a href="#" className="hover:underline">
              English (UK)
            </a>
            <a href="#" className="hover:underline">
              Hausa
            </a>
            <a href="#" className="hover:underline">
              Français (France)
            </a>
            <a href="#" className="hover:underline">
              Português (Brasil)
            </a>
            <a href="#" className="hover:underline">
              Español
            </a>
            <a href="#" className="hover:underline">
              العربية
            </a>
            <a href="#" className="hover:underline">
              Bahasa Indonesia
            </a>
            <a href="#" className="hover:underline">
              Deutsch
            </a>
            <a href="#" className="hover:underline">
              日本語
            </a>
            <a href="#" className="hover:underline">
              Italiano
            </a>
            <a href="#" className="hover:underline">
              हिन्दी
            </a>
            <button className="bg-gray-100 border-gray-300 border px-2 py-1 rounded-md">
              +
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="border-t w-[65vw] border"></div>
        </div>
        {/* Navigation Links */}
        <div className="flex w-full h-[15vh] justify-center items-center">
          <div className="flex flex-wrap w-[65vw] text-blue-800 text-xs h-[10vh] justify-start items-center space-x-4 mb-4">
            {[
              "Sign Up",
              "Log in",
              "Messenger",
              "Facebook Lite",
              "Video",
              "Places",
              "Games",
              "Marketplace",
              "Meta Pay",
              "Meta Store",
              "Meta Quest",
              "Instagram",
              "Threads",
              "Fundraisers",
              "Services",
              "Voting Information Centre",
              "Privacy Policy",
              "Privacy Centre",
              "Groups",
              "About",
              "Create ad",
              "Create Page",
              "Developers",
              "Careers",
              "Cookies",
              "AdChoices",
              "Terms",
              "Help",
              "Contact uploading and non-users",
            ].map((item) => (
              <a key={item} href="#" className="hover:underline">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Meta Copyright */}
        <div className="flex justify-center items-center w-full">
          <div className=" text-xs text-center text-gray-500 w-[65vw] flex justify-start">
            Meta © 2024
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;
