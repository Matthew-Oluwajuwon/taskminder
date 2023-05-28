import React, { useLayoutEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { OngoingProps } from "./components/ongoing.components"
import BackIcon from "../../assets/icons/back.svg"
import { motion } from "framer-motion"
import { Button, Card, Typography } from "antd"
import { TaskFormModal } from "./components/task-form-modal"

export const TaskExpanded: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [openSubTask, setOpenSubTask] = useState<boolean>(false)
  const [deleteTask, setDeleteTask] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState("")
  const location = useLocation()
  useLayoutEffect(() => {
    document.title = "Task | TaskMinder"
  }, [])

  const state: OngoingProps = location.state

  return (
    <div className="mt-10">
      <TaskFormModal
        open={openSubTask}
        value={state.cardTitle}
        handleCancel={() => setOpenSubTask(false)}
        title="Add new sub-task"
        name="subTaskName"
        label="Sub-task Name"
        btnName={"Done"}
        onChange={() => {}}
      />
      <TaskFormModal
        open={openModal}
        value={""}
        handleCancel={() => setOpenModal(false)}
        title="Rename Task"
        name="taskName"
        label="Task Name"
        btnName={"Done"}
        onChange={() => {}}
      />
      <TaskFormModal
        open={deleteTask}
        value={inputValue}
        handleCancel={() => setDeleteTask(false)}
        title="Delete Task"
        formDesc={
          <span>
            Are you sure you want to permanently delete this task? Copy task
            name and paste below{" "}
            <b className="text-[#ff0000]">{state.cardTitle}</b>
          </span>
        }
        name="taskName"
        label="Enter Task Name"
        btnName={"Delete task"}
        btnColor={true}
        disabled={inputValue === state.cardTitle ? false : true}
        onChange={(e: any) => setInputValue(e.target.value)}
      />
      <motion.div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => window.history.back()}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
        whileHover={{ scale: 0.98 }}
      >
        <img src={BackIcon} alt="" className="w-10" />
        <p className="text-primary-color text-[1.3rem] font-[Epilogue-500]">
          back
        </p>
      </motion.div>
      <div className="flex justify-between items-center mt-10">
        <Typography.Paragraph
          className="text-[1.3rem] font-[Epilogue-500]"
          ellipsis
        >
          {state.cardTitle}
        </Typography.Paragraph>
        <Button
          type="text"
          className="text-primary-color hover:bg-[#F7E8E6!important] rounded-none py-5 px-3 flex justify-center items-center hover:text-[#E15341!important] -mt-5 font-[Epilogue-500] text-[1rem]"
          onClick={() => setOpenModal(true)}
        >
          Rename
        </Button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-[1.05rem] font-[Epilogue-500]">Sub-tasks</h1>
        <span className="flex gap-1 items-center">
          <span className={`font-semibold`} style={{ color: state.color }}>
            {state.percent}%
          </span>
          done
        </span>
      </div>
      <div className="mt-5">
        <Card className="rounded-none border-none"></Card>
      </div>
      <div className="flex items-center gap-5 mx-auto justify-center mt-10">
        <Button
          type="primary"
          className="bg-[#F7E8E6] text-primary-color flex items-center justify-center py-5 rounded-none px-5 font-[Epilogue-600] text-[1rem]"
          onClick={() => setDeleteTask(true)}
        >
          Delete task
        </Button>
        <Button
          type="primary"
          className="bg-primary-color text-[#ffffff] flex items-center justify-center py-5 rounded-none px-5 font-[Epilogue-600] text-[1rem]"
          onClick={() => setOpenSubTask(true)}
        >
          Add new sub-task
        </Button>
      </div>
    </div>
  )
}
