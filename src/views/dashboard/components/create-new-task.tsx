/* eslint-disable prettier/prettier */
import React, { useCallback, useLayoutEffect, useState } from "react"
import BackIcon from "../../../assets/icons/back.svg"
import { motion } from "framer-motion"
import { Button, Col, ColorPicker, DatePicker, Form, Row } from "antd"
import Calender from "../../../assets/icons/calendar.svg"
import { CustomInput } from "../../../common/components/forms/Input.component"
import red from "../../../assets/icons/red-dot.svg"
import blue from "../../../assets/icons/blue-dot.svg"
import pink from "../../../assets/icons/pink-dot.svg"
import green from "../../../assets/icons/green-dot.svg"
import colors from "../../../assets/icons/colors.svg"

type RequiredMark = boolean | "optional"

interface Data {
    taskName: string,
    subTasks: string[],
    startDate: string,
    endDate: string,
    taskTheme: string
}

export const CreateNewTask: React.FC = () => {
    const [subTasks, setSubTasks] = useState<number[]>([1])
  const [requiredMark] = useState<RequiredMark>("optional")
  const [data, setData] = useState<Data>({
    taskName: "",
    subTasks: [],
    startDate: "",
    endDate: "",
    taskTheme: ""
  })
  useLayoutEffect(() => {
      document.title = "Create New Task | TaskMinder"
    }, [])
    
  const setRequest = useCallback(
    (value: any, key: keyof Data) => {
      setData({ ...data, [key]: value })
    },
    [data],
  )
  
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form.validateFields().then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [form, values]);
  
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
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
        <h1 className="font-[Epilogue-500] text-[1.2rem]">Create New Task</h1>
      </div>
      <div className="mt-5 h-full">
        <Form
        form={form}
          layout="vertical"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          requiredMark={requiredMark}
          className="w-full lg:w-[60%]"
        >
          <Row gutter={16}>
            <Col span={24}>
              <CustomInput
                label={"Task Title"}
                name={"taskTitle"}
                placeholder="e.g. House cleaning"
                value={undefined}
                rule={[{ required: true }]}
                type={"text"}
                onChange={(e) => setRequest(e.target.value, "taskName")}
              />
            </Col>
            {subTasks.map((_subTask, index) => (
              <Col span={24} key={index}>
                <CustomInput
                  label={"Sub Tasks"}
                  name={"subTasks"}
                  placeholder="e.g. Do launddry"
                  value={undefined}
                  rule={[{ required: false }]}
                  type={"text"}
                />
              </Col>
            ))}
            <Col
              span={24}
              onClick={() => setSubTasks([...subTasks, 1])}
              className="cursor-pointer -mt-5 mb-5 text-primary-color font-[Epilogue-600]"
            >
              Add sub-task
            </Col>
            <Col span={12}>
              <Form.Item
                label={
                  <span className="text-[#5C5C5C] font-[Epilogue-600]">
                    Start Date
                  </span>
                }
                name={"startDate"}
                rules={[{ required: true }]}
              >
                <DatePicker
                  placeholder="DD/MM/YYYY"
                  className="bg-[#F2F1F1] rounded-none border-none p-3 w-full"
                  suffixIcon={<img src={Calender} alt="" />}
                  onChange={(e) => setRequest(e, "startDate")}
                  format={"DD/MM/YYYY"}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={
                  <span className="text-[#5C5C5C] font-[Epilogue-600]">
                    End Date
                  </span>
                }
                name={"endDate"}
                rules={[{ required: true }]}
              >
                <DatePicker
                  placeholder="DD/MM/YYYY"
                  className="bg-[#F2F1F1] w-full border-none rounded-none p-3"
                  suffixIcon={<img src={Calender} alt="" />}
                  onChange={(e) => setRequest(e, "endDate")}
                  format={"DD/MM/YYYY"}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={
                  <span className="text-[#5C5C5C] font-[Epilogue-600]">
                    Select Task Theme
                  </span>
                }
                name={"taskTheme"}
                rules={[{ required: false }]}
              >
                <div className="flex items-center gap-2">
                  <img src={red} className="cursor-pointer" onChange={(e) => setRequest(e, "taskTheme")} alt="" />
                  <img src={green} className="cursor-pointer" onChange={(e) => setRequest(e, "taskTheme")} alt="" />
                  <img src={blue} className="cursor-pointer" onChange={(e) => setRequest(e, "taskTheme")} alt="" />
                  <img src={pink} className="cursor-pointer" onChange={(e) => setRequest(e, "taskTheme")} alt="" />
                  <ColorPicker
                    children={<img src={colors} alt="" />}
                    onChange={(e) => setRequest(e, "taskTheme")}
                    presets={[
                      {
                        label: "Recommended",
                        colors: [
                          "#000000",
                          "#000000E0",
                          "#000000A6",
                          "#00000073",
                          "#00000040",
                          "#00000026",
                          "#0000001A",
                          "#00000012",
                          "#0000000A",
                          "#00000005",
                          "#F5222D",
                          "#FA8C16",
                          "#FADB14",
                          "#8BBB11",
                          "#52C41A",
                          "#13A8A8",
                          "#1677FF",
                          "#2F54EB",
                          "#722ED1",
                          "#EB2F96",
                          "#F5222D4D",
                          "#FA8C164D",
                          "#FADB144D",
                          "#8BBB114D",
                          "#52C41A4D",
                          "#13A8A84D",
                          "#1677FF4D",
                          "#2F54EB4D",
                          "#722ED14D",
                          "#EB2F964D",
                        ],
                      },
                      {
                        label: "Recent",
                        colors: [],
                      },
                    ]}
                  />
                </div>
              </Form.Item>
            </Col>
            <Col
              span={24}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-5"
            >
              <Button
                type="primary"
                htmlType="submit"
                disabled={!submittable}
                className={`${
                  !submittable
                    ? `bg-[#E1534130!important]`
                    : submittable
                    ? "bg-[#FF3535]"
                    : ""
                } text-[#ffffff!important] border-none flex items-center justify-center py-5 rounded-none px-28 mx-auto font-[Epilogue-600] text-[1rem]`}
              >
                Create task
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}
