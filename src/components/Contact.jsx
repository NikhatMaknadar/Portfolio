import React, { useState } from "react";
import { motion } from "framer-motion";
//alert and loading imports
import PulseLoader from "react-spinners/PulseLoader";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col relative mt-10 text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-x-hidden"
    >
      <h5 className="absolute md:top-20  top-12 font-bold uppercase tracking-[20px] text-[#f7ff8a] z-10">
        Contact
      </h5>

      <div className="relative flex flex-col w-full justify-center items-center">
        {/* <br></br> */}
        {/* <h4 className="text-lg mb-2 text-teal-50">
          Let's craft excellence, together!
        </h4> */}
        {/* <p className="text-base max-w-lg text-center text-teal-50">
          If you're seeking to build exceptional projects or explore new
          horizons. Let's connect and make your vision a reality.
        </p> */}
        <div className="flex justify-center flex-col items-center mt-5 w-fit">
          <form className="flex flex-col space-y-2 mx-auto">
            <div className="flex space-x-2  ">
              <input
                placeholder="Name"
                className="p-2 rounded-lg text-black outline-none text-base bg-[#E8F0FE] w-1/2"
                type="text"
              />

              <input
                placeholder="Email"
                className="p-2 rounded-lg text-black outline-none text-base bg-[#E8F0FE] w-1/2"
                type="email"
              />
            </div>
            {/* {empty && !name && <span className=" text-sm text-white font-semibold tracking-[2px] bg-red-400 bg-opacity-50 px-5 rounded-[4px] text-center">Please enter name !</span> }
            {empty && !email && <span className=" text-sm text-white font-semibold tracking-[2px] bg-red-400 bg-opacity-50 px-5 rounded-[4px] text-center">Please enter email !</span>} */}
            <input
              placeholder="Subject"
              className="p-2 rounded-lg text-black outline-none text-base bg-[#E8F0FE]"
              type="text"
            />
            {/* {empty && !subject && <span className=" text-sm text-white bg-red-400 font-semibold tracking-[2px] bg-opacity-50 px-5 rounded-[4px] text-center">Please fill subject !</span>} */}
            <textarea
              placeholder="Message"
              className="p-2 rounded-lg text-black outline-none text-base bg-[#E8F0FE]"
              rows={5}
            ></textarea>
              <button
                type="button"
                className="bg-[#f7ff8a] hover:bg-[#d1d691] py-2 px-10 rounded-md text-black font-bold text-lg"
              >
                Submit
              </button>

          </form>
          <br></br>
          <h4>
            {" "}
            <span className=" text-yellow-300">E-mail : </span>{" "}
            nikhatmakandar30@gmail.com
          </h4>
          <h4>
            {" "}
            <span className=" text-yellow-300">Mobile-num : </span> 8431852172
          </h4>
          <br></br>
        </div>
      </div>
    </motion.div>
  );
};
export default Contact;
