import { Card, Progress } from "antd"
import React from "react"
import More from "../../../assets/icons/more.svg"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export interface UpcomingProp {
  cardTitle: string
  date: string;
  subTask: number
  percent: number
}

export const UpcomingComponent: React.FC = () => {
  const items: UpcomingProp[] = [
    {
      cardTitle: "Design rectification",
      date: "May 1 - May 10",
      subTask: 4,
      percent: 100
    },
    {
      cardTitle: "Express dashboard upgrade",
      date: "May 12 - May 17",
      subTask: 3,
      percent: 100
    },
    {
      cardTitle: "Workspace setup",
      date: "May 20 - May 28",
      subTask: 15,
      percent: 100
    },
    {
      cardTitle: "New app feature",
      date: "June 1 - June 10",
      subTask: 15,
      percent: 100
    },
    {
      cardTitle: "Blockchain task",
      date: "June 8 - June 15",
      subTask: 15,
      percent: 100
    },
  ]

  const navigate = useNavigate()

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
        type: "spring",
      },
    },
  }

  const children = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      {items.map((item, index) => (
        <motion.div
          variants={children}
          className="w-full border-none rounded-none mt-5 cursor-pointer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          whileHover={{ scale: 1.05 }}
          key={index}
        >
          <Card
          key={index}
            className="w-full border-none rounded-none mt-5 cursor-pointer"
            onClick={() =>
              navigate(
                `/dashboard/upcoming-task?task=${item.cardTitle
                  ?.toLowerCase()
                  .replaceAll(" ", "-")}`,
                { state: item },
              )
            }
          >
            <div key={index} className="flex justify-between items-center">
              <h1 className="font-[Epilogue-500] text-[1rem] text-black">
                {item.cardTitle}
              </h1>
              <img src={More} alt="" />
            </div>
            <div className="flex justify-between items-center my-1 font-[Epilogue-500]">
                <span className="font-[Epilogue-600]">{item.date}</span>
              <p>
                <span className="font-[Epilogue-600]">{item.subTask}</span>{" "}
                sub-tasks
              </p>
            </div>
            <div className="flex items-center justify-between">
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
