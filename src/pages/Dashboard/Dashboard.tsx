import { MdPhoto } from "react-icons/md";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      {/* <div className="w-full h-[14vh] fixed"></div> */}
      <main className="grid grid-cols-8 gap-3  relative  ">
        <main className=" col-span-2 rounded-md border bg-slate-100 sticky top-0 h-screen overflow-hidden ">
          <div className="">
            <div className="border rounded-md  bg-white m-4 p-4 flex gap-2 mt-20">
              <div>
                <p className="font-semibold"> checkout Friends {"<"} </p>
                <p className="line-clamp-2 text-[12px] mb-4 ">
                  <main className="mt-10 h-[150px] overflow-x-auto"></main>
                </p>
              </div>
            </div>
          </div>
        </main>
        <main className="col-span-4 rounded-md border min-h-[400px] bg-slate-50 ">
          <div className="mt-20">
            <div className="w-full m-4 p-4 flex justify-between items-center">
              <div className="w-10 h-10 rounded-full bg-slate-200" />
              <div className="w-[300px] h-[40px] rounded-3xl text-white bg-slate-500">
                <input
                  type="text"
                  className="bg-transparent text-white outline-none w-full h-full p-4"
                  placeholder="What'on your mind"
                />
              </div>
              <div className="w-[100px] h-[30px]">
                <Link to="/create">
                  <MdPhoto size={30} />
                </Link>
              </div>
            </div>
            <div className="border rounded-md  bg-white m-4 p-4 flex gap-2 ">
              <div className="w-10 h-10 rounded-full bg-slate-200"></div>{" "}
              <div>
                <p className="text-[12px] font-semibold">name</p>
                <p className="text-[8px] font-semibold">Time</p>
              </div>
            </div>
          </div>
        </main>
        <main className="col-span-2 rounded-md border min-h-[400px] bg-slate-100 sticky top-0 h-screen   overflow-hidden  "></main>
      </main>
    </div>
  );
};

export default Dashboard;
