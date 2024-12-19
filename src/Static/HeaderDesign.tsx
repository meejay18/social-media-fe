import React, { ReactNode } from "react";
import { BiSearch, BiSolidMessageRoundedDetail } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";

interface iHeader {
  Homeicon: ReactNode;
  AddFriendicon: ReactNode;
  Reelsicon: ReactNode;
  Notificationicon: ReactNode;
  Account: string;
}

const HeaderDesign: React.FC<iHeader> = ({
  Homeicon,
  AddFriendicon,
  Reelsicon,
  Notificationicon,
  Account,
}) => {
  return (
    <div>
      <div className="w-full h-[80px] flex items-center justify-center border fixed z-10">
        <div className="w-[95%] h-[100%]  flex items-center justify-center  ">
          <div className="w-[40%] h-full flex items-center justify-start gap-4">
            <div>Logo</div>
            <div className="w-[190px] h-[40px] rounded-2xl bg-slate-200 flex p-3 gap-2 ">
              <div>
                <BiSearch size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search Friendbook"
                className="bg-transparent outline-none w-[143px]"
              />
            </div>
          </div>
          <div className="w-[50%] h-[100%] flex items-center justify-between text-gray-500 ">
            <div className="relative group">
              <button className="p-4 text-gray-400 rounded-full">
                {Homeicon && <div>{Homeicon}</div>}
              </button>
              <div className="absolute left-8 transform -translate-x-1/2 top-full mb-2 w-max px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Home
              </div>
            </div>
            <div className="relative group">
              <Link to="/Navigate/add">
                <button className="p-4 text-gray-400 rounded-md">
                  {AddFriendicon && <div>{AddFriendicon}</div>}
                </button>
              </Link>
              <div className="absolute left-8 transform -translate-x-1/2 top-full mb-2 w-max px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Add friend
              </div>
            </div>
            <div className="relative group">
              <Link to="/Navigate/reels">
                <button className="p-4 text-gray-400 rounded-full">
                  {Reelsicon && <div>{Reelsicon}</div>}
                </button>
              </Link>
              <div className="absolute left-8 transform -translate-x-1/2 top-full mb-2 w-max px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Reels
              </div>
            </div>
            <div className="relative group">
              <Link to="/Navigate/notification">
                <button className="p-4 text-gray-400 rounded-full">
                  {Notificationicon && (
                    <div className="relative">
                      {Notificationicon}{" "}
                      <div className="w-[8px] h-[8px] rounded-md bg-blue-400 top-0 right-0 absolute"></div>
                    </div>
                  )}
                </button>
              </Link>
              <div className="absolute left-8 transform -translate-x-1/2 top-full mb-2 w-max px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Notification
              </div>
            </div>
          </div>
          <div className="w-[40%] h-full flex items-center justify-end gap-5">
            <div className="flex rounded-full w-[40px] h-[40px] bg-gray-200 justify-center items-center">
              {" "}
              <BiSolidMessageRoundedDetail size={25} />
            </div>

            <div className="flex rounded-full w-[40px] h-[40px] bg-gray-200 justify-center items-center">
              <CiSettings size={25} />
            </div>
            <div className="relative group">
              <button className="p-4 text-gray-400 bg-slate-300 rounded-full">
                {Account && (
                  <div className="relative">
                    {Account}{" "}
                    <div className="w-[8px] h-[8px] rounded-md bg-blue-400 top-0 right-0 absolute"></div>
                  </div>
                )}
              </button>
              <div className="absolute left-5 transform -translate-x-1/2 top-full mb-2 w-max px-3 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Account
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesign;
