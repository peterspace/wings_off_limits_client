import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gameData } from "../constant";
import Card from "../components/Card";

const HomeDesktop = () => {
  const navigate = useNavigate();

  const redirectLink = import.meta.env.VITE_APP_STORE_URL;

  async function redirectHome() {
    navigate("/");
  }

  async function redirectToAppStore() {
    window.location.href = redirectLink;
  }

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#1e1e1e,_#040303)] min-h-[1024px] h-screen overflow-hidden flex flex-col items-center justify-center text-left text-13xl text-gray-100 font-poppins">
      <div className="self-stretch flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-dark-layer-3 overflow-hidden flex flex-row items-start justify-start">
        <div className="self-stretch w-[150px] md:w-[210px] bg-dark-layer-3 overflow-hidden shrink-0 flex flex-col items-center justify-start pt-[100px] px-5 pb-[50px] box-border">
          <div className="flex-1 flex flex-col items-start justify-between">
            <div className="flex flex-col items-start justify-start gap-[40px] text-[16px] md:text-5xl">
              <b className="relative">Wings off limits</b>
              <div className="self-stretch relative box-border h-px opacity-[0.8] border-t-[1px] border-solid border-gainsboro-200" />
            </div>
            {/* <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-end">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/heroiconsoutlinechat.svg"
                />
                <div className="relative text-base font-medium font-poppins text-inactive text-left">
                  Support
                </div>
              </div>
            </button> */}
          </div>
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start px-0 text-5xl text-gray-400">
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-center justify-end gap-[40px] bg-dark-layer-3 py-2">
              <div className="flex-1 rounded-3xl-5 h-[45px] flex flex-col items-start justify-center py-0 pr-0 pl-5 box-border">
                <div className="flex flex-row items-center w-full justify-between gap-[10px]">
                  <div
                    className="cursor-pointer hover:opacity-80 rounded bg-overlay-2 flex flex-row items-start justify-start p-1 gap-[3.7px] mr-4"
                    onClick={redirectHome}
                  >
                    <img
                      className="w-[30px] relative rounded-[2.99px] h-7 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/icon.png"
                    />
                  </div>

                  <div
                    className="cursor-pointer hover:opacity-80 rounded bg-overlay-2 flex flex-row items-start justify-start p-1 gap-[3.7px] mr-4"
                    onClick={redirectToAppStore}
                  >
                    <img
                      className="w-[93.3px] relative rounded-[2.99px] h-7 overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/appstore@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-screen overflow-y-auto w-full p-2">
              <div className="grid xl:grid-cols-2 2xl:grid-cols-4 items-center justify-center gap-[20px] xl:gap-[20px]">
                {gameData &&
                  gameData.map((f, idx) => (
                    <Card
                      key={idx}
                      src={f?.image}
                      title={f?.title}
                      number={idx + 1}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDesktop;
