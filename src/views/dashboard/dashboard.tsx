import React, { useLayoutEffect, useState } from "react"
import Avatar from "../../assets/images/avatar.svg"
import { Button, Drawer, Tabs } from "antd"
import { Ongoing } from "./components/ongoing.components"
import { Pending } from "./components/pending.component"
import { Completed } from "./components/completed.component"
import { UpcomingComponent } from "./components/upcoming.component"

export const Dashboard: React.FC = () => {
  useLayoutEffect(() => {
    document.title = "Dashboard | TaskMinder"
  }, [])

  const date = new Date().toUTCString().slice(5, 16)
  const [tabKey, setTabKey] = useState<string>("1");
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  const handleTabChange = (e: string) => {
    setTabKey(e)
  }

  const tabItems = [
    {
      key: "1",
      name: (
        <div
          key={"1"}
          className={`flex items-center gap-1 text-[#000000] ${
            tabKey === "1" ? "text-[#000000]" : "text-[#A09F9F]"
          } font-[Epilogue-500]`}
        >
          Ongoing{" "}
          <div
            className={`w-[17px] h-[17px] rounded-full flex items-center justify-center text-[#ffffff] ${
              tabKey === "1" ? "bg-primary-color" : "bg-[#A09F9F]"
            } text-[0.6rem]`}
          >
            16
          </div>
        </div>
      ),
      item: <Ongoing />,
    },
    {
      key: "2",
      name: (
        <div
          key="2"
          className={`flex items-center gap-1 text-[#000000] ${
            tabKey === "2" ? "text-[#000000]" : "text-[#A09F9F]"
          } font-[Epilogue-500]`}
        >
          Upcoming{" "}
          <div
            className={`w-[17px] h-[17px] rounded-full flex items-center justify-center text-[#ffffff] ${
              tabKey === "2" ? "bg-primary-color" : "bg-[#A09F9F]"
            } text-[0.6rem]`}
          >
            12
          </div>
        </div>
      ),
      item: <UpcomingComponent />,
    },
    {
      key: "3",
      name: (
        <div
          key={"3"}
          className={`flex items-center gap-1 text-[#000000] ${
            tabKey === "3" ? "text-[#000000]" : "text-[#A09F9F]"
          } font-[Epilogue-500]`}
        >
          Completed{" "}
          <div
            className={`w-[17px] h-[17px] rounded-full flex items-center justify-center text-[#ffffff] ${
              tabKey === "3" ? "bg-primary-color" : "bg-[#A09F9F]"
            } text-[0.6rem]`}
          >
            24
          </div>
        </div>
      ),
      item: <Completed />,
    },
    {
      key: "4",
      name: (
        <div
          key={"4"}
          className={`flex items-center gap-1 text-[#000000] ${
            tabKey === "4" ? "text-[#000000]" : "text-[#A09F9F]"
          } font-[Epilogue-500]`}
        >
          Pending{" "}
          <div
            className={`w-[17px] h-[17px] rounded-full flex items-center justify-center text-[#ffffff] ${
              tabKey === "4" ? "bg-primary-color" : "bg-[#A09F9F]"
            } text-[0.6rem]`}
          >
            2
          </div>
        </div>
      ),
      item: <Pending />,
    },
  ].map((items) => ({
    key: items.key,
    label: items.name,
    children: items.item,
  }))

  return (
    <>
      <header className="flex items-center justify-between">
        <div onClick={() => setOpenDrawer(true)} className="flex items-center justify-center gap-3 mt-8 cursor-pointer hover:scale-95 hover:transition-all">
          <section>
            <img src={Avatar} alt="" />
          </section>
          <section>
            <h1 className="text-primary-color font-[Epilogue-500] text-[1.2rem]">
              Aloha👋🏽 matthewTheChef
            </h1>
            <p className="font-[Epilogue-400] text-[0.8rem] text-[#B8B6B6]">
              A new day to create, track and execute!
            </p>
          </section>
        </div>
        <div className="text-[#303030] font-[Epilogue-500] text-[0.8rem] sm:text-[1.2rem]">
          {date}
        </div>
      </header>
      <Drawer open={openDrawer} width="55%" closable={false} placement="left" onClose={() => setOpenDrawer(false)}>
        
      </Drawer>
      <main className="my-5">
        <h1 className="text-[#000000] font-[Epilogue-500] text-[1.2rem]">
          My tasks
        </h1>
        <div className="my-5">
          <div className="flex items-center justify-between relative">
            <Tabs
              defaultActiveKey="1"
              items={tabItems}
              onChange={handleTabChange}
              className="w-full"
            />
            <Button
              type="primary"
              className="bg-[#F7E8E6] absolute right-2 -top-14 md:top-2 text-primary-color flex items-center justify-center py-5 rounded-none px-5 font-[Epilogue-600] text-[1rem]"
            >
              Create new task
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
