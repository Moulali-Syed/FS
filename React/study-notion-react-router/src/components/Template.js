import React from 'react';
import frameImage from '../assets/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { FcGoogle } from 'react-icons/fc';

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <>
      <div className="flex justify-between w-ll/12 max-w-[1160px] py-12 mx-auto gap-x-[10rem] gap-y-0">
        <div className="w-11/12 max-w-[450px] mx-0">
          <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] mb-3">
            {title}
          </h1>
          <p className="text-[1.125rem] leading-[1.625rem]">
            <span className="text-richblack-100">{desc1}</span>
            <br />
            <span className="text-blue-100">{desc2}</span>
          </p>

          {formType === 'signup' ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}

          <div className="flex w-full items-center my-4 gap-x-2">
            <div className="w-full h-[1px] bg-richblack-700"></div>
            <div className="text-richblack-700 font-medium leading[1.735rem]">
              OR
            </div>
            <div className="w-full h-[1px] bg-richblack-700"></div>
          </div>

          <button
            className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
          border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6"
          >
            <FcGoogle></FcGoogle>
            <p>Sign Up with Google</p>
          </button>
        </div>
        <div className="relative w-11/12 max-w-[450px] ">
          <img
            src={frameImage}
            alt="frame"
            height={504}
            width={558}
            loading="lazy"
          />
          <img
            src={image}
            alt="Students"
            height={490}
            width={558}
            loading="lazy"
            className="absolute -top-4 -left-4"
          />
        </div>
      </div>
    </>
  );
};

export default Template;
