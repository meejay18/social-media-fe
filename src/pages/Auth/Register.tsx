import React from "react";
import { HiQuestionMarkCircle } from "react-icons/hi";

const Register = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[40vw] h-[90vh] flex flex-col justify-start items-center bg-red-500">
        <div>facebook</div>
        <div className="mt-6 w-[32vw] h-[85vh] rounded-md bg-lime-500 flex flex-col justify-start items-center p-4">
          <div className="font-bold text-3xl">Create a new account</div>
          <div>It's quick and easy.</div>
          <div className="border-t w-[32vw] mt-4"></div>
          <div className="flex gap-3 h-[6vh] mt-3">
            <input
              type="text"
              placeholder="First name"
              className="pl-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Surname"
              className="pl-3 rounded-md"
            />
          </div>
          <div className="flex items-center justify-start w-full mt-2 text-sm gap-1">
            <div>Date of birth</div>
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
          <div className="flex gap-3">
            <div className="flex justify-between items-center p-3">
              Female
              <input type="radio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
