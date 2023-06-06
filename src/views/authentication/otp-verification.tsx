/* eslint-disable prettier/prettier */
import { Col, Form, FormProps, Row } from "antd"
import { motion } from "framer-motion"
import React, { useLayoutEffect } from "react"
import BackIcon from "../../assets/icons/back.svg"
import PinInput from "react-pin-input"
import { SubmitButton } from "../../common/components/forms/submitButton.component"
import { formMotion } from "../../utils/motion"

export const OTPVerification: React.FC = () => {
  useLayoutEffect(() => {
    document.title = "OTP Verification | TaskMinder"
  }, [])
  const formConfig: FormProps = {
    layout: "vertical",
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  }
  return (
    <div className="grid relative h-[95%]">
      <div
        className="hidden lg:flex items-center justify-center gap-3 absolute top-10 left-10 lg:left-12 cursor-pointer hover:scale-90 hover:transition-all"
        onClick={() => window.history.back()}
      >
        <img src={BackIcon} alt="" />
        <p className="text-primary-color text-[1.2rem] font-[Epilogue-500]">
          back
        </p>
      </div>
      <motion.div
        variants={formMotion()}
        initial="hidden"
        animate="show"
        className="grid place-content-center m-10 lg:m-12"
      >
        <h1 className="text-primary-color font-[Epilogue-600] text-[2rem] text-center lg:text-left">
          Verify Account
        </h1>
        <p className="text-[#B8B6B6] font-[Epilogue-400] mt-2 leading-relaxed w-full md:w-1/2 lg:w-full text-center lg:text-left mx-auto lg:mx-0">
          We have sent a verification code to matthewthecheff@gmail.com, enter
          it to complete your sign up process
        </p>
        <Form
          className="lg:w-[60%] w-full mt-10 mx-auto lg:mx-0"
          {...formConfig}
          fields={[
            {
              name: "otp",
              value: undefined,
            },
            {
              name: "userId",
              value: undefined,
            },
          ]}
        >
          <Row>
            <Col span={24}>
              <Form.Item
                label={
                  <span className="text-[#5C5C5C] font-[Epilogue-600]">
                    Enter Code
                  </span>
                }
              >
                <PinInput
                  length={6}
                  type="numeric"
                  focus={true}
                  inputMode="number"
                  inputStyle={{
                    borderColor: "#F2F1F1",
                    backgroundColor: "#F2F1F1",
                    margin: "0.2rem",
                  }}
                  inputFocusStyle={{ borderColor: "#E15341" }}
                  //   onComplete={(value) => {
                  //     VerifyPin(value);
                  //   }}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
              </Form.Item>
            </Col>
            <Col span={24} className="mt-5">
              <SubmitButton label="Verify Account" />
            </Col>
          </Row>
        </Form>
      </motion.div>
    </div>
  )
}
