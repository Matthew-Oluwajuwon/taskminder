import React, { useState } from "react"
import { ModalComponent } from "../../../common/components/modal.component"
import { Button, Col, Form, Row } from "antd"
import { CustomInput } from "../../../common/components/forms/Input.component"

interface Props {
  open: boolean
  handleCancel: () => void
  value: string;
  title: string;
  label: string;
  name: string;
}

type RequiredMark = boolean | "optional"

export const TaskFormModal: React.FC<Props> = ({ handleCancel, open, value, title, name, label }) => {
  const [requiredMark] = useState<RequiredMark>("optional")
  return (
    <ModalComponent
      open={open}
      width={"30rem"}
      title={
        <div className="font-[Epilogue-600] text-[1.2rem]">{title}</div>
      }
      footer={false}
      closable={false}
      handleCancel={handleCancel}
    >
      <Form
        layout="vertical"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        fields={[
          {
            name: "taskName",
            value,
          },
        ]}
        requiredMark={requiredMark}
      >
        <Row>
          <Col span={24}>
            <CustomInput
              label={label}
              name={name}
              rule={[{ required: true }]}
              type="text"
              value={value}
              className="text-[1rem] font-[Epilogue-400]"
            />
          </Col>
          <Col span={24}>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-primary-color text-[#ffffff] flex items-center justify-center py-5 rounded-none px-14 mx-auto font-[Epilogue-600] text-[1rem]"
            >
              Done
            </Button>
          </Col>
        </Row>
      </Form>
    </ModalComponent>
  )
}
