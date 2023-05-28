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
  const [tabKey, setTabKey] = useState<string>("1")
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
      <header className="flex justify-between items-start mt-2 md:mt-8">
        <div
          onClick={() => setOpenDrawer(true)}
          className="flex items-start sm:items-center justify-center gap-3 cursor-pointer hover:scale-95 hover:transition-all"
        >
          <section>
            <img src={Avatar} alt="" />
          </section>
          <section>
            <h1 className="text-primary-color font-[Epilogue-500] text-[0.9rem] md:text-[1.2rem] sm:-mt-5">
              Aloha👋🏽 matthewTheChef
            </h1>
            <p className="font-[Epilogue-400] text-[0.8rem] text-[#B8B6B6]">
              A new day to create, track and execute!
            </p>
          </section>
        </div>
        <h1 className="text-[#303030] font-[Epilogue-500] text-[0.8rem] sm:text-[0.9rem] md:text-[1.2rem]">
          {date}
        </h1>
      </header>
      <Drawer
        open={openDrawer}
        width={window.innerWidth > 992 ? "55%" : "95%"}
        closable={false}
        placement="left"
        onClose={() => setOpenDrawer(false)}
      >
        <div className="flex flex-col items-end relative w-full h-full lg:w-[50%] float-right">
          <div>
            <div className="flex items-center justify-start gap-3">
              <section>
                <img src={Avatar} alt="" />
              </section>
              <section>
                <h1 className="text-primary-color font-[Epilogue-500] text-[0.9rem] md:text-[1.2rem] sm:-mt-5">
                  matthewTheChef
                </h1>
              </section>
            </div>
            <div className="mt-10 leading-loose">
              <h1 className="font-[Epilogue-500] text-[1.1rem] mb-1">
                Personal Information
              </h1>
              <div className="text-[#5C5C5C] font-[Epilogue-400] text-[1rem]">
                <h2 className="flex items-center justify-between">
                  Username:&nbsp;{" "}
                  <span className="text-[#000000]">matthewTheChef</span>
                </h2>
                <h2 className="flex items-center justify-between">
                  Email Address:&nbsp;{" "}
                  <span className="text-[#000000]">
                    matthewthechef@gmail.com
                  </span>
                </h2>
                <p className="text-primary-color cursor-pointer text-[1rem] font-[Epilogue-400]">
                  Edit
                </p>
              </div>
              <div className="mt-10 leading-loose">
                <h1 className="font-[Epilogue-500] text-[1.1rem] mb-1">
                  Security
                </h1>
                <div className="text-[#5C5C5C] font-[Epilogue-400] text-[1rem]">
                  <h2 className="flex items-center justify-between">
                    Password:&nbsp;{" "}
                    <span className="text-[#E15341] cursor-pointer">
                      Change Password
                    </span>
                  </h2>
                </div>
              </div>
              <div className="mt-10 leading-loose">
                <h1 className="font-[Epilogue-500] text-[1.1rem] mb-1">
                  Statistics
                </h1>
                <div className="text-[#5C5C5C] font-[Epilogue-400] text-[1rem]">
                  <h2 className="flex items-center justify-between">
                    Total Number of Task:&nbsp;{" "}
                    <span className="text-[#000000] cursor-pointer font-bold">
                      64
                    </span>
                  </h2>
                  <h2 className="flex items-center justify-between">
                    Number of Ongoing Task:&nbsp;{" "}
                    <span className="text-[#000000] cursor-pointer">12</span>
                  </h2>
                  <h2 className="flex items-center justify-between">
                    Number of Upcoming Task:&nbsp;{" "}
                    <span className="text-[#000000] cursor-pointer">38</span>
                  </h2>
                  <h2 className="flex items-center justify-between">
                    Number of Completed Task:&nbsp;{" "}
                    <span className="text-[#000000] cursor-pointer">8</span>
                  </h2>
                  <h2 className="flex items-center justify-between">
                    Number of Pending Task:&nbsp;{" "}
                    <span className="text-[#ff0000] cursor-pointer">2</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <Button
            type="primary"
            className="bg-[#F7E8E6] mb-5 mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 text-primary-color flex items-center justify-center py-5 rounded-none px-5 font-[Epilogue-600] text-[1rem]"
          >
            Logout
          </Button>
        </div>
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
