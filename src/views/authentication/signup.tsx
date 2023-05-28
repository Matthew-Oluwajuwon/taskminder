/* eslint-disable prettier/prettier */
import { Col, Form, FormProps, Row } from "antd"
import { motion } from "framer-motion"
import React, { useLayoutEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CustomInput } from "../../common/components/forms/Input.component"
import { SubmitButton } from "../../common/components/forms/submitButton.component"

export const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  useLayoutEffect(() => {
    document.title = "Signup | TaskMinder"
  }, [])
  const formConfig: FormProps = {
    layout: "vertical",
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  }
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.4,
        type: "tween",
        stiffness: 200,
      }}
      className="grid place-content-center h-[95%] mx-10 lg:mx-12"
    >
      <h1 className="text-primary-color font-[Epilogue-600] text-[2rem]">
        Sign Up
      </h1>
      <p className="text-[#B8B6B6] font-[Epilogue-400] mt-2 leading-relaxed">
        Create, track and execute task the easy way with{" "}
        <span className="text-primary-color"> TaskMinder</span>
      </p>
      <Form
        className="lg:w-[75%] xl:w-[60%] mt-10"
        {...formConfig}
        fields={[
          {
            name: "email",
            value: undefined,
          },
          {
            name: "password",
            value: undefined,
          },
          {
            name: "username",
            value: undefined,
          },
        ]}
      >
        <Row>
          <Col span={24}>
            <CustomInput
              name="email"
              type="email"
              label="Enter Email Address"
              value={undefined}
              rule={[
                {
                  required: true,
                  pattern: new RegExp(
                    /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                  ),
                  message: "Invalid Email",
                },
              ]}
            />
          </Col>
          <Col span={24}>
            <CustomInput
              name="username"
              type="text"
              label="Create Username"
              value={undefined}
              rule={[
                {
                  required: true,
                },
              ]}
              placeholder="e.g. matthewTheChef"
            />
          </Col>
          <Col span={24}>
            <CustomInput
              label="Create Password"
              name="password"
              value={undefined}
              rule={[{ required: true }]}
              type={showPassword ? "text" : "password"}
              suffix={
                <span
                  className="font-bold text-[#5C5C5C] font-[Epilogue-500] px-3 cursor-pointer hover:scale-95 hover:transition-all"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              }
            />
          </Col>
          <Col span={24}>
            <SubmitButton label="Create Account" />
          </Col>
        </Row>
      </Form>
      <p className="text-[0.8rem] text-[#B8B6B6] font-[Epilogue-400] mt-2 text-center lg:text-left">
        Already have a TaskMinder account?{" "}
        <Link
          to="/"
          className="font-bold text-primary-color cursor-pointer hover:scale-95 hover:transition-all"
        >
          Sign in
        </Link>{" "}
      </p>
    </motion.div>
  )
}
