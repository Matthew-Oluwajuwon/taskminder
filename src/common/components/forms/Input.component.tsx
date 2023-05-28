import { Form, Input } from "antd"
import React from "react"
import TextArea from "antd/es/input/TextArea"
import { Rule } from "antd/es/form"

interface Props {
  label: string
  name: string
  value: any
  rule: Rule[]
  suffix?: React.ReactNode
  type: string
  placeholder?: string
  className?: any
}

export const CustomInput: React.FC<Props> = ({
  name,
  label,
  value,
  rule,
  type,
  suffix,
  placeholder,
  className,
}) => {
  return (
    <Form.Item
      label={
        <span className="text-[#5C5C5C] font-[Epilogue-600]">{label}</span>
      }
      name={name}
      required
      rules={rule}
    >
      <Input
        type={type}
        placeholder={placeholder}
        className={`py-3 bg-[#F2F1F1!important] rounded-none ${className}`}
        // onChange={(e) => setFormRequest(e.target.value, formFieldName)}
        value={value}
        suffix={suffix}
      />
    </Form.Item>
  )
}
