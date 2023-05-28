/* eslint-disable prettier/prettier */
import React from "react"
import { Outlet } from "react-router-dom"

export const PageLayout: React.FC = () => {
  return (
    <div className="h-[100svh] bg-[#ffffff] flex justify-center">
      <div className="w-[95%] max-w-[45rem] bg-[#F9F8F8] h-full overflow-auto py-5 px-2 sm:px-10">
        <Outlet />
      </div>
    </div>
  )
}
