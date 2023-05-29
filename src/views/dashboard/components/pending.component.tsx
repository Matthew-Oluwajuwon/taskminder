/* eslint-disable prettier/prettier */
import { Card, Progress } from "antd"
import React from "react"
import More from "../../../assets/icons/more.svg"
import { motion } from "framer-motion"

export interface PendingProps {
  cardTitle: string
  noOfDays: number
  subTask: number
  percent: number
  color: string
}

export const Pending: React.FC = () => {
  const items: PendingProps[] = [
    {
      cardTitle: "Design rectification",
      noOfDays: 5,
      subTask: 4,
      percent: 50,
      color: "#07F349",
    },
    {
      cardTitle: "Express dashboard upgrade",
      noOfDays: 10,
      subTask: 3,
      percent: 80,
      color: "#0749F3",
    },
    {
      cardTitle: "Workspace setup",
      noOfDays: 7,
      subTask: 15,
      percent: 40,
      color: "#F38707",
    },
    {
      cardTitle: "New app feature",
      noOfDays: 7,
      subTask: 15,
      percent: 40,
      color: "#A8F307",
    },
    {
      cardTitle: "Blockchain task",
      noOfDays: 7,
      subTask: 15,
      percent: 40,
      color: "#B701E5",
    },
  ]

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
          <Card key={index} className="w-full border-none rounded-none mt-5">
            <div key={index} className="flex justify-between items-center">
              <h1 className="font-[Epilogue-500] text-[1rem] text-black">
                {item.cardTitle}
              </h1>
              <img src={More} alt="" />
            </div>
            <div className="flex justify-between items-center my-1 font-[Epilogue-500]">
              <p className="text-[#ff0000]">
                <span className="font-[Epilogue-600]">{item.noOfDays}</span>{" "}
                days ago
              </p>
              <p>
                <span className="font-[Epilogue-600]">{item.subTask}</span>{" "}
                sub-tasks left
              </p>
            </div>
            <div className="flex items-center justify-between">
              <Progress
                percent={item.percent}
                size={["90%" as any, 5]}
                strokeColor={item.color}
                showInfo={false}
              />
              <span className="flex gap-1 items-center">
                <span className={`font-semibold`} style={{ color: item.color }}>
                  {item.percent}%
                </span>
                done
              </span>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
