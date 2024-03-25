import React from "react";

const LeftHero = () => {
  return (
    <>
      <div className="w-[50%] bg-[#F0F0EC] h-96 px-10 py-5 mx-10 border-2 border-black rounded-xl flex flex-col gap-10 relative">
        <h1 className="text-4xl  ">
          Create ATS - <br />
          Optimized Resume in <br />
          Minutes
        </h1>
        <p className="text-sm max-w-md tracking-wide">
          Our ATS-optimized resume builder ensures that your resume gets noticed
          by applicant tracking systems. Create professional resumes that meet
          the specific requirements of ATS, increasing your chances of getting
          shortlisted for interviews. Don't let your resume get lost in the
          digital shuffleâget started now and unlock new career opportunities.
          Your dream job awaits!
        </p>
      </div>
      {/*<div className="absolute border-black bg-white border-t-2 rounded-lg border-r-2 w-80 h-14 bottom-[10px] left-10">
        <div className="bg-[#FFBA09] rounded-lg h-14 text-center items-center flex justify-center">
          Build Your Optimized resume
        </div>
      </div>*/}
    </>
  );
};

export default LeftHero;
